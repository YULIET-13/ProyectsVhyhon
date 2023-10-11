import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #4a4040c2;
`;

export const Container = styled.div`
  background-color: #5b5b5b;

  width: 99%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  border-radius: 0px 0px 0px 50px;
  box-shadow: 0px 5px 10px 7px #00000054;
  justify-content: space-evenly;
`;
export const Caja1 = styled.div`
  height: 35%;
`;
export const Cajita = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  width: 100%;
  height: 35%;
  border-bottom: 1px #c8c5c5 solid;
`;

export const Caja2 = styled.div`
  height: 15%;
  width: 100%;
`;

export const Caja4 = styled.div`
  height: 12%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 75px;
  height: 35px;
  background-color: #6ab7bd;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: "Roboto Serif", serif;
  :hover{
    background-color: #69a0c1;
  }
`;
