const EnderecosModel = require('../models/EnderecosModel');

const EnderecosController = {
    createEnderecos: (req, res)=>{
        let{cep_Enderecos, estado_Enderecos, cidade_Enderecos,
        bairro_Enderecos, logradouro_Enderecos, numero_Enderecos} = req.body
        EnderecosModel.create({cep_Enderecos, estado_Enderecos, cidade_Enderecos,
        bairro_Enderecos, logradouro_Enderecos, numero_Enderecos
        })
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"ENDEREÇO CADASTRADO."
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO CADASTRAR SEU ENDEREÇO.",
                        errorObject:error
                    });
             }
        )
    },
    getEnderecos:(req, res)=>{
        EnderecosModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"ENDEREÇOS LISTADOS.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR ENDEREÇOS.",
                    errorObject:error
                });
            }
        )
    },
    getEnderecosID:(req, res)=>{
        let {id_Enderecos} = req.params;
        EnderecosModel.findByPk(id_Enderecos)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"ENDEREÇOS LISTADOS POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR ENDEREÇOS POR ID.",
                    errorObject:error
                });
            }
        )
    },
    getEnderecosCEP:(req, res)=>{
        let{cep_Enderecos} = req.params;
        EnderecosModel.findOne({attributes:['estado_Enderecos', 'cidade_Enderecos',
        'bairro_Enderecos', 'logradouro_Enderecos', 'numero_Enderecos'], where:{cep_Enderecos}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"ENDEREÇOS LISTADOS POR CEP.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR ENDEREÇOS POR CEP.",
                    errorObject:error
                });
            }
        )
    },
    putEnderecos:(req, res)=>{
        let{cep_Enderecos, estado_Enderecos, cidade_Enderecos,
        bairro_Enderecos, logradouro_Enderecos, numero_Enderecos} = req.body;
        let{id_Enderecos} = req.params;
        EnderecosModel.update(
            {cep_Enderecos, estado_Enderecos, cidade_Enderecos,
            bairro_Enderecos, logradouro_Enderecos, numero_Enderecos},
            {where:{id_Enderecos}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DO SEU ENDEREÇO ATUALIZADOS COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR SEU ENDEREÇO.",
                    errorObject:error
                });
            }
        )
    },
    destroyEnderecos:(req, res)=>{
        let{id_Enderecos} = req.params;
        EnderecosModel.findByPk(id_Enderecos)
        .then((tbl_Enderecos)=>{
            if (tbl_Enderecos){
                EnderecosModel.destroy({where:{id_Enderecos}})
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

module.exports = EnderecosController;