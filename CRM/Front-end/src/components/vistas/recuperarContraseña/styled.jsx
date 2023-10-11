import styled from "styled-components";
import "../../../App.css";

export const Fondo = styled.div`
  background: var(--color-fondo);
  background: -moz-linear-gradient(180deg, var(--color-fondoo) 0%, #545454);
  background: -webkit-linear-gradient(
    180deg,
    var(--color-fondoo) 0%,
    #545454 100%
  );
  background: linear-gradient(180deg, var(--color-fondoo) 0%, #545454 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="##545454",GradientType=1);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contenedor = styled.div`
  border-radius: 3px solid;
  background-color: #3B636D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  width: 20%;
  height: 50%;
  border-radius: 15px;
  box-shadow: 4px 4px 55px -29px var(--colorboxShadow);
`;

export const Titulo = styled.h1`
  text-align: center;
  font-style: italic;
  color: var(--colorTitulo);
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  margin-top: 40px;
`;

export const Parrafo = styled.p`
  font-size: 22px;
  font-weight: 200;
  font-style: italic;
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
`;

export const ConteinerBonton = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* display: flex; */
`;

export const Boton1 = styled.button`
  background-color: var(--color-button);
  color: white;
  width: 35%;
  height: 30%;
  border: none;
  margin-right: 20px;
  margin-top: 30px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-button);
    color: var(--color-boton1Hover);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;

export const Boton2 = styled.button`
  background-color: #d3dbdf2c;
  border: none;
  color: var(--color-boton2);
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin-top: 30px;
  border: solid 1px gray;
  cursor: pointer;

  &:hover {
    background-color: var(--color-buttonHover);
    color: var(--color-boton2Hover);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;

export const Letras = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 7%;
`

export const Input = styled.input`
  width: 80%;
  height: 9%;
  border: none;
  margin-bottom: 20px;
  font-size: 16.5px;
  padding-left: 8px;
  background-color: white;
  background-color: var(--color-input);
`;
