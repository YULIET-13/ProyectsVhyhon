import styled from "styled-components"

// Estilo para el contenedor principal
export const Container= styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
// Estilo para el párrafo
export const Parrafo = styled.div`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
`
// Estilo para el botón
export const Boton =styled.button`
    background-color: var(--color-boton);
    color: #eaeff1;
    width: 100px;
    height: 38px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px; 
    cursor: pointer;
    font-family: "Roboto Serif", serif;
    &:hover {
        background-color: var( --color-botonHover);
        color: var(--color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);
        }
`