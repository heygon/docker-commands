const mongoose = require('mongoose');

const Produtos = new mongoose.Schema({
    Nome   : String,
    Valor  : String,
    imagem : String,
    Produto: String
},{
    timestamps: true
});

module.exports = mongoose.model('Produtos', Produtos);

