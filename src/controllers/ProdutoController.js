const { ProdutoModel } = require("../models/Produto")

class ProdutoController {
    async buscarTodosOsProdutos(req, res) {
        const produtos = await new ProdutoModel().buscarTodosOsProdutos();

        return res.status(200).json({
            produtos: produtos
        })
    }

    async criarProduto() {
        if (!nome) {

        }
    }
}

module.exports = {
    ProdutoController
}