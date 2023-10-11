import styled from "styled-components";

const Fondo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

`
const Contenedor = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
`

const Caja = styled.div`
border-radius: 15px;
    width: 70%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    cursor: pointer;

    &.hover{
        margin-top: 15px;
        background-color: #56b7f75c ;

    :hover{
        background: -webkit-linear-gradient(180deg, #ffffff 0%, #ddd4d4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#a7a3a3",GradientType=1);
    }
    }
    
    .perfil{
        width: 20%;
        height: 85%;
    }
    .contenedorParrafo{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }

    .parrafo1{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: left;
    }

    .parrafo2{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: left;
    }

    .fecha{
        width: 70%;
        height: 15%;
        display: flex;
        justify-content: end;
    }
    
`


export {
    Fondo, Contenedor, Caja
}