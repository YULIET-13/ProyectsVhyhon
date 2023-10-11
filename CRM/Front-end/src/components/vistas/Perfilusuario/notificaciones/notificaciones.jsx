import React from "react";
import { Caja, Contenedor, Fondo } from "./styled";
import { Cajaheader, Parrafo1, Header } from "../perfil/styled";
import { useLocation } from "react-router-dom";

const Notificacion = ({ cambiarAperfil }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Fondo>
        <Header>
          <Cajaheader>
            <Parrafo1 onClick={() => cambiarAperfil(true)}>Mi perfil</Parrafo1>
            <Parrafo1
              style={{
                background:
                  currentPath === "/perfilusuario" ? "#787676d5" : "#ffffff",
                textDecoration: "none",
              }}
            >
              Notificaciones
            </Parrafo1>
          </Cajaheader>
        </Header>

        <Contenedor>
          <Caja className="hover">
            <Caja className="perfil">foto de: cara de patacón quemado 🥶</Caja>

            <Caja className="contenedorParrafo">
              <Caja className="parrafo1">
                {" "}
                hola cara de arróz con patacón, quemado: tienes una invitacion
                de radio watapuri, a las 5pm el lunes septiembre de 2023{" "}
              </Caja>
              <Caja className="parrafo2">hace 2minutos</Caja>

              <Caja className="fecha"> 7/09/2023</Caja>
            </Caja>
          </Caja>
        </Contenedor>
      </Fondo>
    </>
  );
};

export default Notificacion;
