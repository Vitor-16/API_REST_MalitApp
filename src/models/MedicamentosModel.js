const { Sequelize, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const medicamentosModel = connection.define('tbl_medicamentos',
{
    id_med: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_med: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantidade: { 
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora:{
        type: DataTypes.TIME,
        allowNull: false
    }
});
 
module.exports = medicamentosModel;