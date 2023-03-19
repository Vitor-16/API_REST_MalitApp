//IMPORTS
const { DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const EnderecosModel = connection.define ('tbl_Enderecos',
{
    id_Enderecos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isCepValidate(cep_Enderecos) {
                const cepRegex = /^\d{5}-\d{3}$/;
                if (!cepRegex.test(cep_Enderecos)) {
                  throw new Error('CEP INSERIDO INVÁLIDO');
                }
            }
        }
    },
    estado_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_Enderecos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

EnderecosModel.associate = function(models) {
    EnderecosModel.hasOne(models.UsuariosModel, {
      foreignKey: 'fk_Enderecos',
      as: 'usuario'
    });
};

//EnderecosModel.sync({force: true});
module.exports = EnderecosModel;