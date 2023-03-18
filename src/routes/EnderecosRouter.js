const express = require('express');
const EnderecosController = require('../controllers/EnderecosController');

const EnderecosRouter = express.Router();

EnderecosRouter.post('/CadastroEnderecos', EnderecosController.createEnderecos);
EnderecosRouter.get('/ListagemEnderecos', EnderecosController.getEnderecos);
EnderecosRouter.get('/ListagemEnderecosID/:id_Enderecos', EnderecosController.getEnderecosID);
EnderecosRouter.get('/ListagemEnderecosCEP/:cep_Enderecos', EnderecosController.getEnderecosCEP);
EnderecosRouter.put('/AtualizarEnderecos/:id_Enderecos', EnderecosController.putEnderecos);
EnderecosRouter.delete('/DeletarEnderecos/:id_Enderecos', EnderecosController.destroyEnderecos);

module.exports = EnderecosRouter;