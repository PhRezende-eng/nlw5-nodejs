import express, { request, response } from "express";

const app = express();

/**
 * GET = Buascar
 * POST = Criar / Cadastrar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alterar algo já cadastrado(algo específico)
 */

app.get("/", (request, response) => {
    return response.json(
        {
            "message": "olá mundo!",
        }
    );
});

app.post("/users", (request, response) => {
    return response.json({
        message : "Usuaário salvo!"
    });
})

app.listen(3333, ()=> console.log("tá rodando na porta  3333"));