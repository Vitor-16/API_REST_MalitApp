const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./src/config/connection');
//connection.sync({force: true});

const PORT = 3333;

const usuariosRouter = require('./src/routes/usuariosRouter');
const medicamentosRouter = require('./src/routes/medicamentosRouter');
const usuariosMedRouter = require('./src/routes/usuariosMedRouter');          
const enderecosRouter = require('./src/routes/enderecosRouter');
const produtosRouter = require('./src/routes/produtosRouter');
const pedidosRouter = require('./src/routes/pedidosRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/', usuariosRouter);
app.use('/', medicamentosRouter);
app.use('/', usuariosMedRouter);
app.use('/', enderecosRouter);  
app.use('/', produtosRouter);
app.use('/', pedidosRouter);

app.listen(PORT, ()=>console.log(`Server is running in: http://localhost:${PORT}`));


