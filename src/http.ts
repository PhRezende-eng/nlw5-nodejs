import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import express, { response, request } from "express";
import path from "path";
import "./database";

const app = express();
const http = createServer(app); // criando protocolo http
const io = new Server(http); //criando protocolo ws

app.use(routes);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

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

app.post("/users/user", (request, response) => {
    return response.json({
        message : "Usuário salvo!"
    });
})


app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
});


export { http, io}