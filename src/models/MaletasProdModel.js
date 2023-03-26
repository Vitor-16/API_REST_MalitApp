//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MaletasProdModel = connection.define('tbl_MaletasProd',
{
    id_MaletasProd:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tamanho_MaletasProd:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade_MaletasProd:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_MaletasProd:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = MaletasProdModel;