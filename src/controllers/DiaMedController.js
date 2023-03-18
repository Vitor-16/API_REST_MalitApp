const DiaMedModel = require('../models/DiaMedModel');

const DiaMedController = {
    createDiaMed: (req, res)=>{
        let{data_DiaMed} = req.body
        DiaMedModel.create({data_DiaMed}
        )
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"INSERIDO DATA DA MEDICAÇÃO."
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO INSERIR DATA DA MEDICAÇÃO.",
                        errorObject:error
                    });
             }
        )
    },
    getDiaMed:(req, res)=>{
        DiaMedModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DATAS LISTADAS.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR DATAS.",
                    errorObject:error
                });
            }
        )
    },
    getDiaMedID:(req, res)=>{
        let {id_DiaMed} = req.params;
        DiaMedModel.findByPk(id_DiaMed)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DATAS LISTADAS POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR DATAS POR ID.",
                    errorObject:error
                });
            }
        )
    },
    putDiaMed:(req, res)=>{
        let{data_DiaMed} = req.body;
        let{id_DiaMed} = req.params;
        DiaMedModel.update(
            {data_DiaMed},
            {where:{id_DiaMed}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DATA DA MEDICAÇÃO ATUALIZADA COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ATUALIZAR DATA DA MEDICAÇÃO.",
                    errorObject:error
                });
            }
        )
    },
    destroyDiaMed:(req, res)=>{
        let{id_DiaMed} = req.params;
        DiaMedModel.findByPk(id_DiaMed)
        .then((tbl_Data)=>{
            if(tbl_Data){
                DiaMedModel.destroy({where:{id_DiaMed}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"DATA EXCLUÍDA.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DA DATA.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"DATA NÃO ENCONTRADA."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR DATA.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = DiaMedController;