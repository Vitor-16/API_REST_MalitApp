const { Sequelize, DataTypes } = require('sequelize');
const usuariosModel = require('./UsuariosModel');
const medicamentosModel = require('./MedicamentosModel');

const connection = require('../config/Connection');

const usuariosMedModel = connection.define('UsuariosMedicamentos',
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
}); 

usuariosModel.belongsToMany(medicamentosModel, { through: usuariosMedModel});
medicamentosModel.belongsToMany(usuariosModel, { through: usuariosMedModel});

module.exports = usuariosMedModel;