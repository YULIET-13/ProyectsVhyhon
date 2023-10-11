import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContenedorModal = styled.div`
  width: 28%;
  height: 60%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const Header = styled.div`
  height: 12%;
  width: 100%;
  border-bottom: 1px gray solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 200;
    font-size: 25px;
    margin-left: 30px;
  }
`;
export const Body = styled.div`
  margin-top: 5px;
  height: 73%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input1 = styled.input`
  height: 35px;
  width: 90%;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  border: solid 1px gray;
`;
export const Select1 = styled.select`
  height: 50px;
  width: 91%;
  color: gray;
  margin-top: 10px;
  border-radius: 5px;
  border: solid 1px gray;
  font-size: 16px;
`;
export const Caja = styled.div`
  height: 45px;
  width: 92%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 5px;

  .InputPequeño {
    width: 46%;
    height: 80%;
    margin: 0;
  }

  .Cajafieldset {
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    border: solid 1px gray;
    border-radius: 5px;
    width: 42%;
    height: 75%;

    .InputHora {
      height: 25px;
      width: 100%;
      border: none;
      outline: none;
    }
  }
`;
export const Boton = styled.button`
  height: 43px;
  width: 30%;
  margin-top: 15px;
  margin-right: 35px;
  background-color: #0099ffe2;
  color: white;
  border: none;

  &:hover {
    background-color: #3eabee76;
    color: gray;
  }
`;
