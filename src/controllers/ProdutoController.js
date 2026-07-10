const { ProdutoModel } = require("../models/Produto")

class ProdutoController {
    async buscarTodosOsProdutos(req, res) {
        const produtos = await new ProdutoModel().buscarTodosOsProdutos();

        return res.status(200).json({
            produtos: produtos
        });
    }

    async criarProduto(req, res) {
        const produtos = await new ProdutoModel().criarProdutoNoBanco();
        
        return res.status(201).json({
            mensagem: "Produto criado!"
        });
    }
}

module.exports = {
    ProdutoController
}