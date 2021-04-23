import { Router } from "express";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";

const routes = Router();

const settingsControlle =  new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
 
routes.post("/settings", settingsControlle.create);
routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes };

// routes.get("/settings/all", (request, response) => {
//     const settingsRepository = getCustomRepository(SettingsRepository);
//     return response.send(settingsRepository);
// });

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e Buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => Json {
 * }
 */
