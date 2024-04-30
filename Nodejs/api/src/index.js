const express  = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


requireDir('./models');
const Produto = require('./controllers/produtosController');

mongoose.connect('MONGO_URI=mongodb://mongo-container:27018/loja', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/produtos', Produto.listaProdutos);
app.use('/addprodutos', Produto.addProdutos);

app.listen(9001, '0.0.0.0', function(){
    console.log('Rodando na porta 9001');
});