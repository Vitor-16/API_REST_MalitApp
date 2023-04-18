const MedicamentosModel = require('../models/MedicamentosModel');

const MedicamentosController = {
    createMed: (req, res)=>{
        let{nome_Medicamento, descricao_Medicamento, 
        quantidade_Medicamento, validade_Medicamento, dia_Med, hora_Med} = req.body
        MedicamentosModel.create({nome_Medicamento, descricao_Medicamento, 
        quantidade_Medicamento, validade_Medicamento, dia_Med, hora_Med}
        )
        .then(
            ()=>{
                    return res.status(201).json({
                        erroStatus:false,
                        mensagemStatus:"SEU MEDICAMENTO FOI CADASTRADO."
                    });
            }
        )
        .catch(
            (error)=>{
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus:"ERRO AO CADASTRAR MEDICAMENTO.",
                        errorObject:error
                    });
             }
        )
    },
    getMed:(req, res)=>{
        MedicamentosModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"MEDICAMENTOS LISTADOS COM SUCESSO.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS.",
                    errorObject:error
                });
            }
        )
    },
    getMedLs:(req, res)=>{
        MedicamentosModel.findAll({
            attributes: ['nome_Medicamento', 'quantidade_Medicamento', 'dia_Med', 'hora_Med'],
            order: [['id_Medicamento', 'DESC']]
        })
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"MEDICAMENTOS LISTADOS COM SUCESSO COM ATRIBUTOS ESPECIFÍCOS.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS.",
                    errorObject:error
                });
            }
        )
    },
    getMedID:(req, res)=>{
        let {id_Medicamento} = req.params;
        MedicamentosModel.findByPk(id_Medicamento)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"MEDICAMENTOS LISTADOS POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS POR ID.",
                    errorObject:error
                });
            }
        )
    },
    getMedNM:(req, res)=>{
        let{nome_Medicamento} = req.params;
        MedicamentosModel.findOne({
            attributes:['nome_Medicamento', 'descricao_Medicamento', 'quantidade_Medicamento', 'validade_Medicamento'], 
            where:{nome_Medicamento}
          })
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"MEDICAMENTOS LISTADOS POR NOME.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS POR NOME.",
                    errorObject:error
                });
            }
        )
    },
    putMed:(req, res)=>{
        let{nome_Medicamento, descricao_Medicamento, 
        quantidade_Medicamento, validade_Medicamento, dia_Med, hora_Med} = req.body;
        let{id_Medicamento} = req.params;
        MedicamentosModel.update(
            {nome_Medicamento, descricao_Medicamento, 
             quantidade_Medicamento, validade_Medicamento, dia_Med, hora_Med},
            {where:{id_Medicamento}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DE MEDICAMENTO ATUALIZADOS COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR MEDICAMENTO.",
                    errorObject:error
                });
            }
        )
    },
    destroyMed:(req, res)=>{
        let{id_Medicamento} = req.params;
        MedicamentosModel.findByPk(id_Medicamento)
        .then((tbl_medicamentos)=>{
            if (tbl_medicamentos){
                MedicamentosModel.destroy({where:{id_Medicamento}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"MEDICAMENTO EXCLUÍDO.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DO MEDICAMENTO.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"MEDICAMENTO NÃO ENCONTRADO."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR MEDICAMENTO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = MedicamentosController;