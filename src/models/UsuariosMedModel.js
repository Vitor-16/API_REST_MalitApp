//IMPORTS
const { DataTypes } = require('sequelize');

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

//UsuariosMedModel.sync({force: true});
module.exports = UsuariosMedModel;