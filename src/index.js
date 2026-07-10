const express = require("express");
const { roteador } = require("./routes/produtos");
const { conectarComBancoDeDados } = require("./db/conexao");

const servidor = express();

conectarComBancoDeDados();

servidor.use(roteador)

servidor.listen(3000, () => {
    console.log("Servidor iniciado")
});
