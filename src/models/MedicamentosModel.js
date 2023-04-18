//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const UsuariosModel = require('./UsuariosModel');
const UsuariosMedModel = require('./UsuariosMedModel');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MedicamentosModel = connection.define('tbl_Medicamentos',
{
    id_Medicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_Medicamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_Medicamento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantidade_Medicamento: { 
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade_Medicamento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    dia_Med:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora_Med:{
        type: DataTypes.TIME,
        allowNull: false
    }
});
 
module.exports = MedicamentosModel;