import express from "express";

import "./database";
import {routes} from "./routes"

const app = express();

/**
 * GET = BUSCAS
 * POST = CRIAR
 * PUT = ALTERAR
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMACAO ESPECIFICA
 * 
 * 
 */
app.use(express.json());
app.use(routes)

app.listen(3333, () => console.log("Aplication is Running on port 3333"));