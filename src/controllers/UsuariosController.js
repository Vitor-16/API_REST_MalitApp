const usuariosModel = require('../models/UsuariosModel');
const enderecosModel = require('../models/EnderecosModel');
const bcrypt = require('bcrypt');
const saltRounds = 10; //define o número de rounds da criptografia usada em update de senha

const usuariosController = {
    createUsuario: async (req, res)=>{
        let{nome_usuario,
            cpf, 
            dataNasc, 
            telefone,
            email, 
            senha} = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const senhaCriptografada = await bcrypt.hash(senha, salt);

        usuariosModel.create(
            {nome_usuario, 
             cpf, 
             dataNasc, 
             telefone,
             email, 
             senha : senhaCriptografada
        })
        .then(()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CADASTRO REALIZADO !!!"
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO SE CADASTRAR.",
                errorObject:error
            });
        })
    },
    getUsuarios:(req, res) => {
        usuariosModel.findAll({
            order: [['id_usuario', 'DESC']],
            include: [{
                attributes: ['cep',
                             'estado', 
                             'cidade', 
                             'bairro', 
                             'numero'],
                model: enderecosModel 
            }]
        })
        .then((response) => {
          return res.status(200).json({
            erroStatus: false,
            mensagemStatus: "USUÁRIOS LISTADOS COM SUCESSO !!!",
            data:response
          });
        })
        .catch((error) => {
          return res.status(400).json({
            erroStatus: true,
            mensagemStatus: "ERRO AO LISTAR USUÁRIOS.",
            errorObject: error
          });
        })
    },
    getCpf:(req, res)=>{
        let{cpf} = req.params;
        usuariosModel.findOne(
            {attributes:['cpf',
                         'senha'], 
             where:{cpf}
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USÚARIO LISTADO POR CPF.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR USÚARIO POR CPF.",
                errorObject:error
            });  
        })
    },
    getCpfAll:(req, res)=>{
        let{cpf} = req.params;
        usuariosModel.findOne(
            {attributes:['cpf',
                         'nome_usuario', 
                         'dataNasc', 
                         'telefone',
                         'email', 
                         'senha' ], 
             where:{cpf}
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USÚARIO LISTADO POR CPF RETORNANDO TODOS ATRIBUTOS.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR USÚARIO POR CPF.",
                errorObject:error
            });
        })
    },
    putUsuario:(req, res)=>{
        let{nome_usuario,
            cpf, 
            dataNasc,
            telefone,
            email,
            tblEnderecoIdEnderecos} = req.body;
        const{id_usuario} = req.params;
        usuariosModel.update(
            {nome_usuario, 
             cpf,
             dataNasc, 
             telefone, 
             email,
             tblEnderecoIdEnderecos},
            {where:{id_usuario}
        })
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"SEUS DADOS FORAM ATUALIZADOS COM SUCESSO !!!",
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR SEUS DADOS.",
                errorObject:error
            });
        })
    },
    putSenha:(req, res)=>{
        const {senha} = req.body;
        const {cpf} = req.params;
    
        bcrypt.hash(senha, saltRounds, (err, hash) => {
            if (err) {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO CRIPTOGRAFAR SENHA.",
                    errorObject: err
                });
            }
    
            usuariosModel.update(
                {senha: hash},
                {where: {cpf}}
            )
            .then(() => {
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"SENHA ALTERADA COM SUCESSO!!!"
                });
            })
            .catch((error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR SENHA.",
                    errorObject:error
                });
            });
        });
    },
    destroyUsuario:(req, res)=>{
        const{id_usuario} = req.params;
        usuariosModel.destroy(
            {where:{id_usuario}
        })
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUÁRIO EXCLUÍDO !!!",
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO NA EXCLUSÃO DO USUÁRIO.",
                errorObject:error
            });
        })
    }
};

module.exports = usuariosController;