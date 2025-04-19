import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Estilos Globais
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* margin-top: 200px; */
  /* margin-bottom: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  outline: none;
  background-color: ${colors.white};
  /* min-height: 100vh; */
`;

export const MainContainer = styled.div`
  padding-top: 60px;
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
  margin-top: 15px;
`;

export const BoxList = styled.div`
  margin-top: 15px;
  overflow-y: "auto";
`;

export const Area = styled.div`
  margin-top: 15px;
`;

export const Card = styled.div`
  background-color: #fff3f3;
  border: 2px solid #ff6b6b;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 400px;
  margin: 40px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TitleCard = styled.h2`
  color: #ff4d4d;
  font-size: 1.8rem;
  margin-bottom: 12px;
`;

export const MessageCard = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.5;
`;

export const LoadingCard = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;
