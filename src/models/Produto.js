const { conectarComBancoDeDados } = require("../db/conexao");

class ProdutoModel {
    async buscarTodosOsProdutos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        const produtos = await conexaoComBanco.all("SELECT * FROM produtos");

        return produtos;
    }

    async criarProdutoNoBanco() {
        
    }
}

module.exports = {
    ProdutoModel
}