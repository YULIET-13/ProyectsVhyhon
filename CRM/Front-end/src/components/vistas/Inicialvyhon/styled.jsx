import styled from "styled-components";
import "../../../App.css"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

//contenedor de opciones de ingresar
export const ContenedorInicial = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 10px 10px var( --color-boxSHADOW);
    background: -webkit-linear-gradient(180deg, var(--color-opcionesHeader) 0%, var(--color-primary) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=var(--color-opcionesHeader),endColorstr=var(--color-primary),GradientType=1);
`
//contenedor logo
export const Contenedor1 = styled.nav`
    width: 20%;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    height: 60px;
`;

export const Menucontainer = styled.ul`
    width: 18%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const Opciones = styled.li`
    background-color: var(--color-opcionesHeader);
    color: var(--colorTitulo);
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    &:hover {
    background: -webkit-linear-gradient(180deg, var(--color-opcionesHeader) -10%, var(--color-opcionHeader) 250%);
    color: var( --colorTitulo);
}
`;

export const Informacion = styled.div`
    height: 100%;
    width: 100%;    
`
//contendor tarjetas
export const ContainerTarjetas = styled.div`
    height: 100%;
    width: 100%;
    display : flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    color: white;
    margin-top: 0%;
    @media (min-width: 360px) and (max-height: 700px) {
    height: auto;
    width: 100%;
    display : flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    }   
` 
export const ContenedorImagen = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const IMG = styled.img`
    height: 230px;
`
export const TarjetasInformativas = styled.div`
    height: 80%;
    width: 28%;
    background-color: var(--color-targetasInformativas);
    opacity: .9;
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 19px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const Footer = styled.div`
    color: var(--color-Footer);
    text-align: center;
    height: 10%;
`
export const P = styled.p`
`