const SENHA = "12345"

function meuMiddleware(req, res, next) {
    const senha = req.headers.senha;

    if (senha !== SENHA) {
        return res.status(400).json("Acesso negado")
    }

    return next();
}

module.exports = {
    meuMiddleware
}