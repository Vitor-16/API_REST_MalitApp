const express = require('express');
const MedicamentosController = require('../controllers/MedicamentosController');

const MedicamentosRouter = express.Router();

MedicamentosRouter.post('/CadastroMed', MedicamentosController.createMed);
MedicamentosRouter.get('/ListagemMed', MedicamentosController.getMed);
MedicamentosRouter.get('/ListagemMedLs', MedicamentosController.getMedLs);
MedicamentosRouter.get('/ListagemMedID/:id_Medicamento', MedicamentosController.getMedID);
MedicamentosRouter.get('/ListagemMedNOME/:nome_Medicamento', MedicamentosController.getMedNM);
MedicamentosRouter.put('/AtualizarMed/:id_Medicamento', MedicamentosController.putMed);
MedicamentosRouter.delete('/DeletarMed/:id_Medicamento', MedicamentosController.destroyMed);

module.exports = MedicamentosRouter;

