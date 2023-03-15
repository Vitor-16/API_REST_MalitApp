//IMPORTS
const { DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MaletasModel = connection.define('tbl_maletas',
{
    id_Maletas:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

//MaletasModel.sync({force: true});
module.exports = MaletasModel;