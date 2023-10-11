import React from 'react';
import { Container , ContenedorModal , Encabezado , Body } from './styled';
import { GrClose } from "react-icons/gr";
import { IoIosCloseCircle } from "react-icons/io";


const UserExiste = ({ estado, cambiarEstado}) => {

return (
    <>
    {estado && 
        <Container p>
            <ContenedorModal>
                <Encabezado>
                    <h1>¡Hola!</h1>
                    <GrClose style={{marginRight:"20px", cursor:"pointer"}} onClick={() => cambiarEstado(false)}
                    />
                </Encabezado>
                <Body>
                    <h1 style={{fontSize:"75px", marginTop:"25px"}}><IoIosCloseCircle style={{color:"red"}}></IoIosCloseCircle></h1>
                    <p>Parece que el correo electrónico que has proporcionado ya está asociado a una cuenta registrada en nuestra página VYHON. Te recomendamos intentar registrarte nuevamente utilizando una dirección de correo diferente.</p>
                </Body>
            </ContenedorModal>
        </Container>
}
    </>
);
};

export default UserExiste;