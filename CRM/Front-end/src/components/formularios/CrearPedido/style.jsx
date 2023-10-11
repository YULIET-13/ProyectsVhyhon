import styled from "styled-components";

export const FormularioContainer = styled.form`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;

`;

export const FormGroup = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  padding: 0;
`;

export const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 30px;
  border: none;
  width: 350px;
  font-size: 17px;
  text-align: center;
  color: #1c1b1bcc;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  height: 35px;
  width: 200px;
  background-color: #e8e3e3;
  cursor: pointer;
`;
