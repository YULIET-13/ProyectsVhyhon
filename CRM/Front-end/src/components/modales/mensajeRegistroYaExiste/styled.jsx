import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
    height: 100vh;
    position: fixed;
    /* top: 0;
    left: 159px; */
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
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    
    /* background-color: red; */
    
`

export const Encabezado = styled.div`
width: 100%;
height: 22%;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    /* margin-bottom: 20px;
    padding-bottom: 20px; */
    border-bottom: 1px solid #E8E8E8;

    h1{ 
        font-weight: 500;
        font-size: 30px;
        margin-left: 20px;
    }
`
export const Body = styled.div`
    width: 100%;
    height:50%;
    display: flex;
    align-items: center;
    margin-top: 2%;

    h1{
        margin: 0;
        margin-left: 3%;
    }

    p{
        text-align: center;
        font-size: 16px;
        margin-right: 25px;
}
`;



