import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsControlController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsControlController.create)
routes.post("/settings/:username", settingsControlController.findByUsername)
routes.put("/settings/:username", settingsControlController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export{routes};