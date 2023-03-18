const HoraMedModel = require('../models/HoraMedModel');

const HoraMedController = {
    createHoraMed: (req, res)=>{
        let{hora_HoraMed} = req.body
        HoraMedModel.create({hora_HoraMed}
        )
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"INSERIDO HORÁRIO DA MEDICAÇÃO."
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO INSERIR O HORÁRIO DA MEDICAÇÃO.",
                        errorObject:error
                    });
             }
        )
    },
    getHoraMed:(req, res)=>{
        HoraMedModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"HORÁRIOS DE MEDICAÇÃO LISTADOS.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR SEUS HORÁRIOS DE MEDICAÇÃO.",
                    errorObject:error
                });
            }
        )
    },
    getHoraMedID:(req, res)=>{
        let {id_HoraMed} = req.params;
        HoraMedModel.findByPk(id_HoraMed)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"HORÁRIOS LISTADOS POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS HORÁRIOS POR ID.",
                    errorObject:error
                });
            }
        )
    },
    putHoraMed:(req, res)=>{
        let{hora_HoraMed} = req.body;
        let{id_HoraMed} = req.params;
        HoraMedModel.update(
            {hora_HoraMed},
            {where:{id_HoraMed}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"HORÁRIO DA MEDICAÇÃO ATUALIZADO COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ATUALIZAR HORÁRIO DA MEDICAÇÃO.",
                    errorObject:error
                });
            }
        )
    },
    destroyHoraMed:(req, res)=>{
        let{id_HoraMed} = req.params;
        HoraMedModel.findByPk(id_HoraMed)
        .then((tbl_Horarios)=>{
            if(tbl_Horarios){
                HoraMedModel.destroy({where:{id_HoraMed}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"HORÁRIO EXCLUÍDO.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DO HORÁRIO.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"HORÁRIO NÃO ENCONTRADO."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR HORÁRIO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = HoraMedController;