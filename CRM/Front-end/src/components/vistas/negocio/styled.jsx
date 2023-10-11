import styled from "styled-components";

// Componente estilizado llamado Container
export const Container = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    cursor: pointer;
`
// Componente estilizado llamado Parrafo para párrafos
export const Parrafo = styled.div`
    font-size: 22px;
    font-style: italic;
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
`
// Componente estilizado llamado Boton para botones
export const Boton = styled.button`
    background-color: var(--color-boton);
    color: white;
    width: 100px;
    height: 37px;
    border: none;
    margin: 5%;
    font-size: 16px; 
    margin: 0;
    padding: 0;
    margin-top: 20px;
    cursor: pointer;
    font-family: "Roboto Serif", serif;
    &:hover {
        background-color: var(--color-botonHover);
        color: var(--color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var( --color-buttonFocus);
        }
`