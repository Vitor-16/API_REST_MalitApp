const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./src/config/Connection');
connection.sync({force: true});

const PORT = 3333;

const usuariosRouter = require('./src/routes/UsuariosRouter');
const medicamentosRouter = require('./src/routes/MedicamentosRouter');
const usuariosMedRouter = require('./src/routes/UsuariosMedRouter');          
const enderecosRouter = require('./src/routes/EnderecosRouter');
const produtosRouter = require('./src/routes/ProdutosRouter');
const pedidosRouter = require('./src/routes/PedidosRouter');

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


