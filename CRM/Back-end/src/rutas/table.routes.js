import {Router} from "express";
import * as tablaEmpresa from "../controladores/Tablas/empresa.js"
import * as tablaContacto from "../controladores/Tablas/contacto.js"
import * as tablaNegocio from "../controladores/Tablas/negocio.js"
import * as tablaTarea from "../controladores/Tablas/tareas.js"
import * as llamada from "../controladores/Tablas/registro_llamada.js"
import { validatetoken } from "../middlewares/JwtAuth.js";

export const routers = Router();

//tabla empresa
routers.get('/companytabla',validatetoken,tablaEmpresa.getTablaEmpresa)
routers.patch('/companytabla/:idEmpresa',validatetoken ,tablaEmpresa.updatetablaEmpresa)
// router.delete('/companytabla/:idEmpresa', tablaEmpresa.deleteTablaEmpresa)
routers.put('/companytabla/desactivar/:idEmpresa',validatetoken , tablaEmpresa.desactivarTablaEmpresa);

//tabla contacto
routers.get('/contactotabla/',tablaContacto.getTablaContacto);
routers.patch('/contactotabla/:idContacto',validatetoken ,tablaContacto.updatetablaContacto)
// router.delete('/contactotabla/:idContacto',tablaContacto.deleteTablaContacto);
routers.put('/contactotabla/desactivar/:idContacto',validatetoken , tablaContacto.desactivarTablaContacto);

//tabla negocio
routers.get('/negociotabla' , tablaNegocio.getTablaNegocio);
routers.patch('/negociotabla/:idNegocio',validatetoken ,tablaNegocio.updatetablaNegocio)
routers.put('/negociotabla/desactivar/:idNegocio',validatetoken ,tablaNegocio.desactivarTablaNegocio);

//tabla tarea
routers.get('/tareastabla' ,tablaTarea.getTablaTarea)
routers.patch('/tareastabla/:idTareas',validatetoken ,tablaTarea.updatetablaTareas)
routers.put('/tareastabla/desactivar/:idTareas',validatetoken ,tablaTarea.desactivarTablaTarea)

//tabla llamadas
routers.get('/llamadatabla' , llamada.getTablallamada)
routers.get('/graficallamada',validatetoken , llamada.graficaLlamada)