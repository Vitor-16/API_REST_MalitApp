const express = require('express');
const medicamentosController = require('../controllers/MedicamentosController');

const medicamentosRouter = express.Router();

medicamentosRouter.post('/CadastroMed', medicamentosController.createMedicamento);
medicamentosRouter.get('/ListagemMed', medicamentosController.getMedicamentos);
medicamentosRouter.get('/ListagemMedLs', medicamentosController.getMedicamentoListagem);
medicamentosRouter.get('/ListagemMedId/:id_med', medicamentosController.getMedicamentoId);
medicamentosRouter.get('/ListagemMedNome/:nome_med', medicamentosController.getMedicamentoNome);
medicamentosRouter.put('/AtualizarMed/:id_med', medicamentosController.putMedicamento);
medicamentosRouter.delete('/DeletarMed/:id_med', medicamentosController.destroyMedicamento);

module.exports = medicamentosRouter;

