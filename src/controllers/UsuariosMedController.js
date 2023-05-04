const usuariosMedModel = require('../models/usuariosMedModel');
const usuariosModel = require('../models/usuariosModel');
const medicamentosModel = require('../models/medicamentosModel');

const usuariosMedController = {
    createUsuariosMed(req, res) {
        const {tblUserIdUser,
               tblMedIdMed } = req.body;
        usuariosMedModel.create(
          {tblUserIdUser,
          tblMedIdMed})
          .then(()=>{
              return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:"CADASTRO NA TABELA INTERMEDIÁRIA CRIADO"
              });
          })
          .catch((error)=>{
              return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO REALIZAR CADASTRO.",
                    errorObject:error
              });
          })
        /*try {
          const usuario = UsuariosModel.findOne({ where: { id_User } });
          const medicamento = MedicamentosModel.findOne({ where: { id_Med } });
      
          if (!usuario || !medicamento) {
            return res.status(404).json({ mensagemStatus: 'Usuário ou Medicamento não encontrado' });
          }
      
         UsuariosMedModel.create({ id_User, id_Med });
      
          return res.status(201).json({ mensagemStatus: 'Relacionamento criado com sucesso!' });
        } catch(error) {
          return res.status(400).json({ mensagemStatus: 'Erro ao criar relacionamento', error });
        }*/
    },
    getUsuariosMeds(req, res) {
        usuariosMedModel.findAll()
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS LISTADOS.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR DADOS DA TABELA INTERMEDIÁRIA.",
                errorObject:error
            });
        })
    }
};

module.exports = usuariosMedController;