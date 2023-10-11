import express from "express";
import { routers } from "./rutas/table.routes.js";
import { router } from "./rutas/totals.routes.js";
import {getrouter} from "./rutas/registrollamada.routes.js"
import cors from "cors"
import {  PORT}from'./config.js'

const app = express();


app.use(express.json());
app.use(cors())
app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto 3005')
})

//ruta index//
app.use(router, routers, getrouter)


