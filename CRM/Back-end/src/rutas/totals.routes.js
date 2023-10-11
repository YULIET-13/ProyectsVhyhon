import { Router } from "express";
import * as userCrtl from "../controladores/Formularios/user.controllers.js";//registro//
import * as empresaCrtl from "../controladores/Formularios/empresa.js";//empresa//
import * as contactoCrtl from "../controladores/Formularios/contacto.js"; //contacto//
import * as negocioCrtl from "../controladores/Formularios/negocio.js"; //negocio//
import * as segmentoCrtl from "../controladores/Formularios/segmento.js"; //segmento//
import * as tareaCrtl from "../controladores/Formularios/tarea.js"; //tareas// */
import * as logincrtl from "../controladores/Formularios/login.js"
import * as pedidosCrtl from "../controladores/Formularios/pedidos.js"//pedidos
import * as llamadaCrtl from "../controladores/llamada/llamadaAudio.js"//llamada
import * as datosperfilCrtl from "../controladores/Formularios/datosPerfil.js"
import { validatetoken } from "../middlewares/JwtAuth.js";
export const router = Router();

//registro
router.get('/users', userCrtl.getUsers);
router.post('/users', userCrtl.createUsers);
router.post('/user',userCrtl.recuperar);
router.patch('/users/:idRegistro', userCrtl.updateUsers);
router.delete('/users', userCrtl.deleteUsers);
router.put('/user/:email', userCrtl.actualizarContraseña)


//Login
router.post('/login',  logincrtl.Login);
router.get('/login/getClient/',  logincrtl.getLogin);


//empresa// 
router.post('/company',validatetoken,empresaCrtl.createEmpresa);
router.get('/company',validatetoken ,empresaCrtl.getEmpresas);
router.get('/company/:id',validatetoken, empresaCrtl.getEmpresaId);
router.delete('/company/:id',validatetoken, empresaCrtl.deleteEmpresas);

//contacto//
router.post('/contacto',validatetoken,contactoCrtl.crearContacto)
router.get('/contacto',validatetoken,contactoCrtl.getContacto);
router.get('/contacto/:id',validatetoken, contactoCrtl.getContactoId);
router.patch('/contacto/:id',validatetoken, contactoCrtl.updateContacto);
router.delete('/contacto/:id',validatetoken ,contactoCrtl.deleteContacto);

//negocio//
router.post('/negocio' ,validatetoken ,negocioCrtl.crearNegocio)
router.get('/negocio',validatetoken , negocioCrtl.getNegocio);
router.get('/negocio/:id',validatetoken , negocioCrtl.getNegocioId);
router.patch('/negocio/:id',validatetoken , negocioCrtl.updateNegocio);
router.delete('/negocio/:id',validatetoken , negocioCrtl.deleteNegocio); 


//segmento//
router.get('/segmento', segmentoCrtl.getSegmento)

//tareas//
router.get('/tareas' ,tareaCrtl.getTareas);
router.post('/tareas', tareaCrtl.createTarea);
router.patch('/tareas', tareaCrtl.updateTarea);
router.delete('/tareas', tareaCrtl.deleteTarea);


//pedidos
router.post('/pedidos', pedidosCrtl.crearPedidos);
router.get('/pedidos', pedidosCrtl.getPedidos);
router.get('/pedidos/:id', pedidosCrtl.getPedidosId);
router.patch('/pedidos/:id', pedidosCrtl.updatePedidos);
router.delete('/pedidos/:id', pedidosCrtl.deletePedidos);

//pedidos graficos
router.get('/pedidos', pedidosCrtl.getPedidos);

//llamada
router.post('/llamada', llamadaCrtl.crearLlamada);

//Datos perfil
router.post('/datosPerfil/:idRegistro',datosperfilCrtl.datosAdicionalesPerfil);
router.get('/tipoDocumeto',datosperfilCrtl.getTipoDocumento);
router.get('/genero',datosperfilCrtl.getGenero);
router.get('/buscarDatos/:id',datosperfilCrtl.getBucar);
router.get('/reflejarDatos/:id',datosperfilCrtl.getDatosPerfil);