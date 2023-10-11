import React from 'react';
import { Container , ContenedorModal , Encabezado , Body  } from './styled';
import { GrClose } from "react-icons/gr";
import { IoIosCloseCircle } from "react-icons/io";


const VentanaModal3 = ({ estado3, cambiarEstado3}) => {

        const cerrarModalYRedirigir = () => {
            // Cerrar el modal (cambiar estado)
            cambiarEstado3(false);
    
            // Redirigir a una nueva ruta después de 1 segundos
            setTimeout(() => {
    
            // Redirige a la página de inicio
            window.location.href = "/registrarse"  
            
            },1000);
        };

return (
    <>
    {estado3 && 
        <Container p>
            <ContenedorModal>
                <Encabezado>
                    <h1>¡Hola!</h1>
                    <GrClose style={{marginRight:"20px"}} onClick={cerrarModalYRedirigir}
                    />
                </Encabezado>
                <Body>
                    <h1 style={{fontSize:"70px", marginTop:"25px"}}><IoIosCloseCircle style={{color:"red"}}></IoIosCloseCircle></h1>
                    <p>Nos gustaría comunicarle que su correo no se encuentra actualmente registrado en nuestra plataforma, Vyhon.  Le extendemos una invitación para que se registre en nuestro sistema.</p>
                </Body>
                
            </ContenedorModal>
        </Container>
}
    </>
);
};

export default VentanaModal3;