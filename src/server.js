//ARQUIVO ENDRY POINT DO PROJETO, FAZENDO USO DO EXPRESS 
const express = require('express');
const app = express();

//DEFINIÇÃO DA PORTA LOCAL PARA RODAR O SERVIDOR
const PORT = 3000;

//REQUISIÇÃO DAS ROTAS
const UsuariosRouter = require('../src/routes/UsuariosRouter');
const MedicamentosRouter = require('../src/routes/MedicamentosRouter');

//MIDDLEWARES DE CORPO DE REQUISIÇÃO
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//UTILIZANDO AS ROTAS
app.use('/', UsuariosRouter); 
app.use('/', MedicamentosRouter);

app.listen(PORT, ()=> console.log('SERVIDOR RODANDO EM http://localhost:3000'));


