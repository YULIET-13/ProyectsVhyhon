import styled from "styled-components";
import "../../../App.css"

export const Fondo = styled.div`
background: var(--color-fondo);
background: -moz-linear-gradient(180deg, var(--color-fondoo) 0%, #3f3f3f 100%);
background: -webkit-linear-gradient(180deg, var(--color-fondoo) 0%, #535252 100%);
background: linear-gradient(180deg, var(--color-fondoo) 0%, #555454 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="#2e2e2e",GradientType=1);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contenedor = styled.div`
  border-radius: 3px solid;
  background-color: #18375127;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25em;
  height: 30em;
  border-radius: 15px;
  box-shadow: 2px 2px 13px 5px rgba(50, 50, 50, 0.654);
`;
export const Titulo = styled.h1`
  text-align: center;
  font-style: italic;
  color: #f4f3f3;
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const Parrafo = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #f7f7f7f5;
  margin-left: 10%;
  margin-top: 2em;
`;
export const Input = styled.input`
  width: 80%;
  height: 8%;
  margin-left: 10%;
  border: none;
  color: #000000;
  padding-left: 5px;
  font-size: 18px;
  background-color: var(--color-input);
`;
export const Olvidar = styled.div`
  /* text-decoration: none; */
  color: #fafafa;
  /* font-family:'Open Sans', sans-serif; */
  font-size: 15px;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--color-button);
  margin-top: 7px;
  /* margin-bottom: 7px; */
  color: white;
  width: 55%;
  height: 24%;
  border: none;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-buttonHover);
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 1px 2px 15px  (--color-buttonFocus);
  }
`;

export const ContainerUltimo = styled.div`
  width: 100%;
  height: 35%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Message = styled.div`
    font-size: 15px;
    align-items: center;
    color: red;
    margin-left: 50px;
`
