//ARQUIVO ENDRY POINT DO PROJETO, FAZENDO USO DO EXPRESS, REQUISIÇÕES A SEREM UTILIZADAS 
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/connection');
//connection.sync({force: true});

//DEFINIÇÃO DA PORTA LOCAL PARA RODAR O SERVIDOR
const PORT = 3333;

//REQUISIÇÃO DAS ROTAS
const UsuariosRouter = require('./routes/UsuariosRouter');
const MedicamentosRouter = require('./routes/MedicamentosRouter');
const EnderecosRouter = require('./routes/EnderecosRouter');
const DiaMedRouter = require('./routes/DiaMedRouter');
const HoraMedRouter = require('./routes/HoraMedRouter');
const PedidosVendasRouter = require('./routes/PedidosVendasRouter');
const MaletasProdRouter = require('./routes/MaletasProdRouter');

//MIDDLEWARES DE CORPO DE REQUISIÇÃO
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//UTILIZANDO AS ROTAS
app.use('/', UsuariosRouter); 
app.use('/', MedicamentosRouter);
app.use('/', EnderecosRouter);
app.use('/', DiaMedRouter);
app.use('/', HoraMedRouter);
app.use('/', PedidosVendasRouter);
app.use('/', MaletasProdRouter);

app.listen(PORT, ()=>console.log(`SERVIDOR RODANDO EM http://localhost:${PORT}`));


