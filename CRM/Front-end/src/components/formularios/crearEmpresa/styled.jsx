import styled from "styled-components";

// Estilo para el contenedor principal
export const Div1 = styled.div`
  position: absolute;
  height: 90vh;
  width: 350px;
  top: 97px;
  right: 0px;
  display: flex;
  justify-content: center;

  @media (max-width: 865px) and (max-height: 850px) {
    margin-top: 40px;
    width: 390px;
    background-color: white;
    /* background-color: #b300ff; */
  }
`;
// Estilo para el contenedor que envuelve el contenido principal
export const Container1 = styled.div`
  height: 852px;
  width: 350px;
  background-color: #575c5e;
  // background-color: #09c795;
  @media (max-width: 920px) and (max-height: 850px) {
    height: 750px;
    width: 386px;
    background-color: white;
    /* background-color: aqua; */
    border: solid 1px black;
  }
`;
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
  height: 10%;
  width: 340px;
  display: flex;
  // background-color: aqua;
  justify-content: space-between;
  align-items: center;
`;
// Estilo para el párrafo
export const Parrafo = styled.div`
  height: 100%;
  color: #ffffff;
  font-size: 20px;
  font-style: italic;
  display: flex;
  align-items: center;
  padding-left: 15px;
  // background-color: blue;
`;
// Estilo para la imagen
export const Img = styled.img`
  height: 30px;
  width: 30px;
  /* padding-right: 30px; */
  cursor: pointer;
  // background-color: blueviolet;
`;
// Estilo para otro párrafo
export const Parrafo1 = styled.div`
  font-size: 15px;
  color: #ffffff;
  font-style: italic;
`;
// Estilo para una caja que contiene elementos (sección principal)
export const Caja1 = styled.div`
  height: 615px;
  width: 325px;
  padding-left: 20px;

  @media (max-width: 920px) and (max-height: 850px) {
    height: 500px;
    width: 366px;
    padding-left: 20px;
  }
`;
// Estilo para el input
export const Input = styled.input`
  height: 35px;
  width: 300px;
  font-size: 17px;
  outline: none;
  background-color: #ffffff;
  border: solid 1px #ffffff;
`;
// Estilo para el área de texto
export const Area = styled.textarea`
  height: 100px;
  width: 310px;
  font-size: 17px;
  outline: none;
  background-color: #ffffff;
  border: solid 1px white;
`;
// Estilo para un botón de acción
export const Boton1 = styled.button`
  background-color: #6ab7bd;
  color: #ffffff;
  width: 85px;
  height: 42px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-buttonHover);
    color: var(--color-boton1Hover);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;
// Estilo para otro botón de acción
export const Boton2 = styled.button`
  background-color: #6ab7bd;
  color: #ffffff;
  width: 85px;
  height: 42px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-buttonHover);
    color: var(--color-boton1Hover);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;
// Estilo para una caja que contiene elementos (sección de botones)
export const Caja2 = styled.div`
  height: 90px;
  width: 348px;
  display: flex;
  align-items: normal;
  justify-content: space-evenly;
  align-items: center;
  right: 15px;

  @media (max-width: 920px) and (max-height: 850px) {
    height: 90px;
    width: 385px;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: blue; */
    /* right: 15px; */
    margin-right: 15px;
  }
`;
export const SelectEmpresa = styled.select`
  height: 40px;
  width: 310px;
  background-color: #fdfdfd;
  border: solid 1px white;
`;
