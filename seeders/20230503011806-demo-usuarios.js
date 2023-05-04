const { usuariosModel } = require('../src/models/usuariosModel');
const data = [
  { nome_usuario: 'João', cpf: '123.456.789-01', dataNasc: '1990-01-01', telefone: '(99) 99999-9999', email: 'joao@example.com', senha: '12345678' },
  { nome_usuario: 'Maria', cpf: '234.567.890-12', dataNasc: '1985-02-01', telefone: '(88) 88888-8888', email: 'maria@example.com', senha: '87654321' },
  { nome_usuario: 'Pedro', cpf: '345.678.901-23', dataNasc: '1995-03-01', telefone: '(77) 77777-7777', email: 'pedro@example.com', senha: 'abcd1234' }
];
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('tbl_usuarios', data, {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('tbl_usuarios', null, {});
    }
};

