const { conectarComBancoDeDados } = require("../db/conexao");

class ProdutoModel {
    async buscarTodosOsProdutos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        const produtos = await conexaoComBanco.all("SELECT * FROM produtos");

        return produtos;
    }

    async criarProdutoNoBanco(req, res) {
        const conexaoComBanco = await conectarComBancoDeDados();


        const produtoEnviar = {
            nome: req.body.nome,
            preco: req.body.preco,
            estoque: req.body.estoque
        }

        const produtos = await conexaoComBanco.run(`INSERT INTO produtos (nome, preco, estoque)
        VALUES (?, ?, ?)`, [produtoEnviar.nome, produtoEnviar.preco, produtoEnviar.estoque]);

        return res.status(201).json({
            mensagem: "Produto criado!"
        });
    }
}

module.exports = {
    ProdutoModel
}