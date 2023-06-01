const { Sequelize, DataTypes } = require('sequelize');

const connection = require('../config/Connection');

const medicamentosModel = connection.define('Medicamentos',
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
    },
    horarioInicialFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    minutoInicialFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    diaInicialFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mesInicialFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    intervaloHorasFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    diasConsumoFirebase: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
 
module.exports = medicamentosModel;