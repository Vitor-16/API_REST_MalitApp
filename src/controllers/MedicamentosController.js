const MedicamentosModel = require('../models/MedicamentosModel');

const MedicamentosController = {
    createMed: (req, res)=>{
        let{nome_Medicamentos, descricao_Medicamentos, 
            quantidade_Medicamentos, validade_Medicamentos} = req.body
        MedicamentosModel.create({nome_Medicamentos, descricao_Medicamentos, 
        quantidade_Medicamentos, validade_Medicamentos}
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
    getMedID:(req, res)=>{
        let {id_Medicamentos} = req.params;
        MedicamentosModel.findByPk(id_Medicamentos)
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
        let{nome_Medicamentos} = req.params;
        MedicamentosModel.findOne({attributes:['id_Medicamentos','nome_Medicamentos', 'descricao_Medicamentos', 
        'quantidade_Medicamentos', 'validade_Medicamentos'], where:{nome_Medicamentos}})
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
        let{nome_Medicamentos, descricao_Medicamentos, 
        quantidade_Medicamentos, validade_Medicamentos} = req.body;
        let{id_Medicamentos} = req.params;
        MedicamentosModel.update(
            {nome_Medicamentos, descricao_Medicamentos, 
             quantidade_Medicamentos, validade_Medicamentos},
            {where:{id_Medicamentos}}
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
        let{id_Medicamentos} = req.params;
        MedicamentosModel.findByPk(id_Medicamentos)
        .then((tbl_medicamentos)=>{
            if (tbl_medicamentos){
                MedicamentosModel.destroy({where:{id_Medicamentos}})
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