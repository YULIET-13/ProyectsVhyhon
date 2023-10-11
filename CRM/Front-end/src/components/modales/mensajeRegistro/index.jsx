import React from 'react';
import { Container, ContenedorModal, Contenido, ContainerBoton } from './styled';
import { FcOk } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'; 

const VentanaModal1 = ({ estado, cambiarEstado }) => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const cerrarModalYRedirigir = () => {
    // Cerrar el modal (cambiar estado)
    cambiarEstado(false);

    // se redirigir a la página de inicio después de cerrar el modal
    navigate('/login');
  };

  return (
    <>
      {estado && (
        <Container>
          <ContenedorModal>
            <Contenido>
              <h2 style={{ fontSize: "80px" }}>
                <FcOk></FcOk>
              </h2>
              <p>
                ¡Saludos! Queremos extenderte una cálida bienvenida a nuestra
                página Vyhon. Estamos encantados de tenerte como parte de
                nuestra comunidad.
              </p>
            </Contenido>
            <ContainerBoton>
              <button onClick={cerrarModalYRedirigir} style={{cursor: "pointer"}}>
                <Link to="/principal" style={{ color: "white", textDecoration: "none"}}>OK</Link>
              </button>
            </ContainerBoton>
          </ContenedorModal>
        </Container>
      )}
    </>
  ); 
};
export default VentanaModal1;

