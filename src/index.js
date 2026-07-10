const express = require("express");
const { roteador } = require("./routes/produtos");
const { conectarComBancoDeDados } = require("./db/conexao");
const { meuMiddleware } = require("./middlewares/autenticacao");

const servidor = express();

conectarComBancoDeDados();

servidor.use(meuMiddleware)

servidor.use(roteador)

servidor.listen(3000, () => {
    console.log("Servidor iniciado")
});
