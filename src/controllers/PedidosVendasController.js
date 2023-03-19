const ProdutosVendasModel = require('../models/PedidosVendasModel');

const PedidosVendasController = {
    createPedidos: (req, res)=>{
        let{status_Pedidos, valor_Pedidos, formaPagamento_Pedidos} = req.body
        ProdutosVendasModel.create({status_Pedidos, valor_Pedidos, formaPagamento_Pedidos})
        .then(
            ()=>{
                return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:"SEU PEDIDO FOI REGISTRADO.",
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO REGISTRAR PEDIDO.",
                    errorObject:error
                });
             }
        )
    },
    getPedidos:(req, res)=>{
        ProdutosVendasModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"PEDIDOS LISTADOS COM SUCESSO.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR SEUS PEDIDOS.",
                    errorObject:error
                });
            }
        )
    },
    getPedidosID:(req, res)=>{
        let {id_Pedidos} = req.params;
        ProdutosVendasModel.findByPk(id_Pedidos)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"PEDIDO LISTADO POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR PEDIDO POR ID.",
                    errorObject:error
                });
            }
        )
    },
    putPedidos:(req, res)=>{
        let{status_Pedidos, valor_Pedidos, formaPagamento_Pedidos} = req.body;
        let{id_Pedidos} = req.params;
        ProdutosVendasModel.update(
            {status_Pedidos, valor_Pedidos, formaPagamento_Pedidos},
            {where:{id_Pedidos}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DO SEU PEDIDO ATUALIZADOS COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR DADOS DO SEU PEDIDO.",
                    errorObject:error
                });
            }
        )
    },
    destroyPedidos:(req, res)=>{
        let{id_Pedidos} = req.params;
        ProdutosVendasModel.findByPk(id_Pedidos)
        .then((tbl_PedidosVendas)=>{
            if (tbl_PedidosVendas){
                ProdutosVendasModel.destroy({where:{id_Pedidos}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"PEDIDO EXCLUÍDO.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DO SEU PEDIDO.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"PEDIDO NÃO ENCONTRADO."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR SEU PEDIDO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = PedidosVendasController;