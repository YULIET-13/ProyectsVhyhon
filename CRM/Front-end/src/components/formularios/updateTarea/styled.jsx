import styled from "styled-components";


export const Container = styled.div`
position: absolute;
    height: 90vh;
    width: 18%;
    top: 92px;
    right: 0px;
    display: flex; 
    justify-content: center; 
`;
export const Principal = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: solid 1px black;
`
export const Caja1 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Parrafo = styled.div`
    font-size: 18px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
` 
export const Caja2 = styled.div`
    height: 75%;
    padding-left: 20px;
`
export const Parrafo1 = styled.div`
    font-size: 15px;
    font-style: italic;
`
export const Input1 = styled.input`
    height: 6%;
    width: 94%;
    font-size: 17px;
    outline: none;
`

export const Caja3 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
`

export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 45%;
    border: none;
    border-radius: 2px;
    font-size: 14px; 
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
export const Boton2 = styled.button`
        background-color: white;
    color: #00aaffcd;
    width: 35%;
    height: 45%;
    font-size: 14px;
    border: solid 1px gray;
    cursor: pointer;

    &:hover {
        background-color: var(--color-buttonHover);
        color: var(--color-boton1Hover);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px var(--color-buttonFocus);}
`
export const ContainerInput = styled.div`
    height: 6.5%;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid gray 1px ;
    outline: none;
`

export const Select = styled.select`
    width: 97%;
    height: 7%;
    border: solid 1px gray;
`