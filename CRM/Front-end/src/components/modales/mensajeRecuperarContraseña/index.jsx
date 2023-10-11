import React from 'react';
import { Container , ContenedorModal , Encabezado , Body , Footer , Boton } from './styled';
import { GrClose } from "react-icons/gr";
import { FcOk } from "react-icons/fc";
import "../../../App.css"

const VentanaModal2 = ({ estado1, cambiarEstado1 }) => {

    const cerrarModalYRedirigir = () => {
      // Cerrar el modal (cambiar estado)
      cambiarEstado1(false);

      // Redirigir a una nueva ruta después de 2 segundos
      setTimeout(() => {

        // Redirige a la página de inicio
        window.location.href = "/login"
        
      }, 2000);
    };



  return (
    <>
    {estado1 && 
        <Container p>
            <ContenedorModal>
                <Encabezado>
                    <h1>¡Hola!</h1>
                    <GrClose style={{marginRight:"20px"}} onClick={cerrarModalYRedirigir}/>
                </Encabezado>
                <Body>
                    <h1 style={{fontSize:"90px", marginTop:"25px"}}><FcOk></FcOk></h1>
                    <p>Solo queríamos informarte que hemos enviado un mensaje a tu dirección de correo electrónico. Te sugerimos revisar tu bandeja de entrada.</p>
                </Body>
                <Footer>
                    <Boton onClick={cerrarModalYRedirigir}>OK</Boton>
                </Footer>
            </ContenedorModal>
        </Container>
    }
    </>
  );
};

export default VentanaModal2;