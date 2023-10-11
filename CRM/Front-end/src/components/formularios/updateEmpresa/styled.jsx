import styled from "styled-components";

// Estilo para el contenedor principal
export const Div1 = styled.div`
position: absolute;
    height: 90vh;
    width: 18%;
    top: 92px;
    right: 0px;
    display: flex; 
    justify-content: center; 
`;
// Estilo para el contenedor que envuelve el contenido principal
export const Container1 = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: solid 1px black;
`
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
// Estilo para el párrafo
export const Parrafo = styled.div`
    font-size: 20px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
// Estilo para la imagen
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
` 
// Estilo para otro párrafo
export const Parrafo1 = styled.div`
    font-size: 15px;
    font-style: italic;
`
// Estilo para una caja que contiene elementos (sección principal)
export const Caja1 = styled.div`
    height: 75%;
    width: 100%;
    padding-left: 20px;
`
// Estilo para el input
export const Input = styled.input`
    height: 5.5%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
// Estilo para el área de texto
export const Area = styled.textarea`
    height: 20%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
// Estilo para un botón de acción
export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 40%;
    border: none;
    border-radius: 2px;
    font-size: 15px; 
    cursor: pointer;
    &:hover {
        background-color: var(--color-buttonHover);
        color: var(--color-boton1Hover);
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);
        }
`
// Estilo para otro botón de acción
export const Boton2 = styled.button`
    background-color: white;
    color: #49a3db;
    width: 25%;
    height: 40%;
    font-size: 15px; 
    border: solid 1px gray;
    cursor: pointer;

    &:hover {
        background-color: var(--color-buttonHover);
        color: var(--color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);
        }
`
// Estilo para una caja que contiene elementos (sección de botones)
export const Caja2 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
`
export const SelectEmpresa = styled.select`
    height: 5.5%;
    width: 92%;
`