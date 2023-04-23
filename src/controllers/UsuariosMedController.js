const UsuariosMedModel = require('../models/UsuariosMedModel');
const UsuariosModel = require('../models/UsuariosModel');
const MedicamentosModel = require('../models/MedicamentosModel');

const UsuariosMedController = {
    createUsuariosMed(req, res) {
        const { cpf_Usuarios, id_Medicamento } = req.body;
        try {
          const usuario = UsuariosModel.findOne({ where: { cpf_Usuarios } });
          const medicamento = MedicamentosModel.findOne({ where: { id_Medicamento } });
      
          if (!usuario || !medicamento) {
            return res.status(404).json({ message: 'Usuário ou Medicamento não encontrado' });
          }
      
         UsuariosMedModel.create({ cpf_Usuarios, id_Medicamento });
      
          return res.status(201).json({ message: 'Relacionamento criado com sucesso!' });
        } catch(error) {
          return res.status(500).json({ message: 'Erro ao criar relacionamento', error });
        }
      },
    getUsuariosMeds(req, res) {
        UsuariosMedModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS LISTADOS.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR DADOS.",
                    errorObject:error
                });
            }
        )
      },
      
};

module.exports = UsuariosMedController;