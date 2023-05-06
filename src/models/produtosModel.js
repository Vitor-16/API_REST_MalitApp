const { Sequelize, DataTypes } = require('sequelize');

const connection = require('../config/Connection');

const produtosModel = connection.define('Produtos',
{
    id_produto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tamanho:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = produtosModel;