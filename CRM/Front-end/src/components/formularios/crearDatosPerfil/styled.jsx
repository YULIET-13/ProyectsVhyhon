import styled from "styled-components"

export const Caja = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .Cajafieldset{
        width: 86.5%;
        height: 8.5%;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 5px;
        margin: 0;
    }
    .InputFecha{
      height: 9px;
      width: 100%;
      border: none;
      outline: none;
  }
`

export const InputInfor = styled.input`
  height: 35px;
  width: 90%;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  border: solid 1px gray;
`
export const Select1= styled.select`
height: 46px;
  width: 92%;
  color: gray;
  margin-top: 10px;
  border-radius: 5px;
  border: solid 1px gray;
  font-size: 16px;
`



