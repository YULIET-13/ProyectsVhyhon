import styled from "styled-components";
import "../../../App.css";

export const Fondo = styled.div`
  background: var(--color-fondo);
  background: -moz-linear-gradient(
    180deg,
    var(--color-fondoo) 0%,
    #3f3f3f 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    var(--color-fondoo) 0%,
    #535252 100%
  );
  background: linear-gradient(180deg, var(--color-fondoo) 0%, #5a5b5c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="#2e2e2e",GradientType=1);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contenedor = styled.div`
  border-radius: 3px solid;
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
  font-style: italic;
  display: flex;
  color: white;
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
  justify-content: space-evenly;
  align-items: center;
  /* display: flex; */
`;

export const Boton1 = styled.button`
  background-color: var(--color-button);
  color: #f6f4f4;
  width: 125px;
  height: 40px;
  border: none;
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
  background-color: var(--color-button);
  color: #f6f4f4;
  width: 125px;
  height: 40px;
  border: none;
  font-size: 15px;
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

export const Input = styled.input`
  width: 280px;
  height: 35px;
  border: none;
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  padding-left: 8px;
  background-color: var(--color-input);
`;
