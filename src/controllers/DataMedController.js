const DataMedModel = require('../models/DataMedModel');

const DataMedController = {
    createDataMed: (req, res)=>{
        let{Dia_Med, Hora_Med} = req.body
        DataMedModel.create({Dia_Med, Hora_Med})
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
    getDataMed:(req, res)=>{
        DataMedModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DATAS DAS MEDICAÇÕES LISTADAS.",
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
    getDataMedID:(req, res)=>{
        let {id_DataMed} = req.params;
        DataMedModel.findByPk(id_DataMed)
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
    putDataMed:(req, res)=>{
        let{Dia_Med, Hora_Med} = req.body;
        let{id_DiaMed} = req.params;
        DataMedModel.update(
            {Dia_Med, Hora_Med},
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
    destroyDataMed:(req, res)=>{
        let{id_DataMed} = req.params;
        DataMedModel.findByPk(id_DataMed)
        .then((tbl_Data)=>{ 
            if(tbl_Data){
                DataMedModel.destroy({where:{id_DataMed}})
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

module.exports = DataMedController;