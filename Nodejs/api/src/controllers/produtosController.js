const mongoose = require('mongoose');
const Produto = mongoose.model('Produtos');

module.exports = {

    async listaProdutos(req, res) {
        try {
            const prod = await Produto.find();
            return res.json({ resp: 's', Produto: prod });
        } catch (error) {
            return res.json({ resp: 'n' });
        }
    },

    async addProdutos(req, res) {
        try {
            const produtos = ['Fanta', 'Guaraná', 'Schireps', 'Coca-cola'];
            for (let p = 0; p < produtos.length; p++) {
                await Produto.create({
                    Produto: produtos[p],
                });
            }
            return res.json({ resp: 's' });
        } catch (error) {
            return res.json({ resp: 'n' });
        }
    },
}