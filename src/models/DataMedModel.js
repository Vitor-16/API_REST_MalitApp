//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const DataMedModel = connection.define('tbl_Data',
{
    id_DataMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Dia_Med:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Hora_Med:{
        type: DataTypes.TIME,
        allowNull: false
    }
});

module.exports = DataMedModel;