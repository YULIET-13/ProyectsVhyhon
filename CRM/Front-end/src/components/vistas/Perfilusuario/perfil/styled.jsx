import styled from "styled-components";
// fondo
export const Fondo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, var(--color-fondoo) 0%, #5a5b5c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="#2e2e2e",GradientType=1);
`;

//Header y su contenido
export const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

`
export const Cajaheader = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 100px 100px 0px 0px;
  box-shadow: #0f0e0ef0 0px 4px 6px 0px;
  border-top: 1px solid #ffffff94 ;
`;
export const Parrafo1 = styled.button`
  height: 40px;
  width: 250px;
  font-size: 20px;
  border-radius: 0px 20px 0px 10px;
  background-color: #6AB7BD;
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
  border: none;
  &:hover {
    color: black;
    cursor: pointer;
    border-radius: 10px;
    border-radius: 0px 25px 0px 25px;
    font-family: "Times New Roman", Times, serif;
  }
`;
export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 90%;

`;

export const Container = styled.div`
  height: 95%;
  width: 90%;
  display: flex;
  box-shadow: #08080899 10px 12px 6px 1px;
  border-radius: 20px;
  color: white;
  border: solid 1px #ffffff94;

`;
export const ContainPerfil = styled.div`
  height: 100%;
  width: 28%;
  border-right: solid 1px #ffffff94;
  border-radius: 15px 15px 0px 0px;
  color: black;
`;
export const BoxImgPerfil = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgPerfil = styled.div`
  height: 60%;
  width: 50%;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
export const Boxperfil = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InforPerfil = styled.div`
  width: 90%;
  height: 14%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #eee9e6;
  &:hover {
    cursor: pointer;
    font-size: 18px;
  }
  display: flex;
`;
export const InforperfilLetra = styled.div`
  width: 30%;
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #727272d2;
  border-radius: 15px 0px 0px 15px;
  &:hover {
    background-color: #4a4d4b;
  }
`;

export const BoxInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export const HeaderInfor = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-bottom: 1px solid gray;

  h3{
    margin-left: 50px;
  }
`;
export const EditButton = styled.button`
  width: 140px;
  height: 35px;
  border: none;
  margin-right: 5px;
  border-radius: 10px 20px 0px 10px;
  background-color: #918e8e;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #3a3b3beb;
    border-radius: 5px 20px 0px 15px;
  }
`;
export const BodyInfor = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button{
    height: 7%;
    width: 15%;
    background-color: #6AB7BD;
    color: white;
    border: none;
    font-size: 18px;
    &:hover {
        background-color: var(--color-buttonHover);
        color: var(--color-boton1Hover);
    }
  }
`;

export const Cajas = styled.div`
  height: 30%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  /* border: solid 1px gray; */
`
export const Cajitas = styled.div`
  height: 50%;
  width: 30%;
  display: flex;
  border-bottom: 1px solid #f4f4f42d;
  border-radius: 20px;
`
export const ContainerIcono = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  .Iconos{
    font-size: 35px;
    color: white;
  }
`
export const ContainerLetra = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #00ff33; */
  /* border: solid 1px red; */

  h4{
    margin: 0;
    margin-bottom: 7px;
  }

  p{
    margin: 0;
  }
`
export const Inforpass = styled.div`
  width: 90%;
  background-color: red;
`


