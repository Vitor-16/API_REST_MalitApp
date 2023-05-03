const express = require('express');
const PedidosVendasController = require('../controllers/pedidosController');

const PedidosVendasRouter = express.Router();

PedidosVendasRouter.post('/CadastrarPedido', PedidosVendasController.createPedidos);
PedidosVendasRouter.get('/ListagemPedido', PedidosVendasController.getPedidos);
PedidosVendasRouter.get('/ListagemPedidoID/:id_Pedidos', PedidosVendasController.getPedidosID);
PedidosVendasRouter.put('/AtualizarPedido/:id_Pedidos', PedidosVendasController.putPedidos);
PedidosVendasRouter.delete('/DeletarPedido/:id_Pedidos', PedidosVendasController.destroyPedidos);

module.exports = PedidosVendasRouter;