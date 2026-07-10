const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function conectarComBancoDeDados() {
    const minhaConexaoComBancoDeDados = await open({
        filename: "./src/db/meuBanco.db",
        driver: sqlite3.Database
    })

    return minhaConexaoComBancoDeDados;
}

module.exports = {
    conectarComBancoDeDados
}