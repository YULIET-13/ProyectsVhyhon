import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 90vh;
  width: 350px;
  top: 97px;
  right: 0px;
  display: flex;
  justify-content: center;
  background-color: white;
  @media (max-width: 865px) and (max-height: 850px) {
    margin-top: 40px;
    width: 390px;
  }
`;

export const Principal = styled.div`
  height: 852px;
  width: 123%;
  background-color: #575c5e;
  @media (max-width: 920px) and (max-height: 850px) {
    height: 750px;
    width: 123%;
  }
`;
export const Caja1 = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Parrafo = styled.div`
  font-size: 18px;
  font-style: italic;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
`;
export const Img = styled.img`
  height: 30px;
  width: 30px;
  padding-right: 30px;
  cursor: pointer;
`;
export const Caja2 = styled.div`
  height: 615px;
  width: 325px;
  padding-left: 20px;
  /* background-color: pink; */
  @media (max-width: 920px) and (max-height: 850px) {
    height: 500px;
    width: 366px;
    padding-left: 20px;
  }
`;
export const Parrafo1 = styled.div`
  font-size: 15px;
  font-style: italic;
  color: #fff;
`;
export const Input = styled.input`
  height: 35px;
  width: 300px;
  font-size: 17px;
  outline: none;
  background-color: #ffffff;
  border: none;
  @media (max-width: 920px) and (max-height: 850px) {
    height: 35px;
    width: 350px;
    font-size: 17px;
    outline: none;
    /* background-color: red; */
  }
`;
export const Select = styled.select`
  background-color: #ffffff;
  border: none;
  height: 35px;
  width: 300px;
  font-size: 17px;
  font-style: italic;
  color: #000000;
  outline: none;
  /* background-color: blue; */
  @media (max-width: 920px) and (max-height: 850px) {
    /* background-color: #ffffff; */
    /* background-color: aqua; */
    height: 35px;
    width: 356px;
    font-size: 17px;
    font-style: italic;
    color: gray;
    border: solid 1px gray;
    outline: none;
  }
`;
export const Caja3 = styled.div`
  height: 100px;
  width: 345px;
  display: flex;
  align-items: normal;
  justify-content: space-evenly;
  align-items: center;
  right: auto;
  @media (max-width: 920px) and (max-height: 850px) {
    height: 90px;
    width: 385px;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: black; */
  }
`;

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
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;
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
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;
