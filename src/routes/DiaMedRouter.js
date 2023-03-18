const express = require('express');
const DiaMedController = require('../controllers/DiaMedController');

const DiaMedRouter = express.Router();

DiaMedRouter.post('/CadastroData', DiaMedController.createDiaMed);
DiaMedRouter.get('/ListagemData', DiaMedController.getDiaMed);
DiaMedRouter.get('/ListagemDataID/:id_DiaMed', DiaMedController.getDiaMedID);
DiaMedRouter.put('/AtualizarData/:id_DiaMed', DiaMedController.putDiaMed);
DiaMedRouter.delete('/DeletarData/:id_DiaMed', DiaMedController.destroyDiaMed);

module.exports = DiaMedRouter;