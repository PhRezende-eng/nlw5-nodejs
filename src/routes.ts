
/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e Buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => Json {
 * }
 */

import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";

const routes = Router();

const settingsControlle =  new SettingsController;

routes.post("/settings", settingsControlle.create);

export { routes };

// routes.get("/settings/all", (request, response) => {
//     const settingsRepository = getCustomRepository(SettingsRepository);
//     return response.send(settingsRepository);
// });
