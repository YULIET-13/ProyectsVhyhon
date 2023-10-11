import styled from "styled-components" 
import "../../../../App.css"

export const Fondo = styled.div`
background: var( --color-fondo);
background: -moz-linear-gradient(180deg,var(--color-fondoo) 0%, #545454 100%);
background: -webkit-linear-gradient(180deg, var(--color-fondoo) 0%, #515151 100%);
background: linear-gradient(180deg, var(--color-fondoo) 0%, #545454 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#545454",endColorstr="#545454",GradientType=1);
    width: 100%;
    height:100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: flex-start;
    }
`
export const Idioma = styled.select`
    width: 20%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;
`

export const Ladero = styled.div`
    background-color: rgba(8, 1, 1, 0.149);
    width: 25em;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: green; */
    @media screen and (max-width: 800px) {
    width: 100%;
    height: 60vh;
    display: flex;
    }
`
export const Ladero1 = styled.div`
    width: 23em;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: pink; */
    @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    height: 25%;
    width: 35em;
    }
`
export const Ladero2 = styled.div`
    color: black;
    width: 23em;
    height: 50% ;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: antiquewhite; */
    @media screen and ( max-width: 800px){
        display: flex;
        width: 30em;
        height: 60%;
    }

`

export const Img = styled.img`
    width: 160px;
`


export const Ingresar = styled.p`
    margin-right: 10px;
    height: 15%;
    font-size: 18px;
    font-weight:500;
    cursor: pointer;
    color: #fff;
    &:hover {
        color: #c6dde7;
    }
`

export const Parrafo = styled.div`
    font-size: 17px;
    font-weight: 500;
    font-style: italic;
    display: flex;
    text-align: center;
    color: #fff;
`
export const Parrafo1 = styled.div`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
    color: #fff;
`