import express, { request, response } from "express";

import "./database";
import { routes } from "./routes";


const app = express();
app.use(express.json());
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
        message : "Usuário salvo!"
    });
})

app.use(routes);

app.listen(3333, ()=> console.log("tá rodando na porta  3333"));