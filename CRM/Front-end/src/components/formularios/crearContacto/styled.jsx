import styled from "styled-components"

// Estilo para un div absoluto que contiene otros elementos
export const Div1 = styled.div`
position: absolute;
    height: 90vh;
    width: 350px;
    top: 97px;
    right: 0px;
    display: flex; 
    justify-content: center; 
    @media (max-width: 865px) and (max-height: 850px) {
    margin-top: 40px;
    width: 390px;
    }
`;
// Estilo para un contenedor principal
export const Container1 = styled.div`
    height: 852px;
    width: 345px;
    background-color: #575c5e;
    @media (max-width: 920px)and (max-height: 850px){
    height: 750px;
    width: 386px;
    background-color: white;
    border: solid 1px black;
    }
`
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
/* background-color: blue; */
    height: 65px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
`
// Estilo para un párrafo con estilo itálico
export const Parrafo = styled.div`
    font-size: 18px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #fff;
`
// Estilo para una imagen
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
`
// Estilo para un párrafo con estilo itálico
export const Parrafo1 = styled.div`
    font-size: 15px;
    font-style: italic;
    color: #fff;
`
// Estilo para una caja que contiene elementos
export const Caja1 = styled.div`
    height: 620px;
    width: 324px;
    padding-left: 20px;
    @media (max-width: 920px)and (max-height: 850px){
    height: 500px;
    width: 366px;
    padding-left: 20px;
    }
`
// Estilo para un input de texto
export const Input = styled.input`
    height: 35px;
    width: 300px;
    font-size: 17px;
    outline: none;
    background-color: #ffffff;
    /* background-color: #91ed11; */
    border: none;
    @media (max-width: 920px)and (max-height: 850px){
        height: 35px;
        width: 350px;
        font-size: 17px;
        outline: none;
        /* background-color: red; */
    }
`
// Estilo para un párrafo con estilo itálico y color gris
export const Parrafo2 = styled.div`
    font-size: 16px;
    font-style: italic;
    color: #fff;
    /* color: gray; */
`
// Estilo para un botón con color de fondo y color de texto
export const Boton1 = styled.button`
    background-color: #6AB7BD;
    color: #ffffff;
    width: 85px;
    height: 42px;
    font-size: 15px; 
    border: none;
    border-radius: 10px;
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
// Estilo para otro botón con color de fondo y color de texto
export const Boton2 = styled.button`
  background-color: #6AB7BD;
    color: #ffffff;
    width: 85px;
    height: 42px;
    font-size: 15px; 
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: var(--color-buttonHover);
        color: var( --color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);
        }
`
// Estilo para una caja que contiene elementos
export const Caja2 = styled.div`
    height: 100px;
    width: 345px;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #c800ff; */
    @media (max-width: 920px)and (max-height: 850px){
        height: 90px;
        width: 385px;
        align-items: normal;
        justify-content: space-evenly;
        align-items: center;
        /* background-color: blue; */
        margin-right: 15px;
    }
`;

//contenedor de selecionar la empresa del contacto
export const Select = styled.select`
    width: 310px;
    height: 35px;
    background-color: #fcfcfc;
    border: none;
    @media (max-width: 865px) and (max-height: 850px){
        width: 359px;
        height: 35px;
        border: solid 1px gray;
        background-color: gray;
    }
`