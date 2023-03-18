const express = require('express');
const HoraMedController = require('../controllers/HoraMedController');

const HoraMedRouter = express.Router();

HoraMedRouter.post('/CadastrarHorario', HoraMedController.createHoraMed);
HoraMedRouter.get('/ListagemHorario', HoraMedController.getHoraMed);
HoraMedRouter.get('/ListagemHorarioID/:id_HoraMed', HoraMedController.getHoraMedID);
HoraMedRouter.put('/AtualizarHorario/:id_HoraMed', HoraMedController.putHoraMed);
HoraMedRouter.delete('/DeletarHorario/:id_HoraMed', HoraMedController.destroyHoraMed);

module.exports = HoraMedRouter;