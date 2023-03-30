const UsuariosModel = require('../models/UsuariosModel');
const MedicamentosModel = require('../models/MedicamentosModel');
const UsuariosMedModel = require('../models/UsuariosMedModel');

const UsuariosMedController = {
    createUserMed: (req, res)=>{
        let{} = req.body
        UsuariosMedModel.create(
        {}
        )
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"PARABÉNS, TABELA INTERMEDIÁRIA CRIADA !!!"
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO CRIAR TABELA INTERMEDIÁRIA.",
                        errorObject:error
                    });
             }
        )
    },
    getUserMed:(req, res)=>{
        UsuariosMedModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"TODAS OS DADOS DA TABELA INTERMEDIÁRIA LISTADAS !!!",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR DADOS DA TABELA INTERMEDIÁRIA.",
                    errorObject:error
                });
            }
        )
    },
    getUserMedID:(req, res)=>{
        let{id_UsuariosMed} = req.params;
        UsuariosMedModel.findByPk({attributes:['id_UsuariosMed'], where:{id_UsuariosMed}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DA TABELA INTERMEDIÁRIA LISTADOS POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR DADOS DA TABELA INTERMEDIÁRIA POR ID.",
                    errorObject:error
                });
            }
        )
    },
    putUserMed:(req, res)=>{
        let{} = req.body;
        const{id_UsuariosMed} = req.params;
        UsuariosMedModel.update(
            {},
            {where:{id_UsuariosMed}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DA TABELA INTERMEDIÁRIA FORAM ATUALIZADOS COM SUCESSO !!!"
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR DADOS DA TABELA INTERMEDIÁRIA.",
                    errorObject:error
                });
            }
        )
    },
    destroyUserMed:(req, res)=>{
        const{id_UsuariosMed} = req.params;
        UsuariosMedModel.destroy(
            {where:{id_UsuariosMed}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DA TABELA INTERMEDIÁRIA DELETADOS !!!",
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO NA EXCLUSÃO DOS DADOS DA TABELA INTERMEDIÁRIA.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = UsuariosMedController;