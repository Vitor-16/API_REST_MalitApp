//IMPORTS
const { DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const DiaMedModel = connection.define('tbl_DiaMed',
{
    id_DiaMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dia_DiaMed:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

//DiaMedModel.sync({force: true});
module.exports = DiaMedModel;