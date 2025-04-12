import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Estilos Globais
export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #3e2723;
`;

export const PedidoInfo = styled.div`
  background: #fff3e0;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #ffe0b2;
`;

export const InfoRow = styled.p`
  margin: 6px 0;
  color: #5d4037;
  font-size: 0.95rem;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding: 0 10px;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 35px;
    left: 5%;
    right: 5%;
    height: 4px;
    background: #d7ccc8;
    z-index: 0;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    width: 50%;
    margin-bottom: 2rem;
  }
`;

export const IconWrapper = styled.div`
  background: ${({ active }) => (active ? "#ff5722" : "#ccc")};
  color: #fff;
  border-radius: 50%;
  padding: 12px;
  margin-bottom: 8px;
  transition: 0.3s;
`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: ${({ active }) => (active ? "#ff5722" : "#888")};
  text-align: center;
`;
