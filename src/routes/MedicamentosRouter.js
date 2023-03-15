const express = require('express');
const MedicamentosController = require('../controllers/MedicamentosController');

const MedicamentosRouter = express.Router();

MedicamentosRouter.post('/CadastroMed', MedicamentosController.createMed);
MedicamentosRouter.get('/ListagemMed', MedicamentosController.getMed);
MedicamentosRouter.get('/ListagemMedID/:id_Medicamentos', MedicamentosController.getMedID);
MedicamentosRouter.get('/ListagemMedNOME/:nome_Medicamentos', MedicamentosController.getMedNM);
MedicamentosRouter.put('/AtualizarMed/:id_Medicamentos', MedicamentosController.putMed);
MedicamentosRouter.delete('/DeletarMed/:id_Medicamentos', MedicamentosController.destroyMed);

module.exports = MedicamentosRouter;

