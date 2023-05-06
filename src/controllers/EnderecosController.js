const enderecosModel = require('../models/EnderecosModel');

const enderecosController = {
    createEndereco: (req, res)=>{
        let{cep, 
            estado, 
            cidade,
            bairro, 
            logradouro, 
            numero} = req.body
        enderecosModel.create(
            {cep, 
             estado, 
             cidade,
             bairro, 
             logradouro, 
             numero
        })
        .then(()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"ENDEREÇO CADASTRADO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR SEU ENDEREÇO.",
                errorObject:error
            });
        })
    },
    getEndereco:(req, res)=>{
        enderecosModel.findAll()
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"ENDEREÇOS LISTADOS.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR ENDEREÇOS.",
                errorObject:error
            });
        })
    },
    getEnderecoId:(req, res)=>{
        let {id_endereco} = req.params;
        enderecosModel.findByPk(id_endereco)
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"ENDEREÇOS LISTADOS POR ID.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR ENDEREÇOS POR ID.",
                errorObject:error
            });
        })
    },
    getEnderecoCep:(req, res)=>{
        let{cep} = req.params;
        enderecosModel.findOne({attributes:['estado',
                                            'cidade',
                                            'bairro', 
                                            'logradouro', 
                                            'numero'], where:{cep}})
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"ENDEREÇOS LISTADOS POR CEP.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR ENDEREÇOS POR CEP.",
                errorObject:error
            });
        })
    },
    putEndereco:(req, res)=>{
        let{cep, 
            estado, 
            cidade,
            bairro, 
            logradouro, 
            numero} = req.body;
        let{id_endereco} = req.params;
        enderecosModel.update(
            {cep, 
             estado, 
             cidade,
             bairro, 
             logradouro, 
             numero},
            {where:{id_endereco}}
        )
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS DO SEU ENDEREÇO ATUALIZADOS COM SUCESSO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR SEU ENDEREÇO.",
                errorObject:error
            });
        })
    },
    destroyEndereco:(req, res)=>{
        let{id_endereco} = req.params;
        enderecosModel.findByPk(id_endereco)
        .then((Enderecos)=>{
            if (Enderecos){
                enderecosModel.destroy({where:{id_endereco}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"ENDEREÇO EXCLUÍDO.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DO ENDEREÇO.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"ENDEREÇO NÃO ENCONTRADO."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR SEU ENDEREÇO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = enderecosController;