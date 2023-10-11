import {Router} from "express";
import  * as getMeses from "../controladores/query.grafics/llamada.js"

export const getrouter= Router();

getrouter.get('/enero',getMeses.Enerollamada)
getrouter.get('/febrero',getMeses.Febrerollamada)
getrouter.get('/marzo',getMeses.Marzollamada)
getrouter.get('/abril',getMeses.Abrilllamada)
getrouter.get('/mayo' ,getMeses.Mayollamada)
getrouter.get('/junio',getMeses.Juniollamada)
getrouter.get('/julio' ,getMeses.Juliollamada)
getrouter.get('/agosto',getMeses.Agostollamada)
getrouter.get('/septiembre',getMeses.Septiembrellamada)
getrouter.get('/octumbre' ,getMeses.Octumbrellamada)
getrouter.get('/noviembre',getMeses.Noviembrellamada)
getrouter.get('/diciembre',getMeses.Diciembrellamada)

