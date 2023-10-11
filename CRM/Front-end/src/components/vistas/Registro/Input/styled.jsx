import styled from "styled-components";
import "../../../../App.css"
export const Contenedor = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    position: absolute;
`

export const Contenedor2 = styled.div`
    width: 30em;
    height: 40em;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: -400px;
    bottom: 90px;
    z-index: 0;
    /* margin-top: 40px; */
    background-color: #18375127;
    border-radius: 15px;
    box-shadow: 4px 4px 55px -29px var(--colorboxShadow) ;
    @media screen and (max-width: 700px) {
        width: 25em;
        height: 40em;
        bottom: -350px;
        right: -200px;
    }
`

export const Titulo = styled.div`
    width: 100%;
    height: 10%;
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Contenedor1 = styled.div`
    margin-top: 10px;
    width:75% ;
    height: 15%;
`
export const Input = styled.input`
    border-radius: 3px;
    width: 100%;
    height: 50%;
    margin-top: 8px;
    font-size: 16px;
    border: none;
    background-color: var(--color-input);
    /* outline: none; */
    padding-left: 8px;
`


export const Boton = styled.button`
    background-color: var(--color-boton) ;
    color: #eee;
    border: none;
    width: 60%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;

    :hover{
        background-color: var(--color-botonHover);
        color: var(--color-boton1Hover);
    } 
`
export const Checkbox = styled.div`
    width: 75%;
    height: 10%;
    display: flex;
    align-items: center;
    padding-right: 5px;
    margin-top: 10px;
`

export const TextoCheckbox = styled.p`
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    color: #ffffff;
`

export const Seleccionar = styled.input`
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 10px;
`
export const TextoImput = styled.div`
    font-size: 15px;
    color: var( --colorTitulo);
    margin: 0;
`;

export const ContaienrBoton = styled.div`
    width: 70%;
    height: 20%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
`