const pedidosModel = require('../models/PedidosModel');

const pedidosController = {
    createPedido: (req, res)=>{
        let{status, 
            valor_pedido, 
            formaPagamento} = req.body
        pedidosModel.create(
            {status, 
             valor_pedido, 
             formaPagamento})
        .then(()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"SEU PEDIDO FOI REGISTRADO.",
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                    mensagemStatus:"ERRO AO REGISTRAR PEDIDO.",
                    errorObject:error
            });
        })
    },
    getPedidos:(req, res)=>{
        pedidosModel.findAll()
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PEDIDOS LISTADOS COM SUCESSO.",
                data:response
            });
        })
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
    getPedidoId:(req, res)=>{
        let {id_Pedidos} = req.params;
        pedidosModel.findByPk(id_Pedidos)
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
    putPedido:(req, res)=>{
        let{status, 
            valor_pedido, 
            formaPagamento} = req.body;
        let{id_Pedidos} = req.params;
        pedidosModel.update(
            {status, 
             valor_pedido, 
             formaPagamento},
            {where:{id_Pedidos}}
        )
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PEDIDO ATUALIZADO COM SUCESSO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR PEDIDO.",
                errorObject:error
            });
        })
    },
    destroyPedido:(req, res)=>{
        let{id_Pedidos} = req.params;
        pedidosModel.findByPk(id_Pedidos)
        .then((tbl_PedidosVendas)=>{
            if (tbl_PedidosVendas){
                pedidosModel.destroy({where:{id_Pedidos}})
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

module.exports = pedidosController;