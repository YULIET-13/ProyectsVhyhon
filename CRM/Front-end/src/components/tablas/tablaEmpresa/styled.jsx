import styled from "styled-components";
export const ContainerPrincipal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ccd1d2; */
`;

export const ContainerSecundario = styled.div`
  width: 90%;
  max-height: 75%;
  min-height: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  /* background-color: #00ffff; */
`;

export const Heder = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    margin: 0;
    margin-left: 2%;
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 300;
  }
`;

export const ContainerInput = styled.div`
  border-bottom: 1px solid gray;
  width: 12%;
  height: 40%;
  margin-right: 2%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  height: 90%;
  width: 80%;
  background-color: transparent;
  font-size: 18px;
  border: none;
  outline: none;
  margin-left: 15px;
`;

export const HederTabla = styled.div`
  background-color: #9a9a9a;
  height: 8%;
  width: 90%;
  display: flex;
  border-bottom: 1px solid gray;
`;
export const Caja1 = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Parrafo = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  margin-left: 7px;
`;

export const BodyTabla = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
`;

export const CajaIcono = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-left: 5%;
`;

export const FooterTabla = styled.span`
  height: 8%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boton = styled.button`
  background-color: #818587;
  color: #ffffff;
  width: 180px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: none;
  font-size: 19px;
  cursor: pointer;
  font-family: "Roboto Serif", serif;
  &:hover {
    background-color: #129ff676;
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;
