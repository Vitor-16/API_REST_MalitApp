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
    horaFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    },
    minutoFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    },
    diaFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    },
    mesFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    },
    intervaloFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    },
    horarioConsumoFirebase:{
        type: DataTypes.STRING,
        allowNull: true
    }
});
 
module.exports = medicamentosModel;