//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const PedidosVendasModel = connection.define('tbl_PedidosVendas',
{
    id_Pedidos:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status_Pedidos:{
        type: DataTypes.STRING,
        allowNull: false
    },
    valor_Pedidos:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    formaPagamento_Pedidos:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = PedidosVendasModel;