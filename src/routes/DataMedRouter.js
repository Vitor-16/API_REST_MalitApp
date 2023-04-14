const express = require('express');
const DataMedController = require('../controllers/DataMedController');

const DataMedRouter = express.Router();

DataMedRouter.post('/CadastroData', DataMedController.createDataMed);
DataMedRouter.get('/ListagemData', DataMedController.getDataMed);
DataMedRouter.get('/ListagemDataID/:id_DataMed', DataMedController.getDataMedID);
DataMedRouter.put('/AtualizarData/:id_DataMed', DataMedController.putDataMed);
DataMedRouter.delete('/DeletarData/:id_DataMed', DataMedController.destroyDataMed);

module.exports = DataMedRouter;