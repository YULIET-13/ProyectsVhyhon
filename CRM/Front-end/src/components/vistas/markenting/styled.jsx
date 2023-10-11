import styled from "styled-components";

export const ContenedorVisual = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContenedorComponents = styled.div`
  background-color: #4e4b4b;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
  padding: 10px;

`;

export const PanelControl = styled.div`
  width: 15%;
  height: 100%;
  flex-direction: column;
  display: flex;
  background-color: #2793a3;
`;

export const Enlace = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
    color: #0747f7;
    cursor: pointer;
  }
`;

export const Modulo = styled.div`
  width: 80%;
  font-size: 20px;
  margin-top: 15px;
  display: flex;
  cursor: pointer;
`;

export const Submodulo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
`;
