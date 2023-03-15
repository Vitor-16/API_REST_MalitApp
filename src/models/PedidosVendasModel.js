//IMPORTS
const { DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const   PedidosVendasModel = connection.define('tbl_PedidosVendas',
{
    id_PedidosVendas:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_PedidosVendas:{
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_PedidosVendas:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    valor_PedidosVendas:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

//PedidosVendasModel.sync({force: true});
module.exports = PedidosVendasModel;