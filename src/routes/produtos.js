const express = require("express");
const { ProdutoController } = require("../controllers/ProdutoController");

const roteador = express.Router();

roteador.get('/', new ProdutoController().buscarTodosOsProdutos)
roteador.post("/", new ProdutoController().criarProduto)
roteador.post("/", async (req, res), () => {
    
});



module.exports = {
    roteador
}