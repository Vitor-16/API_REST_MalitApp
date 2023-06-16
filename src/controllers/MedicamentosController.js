const medicamentosModel = require('../models/MedicamentosModel');
const { sequelize } = require('../models/MedicamentosModel');
const { Op } = require('sequelize');

const medicamentosController = {
    createMedicamento: (req, res)=>{
        let{nome_med,
            descricao,
            quantidade,  
            data, 
            hora,
            horarioInicialFirebase,
            minutoInicialFirebase,
            diaInicialFirebase,
            mesInicialFirebase,
            intervaloHorasFirebase,
            diasConsumoFirebase
        } = req.body
        medicamentosModel.create(
            {nome_med,
             descricao,
             quantidade,
             data, 
             hora,
             horarioInicialFirebase,
             minutoInicialFirebase,
             diaInicialFirebase,
             mesInicialFirebase,
             intervaloHorasFirebase,
             diasConsumoFirebase
            }
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
                        'quantidade'], 
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
    getMedListagemCompartimento:(req, res)=>{
        medicamentosModel.findAll({
            attributes: ['id_med', 'nome_med', [sequelize.fn('SUBSTRING', sequelize.col('hora'), 1, 5), 'hora'], 
                        'CompartimentosFirebase'],
                where: {
                  CompartimentosFirebase: {
                    [Op.not]: null // Verifica se o campo CompartimentosFirebase não esta nulo
                  }
                },
                order: [['id_med', 'DESC']]
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS COM COMPARTIMENTO LISTADOS COM SUCESSO.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS COM COMPARTIMENTOS.",
                errorObject:error
            });
        })
    },
    getMedListagemCalendario:(req, res)=>{
        medicamentosModel.findAll({
            attributes: ['id_med', 'data', 'diasConsumoFirebase'],
                where: {
                  CompartimentosFirebase: {
                    [Op.not]: null
                  }
                },
                order: [['id_med', 'DESC']]
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS DE MEDICAMENTO PARA O CALENDARIO LISTADOS.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR OS DADOS DE MEDICAMENTO PARA O CALENDARIO.",
                errorObject:error
            });
        })
    },
    getMedListagemNullCompartimento:(req, res)=>{
        medicamentosModel.findAll({
            attributes: ['id_med', 'nome_med'],
            where: {
                CompartimentosFirebase: {
                  [Op.is]: null // Verifica se o campo CompartimentosFirebase é nulo
                }
            },
            order: [['id_med', 'DESC']]
        })
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MEDICAMENTOS SEM ATRIBUIÇÃO COMPARTIMENTO LISTADOS COM SUCESSO.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR MEDICAMENTOS SEM ATRIBUIÇÃO COMPARTIMENTOS.",
                errorObject:error
            });
        })
    },
    putMedicamento:(req, res)=>{
        let{nome_med, 
            descricao, 
            quantidade,  
            data, 
            hora,
            horarioInicialFirebase,
            minutoInicialFirebase,
            diaInicialFirebase,
            mesInicialFirebase,
            intervaloHorasFirebase,
            diasConsumoFirebase,
            CompartimentosFirebase
        } = req.body;
        let{id_med} = req.params;
        medicamentosModel.update(
            {nome_med, 
             descricao, 
             quantidade,  
             data, 
             hora,
             horarioInicialFirebase,
            minutoInicialFirebase,
            diaInicialFirebase,
            mesInicialFirebase,
            intervaloHorasFirebase,
            diasConsumoFirebase,
            CompartimentosFirebase},
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
    putMedCompartimento:(req, res)=>{
        let{ nome_med, CompartimentosFirebase } = req.body;
        let{ id_med } = req.params;
        medicamentosModel.update(
            { nome_med, CompartimentosFirebase },
            {where:{id_med}}
        )
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"ATRIBUIDO COMPARTIMENTO AO MEDICAMENTO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ATRIBUIR COMPARTIMENTO.",
                errorObject:error
            });
        })
    },
    destroyAttCompartimento: (req, res) => {
        const { id_med } = req.params;
      
        medicamentosModel.findByPk(id_med)
          .then((medicamento) => {
            if (medicamento) {
              medicamento.update({ CompartimentosFirebase: null })
                .then(() => {
                  return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "VALOR DO CAMPO EXCLUÍDO COM SUCESSO."
                  });
                })
                .catch((error) => {
                  return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: "ERRO AO EXCLUIR VALOR DO CAMPO.",
                    errorObject: error
                  });
                });
            } else {
              return res.status(404).json({
                erroStatus: true,
                mensagemStatus: "MEDICAMENTO NÃO ENCONTRADO."
              });
            }
          })
          .catch((error) => {
            return res.status(400).json({
              erroStatus: true,
              mensagemStatus: "ERRO AO BUSCAR MEDICAMENTO.",
              errorObject: error
            });
          });
    },
    destroyMedicamento:(req, res)=>{
        let{id_med} = req.params;
        medicamentosModel.findByPk(id_med)
        .then((Medicamentos)=>{
            if (Medicamentos){
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