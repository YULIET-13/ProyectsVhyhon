import { Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.css"

import Inicio from "../src/components/vistas/Inicialvyhon/inicio";
import Registro from "./components/vistas/Registro/Fondo/registroPrincipal";
import Recuperar from "./components/vistas/recuperarContraseña/index";
import Vistaprincipal from "./components/vistas/carrusel/principal";
import Retorno7 from "../src/components/vistas/empresa";
import Retorno3 from "../src/components/vistas/contacto";
import Retorno2 from "../src/components/vistas/negocio";
import Retorno5 from "../src/components/vistas/tarea";
import PerfilUsuario from "../src/components/vistas/Perfilusuario/perfil/index";
import Login from "./components/vistas/login/index";
import Campaña from "../src/components/vistas/markenting/markentingp";
import Comunucacion from "./components/vistas/markenting/comunicacion/comunicacion";
import Promocion from "./components/vistas/markenting/promocion/promocion";
import Pedidos from "./components/vistas/markenting/pedidos/pedidos";
import Campañasms from "./components/vistas/markenting/campañasms/campaña";
import Grafica from "./components/vistas/menu/configuracion/graficas/index";
import CampañaCorreo from "./components/vistas/markenting/campañacorreo/campaña";
// import llamadaAudioModal from "./components/vistas/markenting/llamadaAudioModal/index"
import Tablallamada from "./components/tablas/tablaLlamada";
import "./App.css"
import Menu from "../src/components/vistas/menu/principal"
import CambioContraseña from "./components/vistas/cambiarContraseña/cambio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/restablecer" element={<CambioContraseña/>}></Route>
        {/* Rutas pricipales*/}
        <Route path="/" element={<Inicio />}>
          {" j"}
        </Route>
        <Route path="/registrarse" element={<Registro />}>
          {"j "}
        </Route>
        <Route path="/recuperar" element={<Recuperar />}>
          {" l"}
        </Route>
        <Route path="/login" element={<Login />}>
          {" l"}
        </Route>
          
        {/* Rutas del menu*/}
        <Route element={<Menu/>}>
          <Route path="/vistaprincipal" element={<Vistaprincipal />}></Route>
          <Route path="/empresas" element={<Retorno7 />}></Route>
          <Route path="/contactos" element={<Retorno3 />}></Route>
          <Route path="/negocios" element={<Retorno2 />}></Route>
          <Route path="/tareas" element={<Retorno5 />}></Route>
          <Route path="/call" element={<Tablallamada/>}></Route>
          {/* Rutas de marketeting*/}
          <Route path="/Marketing" element={<Campaña />}></Route>
          <Route path="/camunicacion" element={<Comunucacion />}></Route>
          <Route path="/promocion" element={<Promocion />}></Route>
          <Route path="/campañacorreo" element={<CampañaCorreo />}></Route>
          <Route path="/camapañasms" element={<Campañasms />}></Route>
          <Route path="/pedidos" element={<Pedidos />}></Route>
          <Route path="/perfilusuario" element={<PerfilUsuario/>}></Route>          
          <Route path="/campañacorreo" element={<CampañaCorreo />}></Route>   
          <Route path="/grafica" element={<Grafica />}></Route>       
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;