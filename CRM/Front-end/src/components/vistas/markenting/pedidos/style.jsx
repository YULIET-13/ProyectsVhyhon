import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, var(--color-fondoo) 0%, #545454 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="##545454",GradientType=1);
`;

export const ButtonCont = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const State = styled.div`
  height: 5%;
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  background-color: #ffffff4d;
  box-shadow: 2px 5px 2px 1px;
  border-radius: 15px;
  ; 

`;

export const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff4d;
  box-shadow: 0px 0px 10px 3px #342e2e;
  border-radius: 15px;
`;

export const Column = styled.div`
  width: 24%;
  max-height: 100%;
  border-radius: 10px;
  border-right: solid 1px #707070bd;
  display: flex;
  gap: 10px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ::-webkit-scrollbar {
    overflow: hidden;
  }
`;

export const H2 = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: 5px;
  color: white;

`;

export const Task = styled.div`
  height: 20%;
  width: 90%;
  color: white;
  background-color: #467E84;
  border-radius: 20px 5px 20px 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #515A5B;
    color: white;
    transform: scale(1.05);
  }
`;

export const TitleClient = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DataOrders = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Data = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.button``;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff3333;
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #6ab7bd;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  width: 100%;
  background-color: #6ab7bd;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4e8b8d;
  }
`;
