//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const UsuariosMedModel = connection.define('tbl_UsuariosMed',
{
    id_UsuariosMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}); 

module.exports = UsuariosMedModel;