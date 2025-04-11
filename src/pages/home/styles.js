import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Estilos Globais
export const Container = styled.div`
  width: 100%;
  margin-top: 200px;
  /* margin-bottom: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 1000px; */
  /* overflow-y: "auto"; */
  outline: none;
  background-color: ${colors.primary};
  /* min-height: 100vh; */
`;

export const MainContainer = styled.div`
  padding-top: 60px; /* Espaço para não ficar atrás do Header */
  /* padding-bottom: 60px; */
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  font-family: ${fonts.primary};
  font-size: 25px;
  /* margin-top: 15px; */
`;
