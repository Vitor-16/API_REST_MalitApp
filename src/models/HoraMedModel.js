//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const HoraMedModel = connection.define('tbl_Horarios',
{
    id_HoraMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hora_HoraMed:{
        type: DataTypes.TIME,
        allowNull: false
    }
});

module.exports = HoraMedModel;