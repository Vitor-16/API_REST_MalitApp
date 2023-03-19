const express = require('express');
const MaletasProdController = require('../controllers/MaletasProdController');

const MaletasProdRouter = express.Router();

MaletasProdRouter.post('/CadastroMaletasProd', MaletasProdController.createMaletasProd);
MaletasProdRouter.get('/ListagemMaletasProd', MaletasProdController.getMaletasProd);
MaletasProdRouter.get('/ListagemMaletasProdID/:id_MaletasProd', MaletasProdController.getMaletasProdID);
MaletasProdRouter.put('/AtualizarMaletasProd/:id_MaletasProd', MaletasProdController.putMaletasProd);
MaletasProdRouter.delete('/DeletarMaletasProd/:id_MaletasProd', MaletasProdController.destroyMaletasProd);

module.exports = MaletasProdRouter;