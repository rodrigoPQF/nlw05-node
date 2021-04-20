import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();
const settingsControlController = new SettingsController();

routes.post("/settings", settingsControlController.create)

export{routes};