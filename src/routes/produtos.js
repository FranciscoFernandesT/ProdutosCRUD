const express = require("express");
const { ProdutoController } = require("../controllers/ProdutoController");
const { meuMiddleware } = require("../middlewares/autenticacao");

const roteador = express.Router();

roteador.get('/', new ProdutoController().buscarTodosOsProdutos)
roteador.post("/batata", new ProdutoController().criarProduto)

module.exports = {
    roteador
}