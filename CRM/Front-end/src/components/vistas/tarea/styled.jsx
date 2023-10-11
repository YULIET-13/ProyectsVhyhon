    import styled from "styled-components";
    
    export const Container = styled.div`
    height: 75vh;
    width: 100%;
    `;

    export const Select = styled.select`
    height: 40%;
    width: 20%;
    font-size: 17px;
    color: gray;
    font-style: italic;
    border: none;
    margin-right: 10px;
    `;

    export const Menudesplegable = styled.div`
    display: ${({ perfilDesplegable }) => (perfilDesplegable ? "block" : "none")};
    width: 130%;
    height: 350px;
    list-style: none;
    position: absolute;
    top: 130%;
    left: 105px;  
    padding: 0;
    border: 1px solid  gray;
    background-color: white;
`

    export const Parrafo = styled.div`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
    `;

    export const Caja2 = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    `;

    export const Boton = styled.button`
    background-color: var( --color-boton);
    color: #161616;
    width: 100px;
    height: 35px ;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    font-family: "Roboto Serif", serif;
    &:hover {
        background-color: var(--color-buttonHover);
        color: var(--color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);
    }
    `;


export const OpcionesParrafo = styled.li`
    margin-right: 10%;
    margin-left: 10%;
    cursor: pointer;
    &:last-child{
        margin-right: 20px;
    }
    &:hover{
        background-color: var(--color-botonHover);
        color: var(--color-MenuItem);
    }
`

