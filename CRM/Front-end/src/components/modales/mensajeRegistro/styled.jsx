import styled from "styled-components";

export const Container = styled.div` 
width: 100vw;
    height: 100vh;
    position: fixed;
    /* top: 0;
    left: 0; */
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContenedorModal = styled.div`
    width: 25%;
    height: 32%;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    
`
export const Contenido = styled.div`
    width: 100%;
    height:50%;
    display: flex;
    align-items: center;

    h2{
        margin: 0;
        margin-left: 3%;
    }

    p{
        text-align: center;
        font-size: 16px;
        margin: 0;
    }
`
export const ContainerBoton =  styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: end;
    justify-content: center;
    button{
        width: 20%;
        height: 70%;
        font-size: 17px;
        border: none;
        background-color: #0ab841ca;
        color: white;
        margin-left: 10%;
        &:hover {
        background-color: #0ab8416d;
        color: gray;
        }
    }
    
`
