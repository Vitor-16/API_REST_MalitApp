const medicamentosModel = require('../models/medicamentosModel');

const medicamentosController = {
    createMedicamento: (req, res)=>{
        let{nome_med,
            descricao,
            quantidade, 
            validade, 
            data, 
            hora} = req.body
        medicamentosModel.create(
            {nome_med,
             descricao,
             quantidade, 
             validade, 
             data, 
             hora}
        )
        .then(()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTO CADASTRADO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR MEDICAMENTO.",
                errorObject:error
            });
        })
    },
    getMedicamentos:(req, res)=>{
        medicamentosModel.findAll()
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS LISTADOS COM SUCESSO.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS.",
                errorObject:error
            });
        })
    },
    getMedicamentoListagem:(req, res)=>{
        medicamentosModel.findAll({
            attributes: ['nome_med',
                         'quantidade',
                         'data', 
                         'hora'],
            order: [['id_med', 'DESC']]
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS COM ATRIBUTOS ESPECIFÍCOS LISTADOS COM SUCESSO .",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS.",
                errorObject:error
            });
        })
    },
    getMedicamentoId:(req, res)=>{
        let {id_med} = req.params;
        medicamentosModel.findByPk(id_med)
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS LISTADOS POR ID.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS POR ID.",
                errorObject:error
            });
        })
    },
    getMedicamentoNome:(req, res)=>{
        let{nome_med} = req.params;
        medicamentosModel.findOne({
            attributes:['nome_med', 
                        'descricao', 
                        'quantidade', 
                        'validade'], 
            where:{nome_med}
          })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS LISTADOS POR NOME.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS POR NOME.",
                errorObject:error
            });
        })
    },
    putMedicamento:(req, res)=>{
        let{nome_med, 
            descricao, 
            quantidade, 
            validade, 
            data, 
            hora} = req.body;
        let{id_med} = req.params;
        medicamentosModel.update(
            {nome_med, 
             descricao, 
             quantidade, 
             validade, 
             data, 
             hora},
            {where:{id_med}}
        )
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS DE MEDICAMENTO ATUALIZADOS COM SUCESSO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR MEDICAMENTO.",
                errorObject:error
            });
        })
    },
    destroyMedicamento:(req, res)=>{
        let{id_med} = req.params;
        medicamentosModel.findByPk(id_med)
        .then((tbl_medicamentos)=>{
            if (tbl_medicamentos){
                medicamentosModel.destroy({where:{id_med}})
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

module.exports = medicamentosController;