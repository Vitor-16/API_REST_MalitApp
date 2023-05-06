const usuariosMedModel = require('../models/UsuariosMedModel');

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