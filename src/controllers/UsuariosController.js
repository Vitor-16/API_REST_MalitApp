const EnderecosModel = require('../models/EnderecosModel');
const UsuariosModel = require('../models/UsuariosModel');

const UsuariosController = {
    createUser: (req, res)=>{
        let{nome_Usuarios, cpf_Usuarios, dataNasc_Usuarios, telefone_Usuarios,
        email_Usuarios, senha_Usuarios} = req.body
        UsuariosModel.create(
        {nome_Usuarios, cpf_Usuarios, dataNasc_Usuarios, telefone_Usuarios,
        email_Usuarios, senha_Usuarios}
        )
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"PARABÉNS, CADASTRADO REALIZADO !!!"
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO SE CADASTRAR.",
                        errorObject:error
                    });
             }
        )
    },
    getUser:(req, res)=>{
        UsuariosModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USUÁRIOS LISTADOS COM SUCESSO !!!",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR USUÁRIOS.",
                    errorObject:error
                });
            }
        )
    },
    getUserEmail:(req, res)=>{
        let{email_Usuarios} = req.params;
        UsuariosModel.findOne({attributes:['email_Usuarios', 'senha_Usuarios'], where:{email_Usuarios}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USÚARIO LISTADO POR EMAIL.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR USÚARIO POR EMAIL.",
                    errorObject:error
                });
            }
        )
    },
    getUserCPF:(req, res)=>{
        let{cpf_Usuarios} = req.params;
        UsuariosModel.findOne({attributes:['cpf_Usuarios', 'senha_Usuarios'], where:{cpf_Usuarios}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USÚARIO LISTADO POR CPF.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR USÚARIO POR CPF.",
                    errorObject:error
                });
            }
        )
    },
    putUser:(req, res)=>{
        let{nome_Usuarios, cpf_Usuarios, dataNasc_Usuarios, telefone_Usuarios, email_Usuarios, senha_Usuarios} = req.body;
        const{id_Usuarios} = req.params;
        UsuariosModel.update(
            {nome_Usuarios, cpf_Usuarios, dataNasc_Usuarios, telefone_Usuarios, email_Usuarios, senha_Usuarios},
            {where:{id_Usuarios}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"SEUS DADOS FORAM ATUALIZADOS COM SUCESSO !!!"
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR SEUS DADOS.",
                    errorObject:error
                });
            }
        )
    },
    destroyUser:(req, res)=>{
        const{id_Usuarios} = req.params;
        UsuariosModel.destroy(
            {where:{id_Usuarios}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USUÁRIO EXCLUÍDO !!!",
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO NA EXCLUSÃO DO USUÁRIO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = UsuariosController;