import styled from "styled-components";
import { colors, fonts } from "../../Styles";

export const Card = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 16px;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* border-radius: 16px; */
  background: ${colors.pretoChumbo};
  margin-top: 15px;
  width: 100%;
  max-height: 250px;
  border-radius: 15px;
  /* overflow-y: "auto"; */
  outline: none;
  /* border-bottom: 1px solid ${colors.cinza}; */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  /* background-color: ${colors.brue_leve}; */
  justify-content: space-around;
  flex-direction: row;
  /* border-bottom: 1px solid ${colors.cinza}; */
  padding: 5px;
  margin-top: 15px;
`;

export const BoxCard = styled.div`
  width: 90%;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Box = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  /* margin-bottom: 15px; */
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 1rem;
  /* font-weight: 600; */
  width: 70%;
  margin-left: 10px;
  font-family: ${fonts.primary};
  color: ${colors.amareloQueijo};
`;

export const SubTitle = styled.p`
  font-size: 0.7rem;
  /* font-weight: 600; */
  /* width: 70%; */
  margin-left: 10px;
  font-family: ${fonts.primary};
  margin-left: 5px;
  color: ${colors.white};
`;

export const Price = styled.p`
  color: ${colors.vermelhoChurrasco};
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const QuantityText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  width: 24px;
  text-align: center;
  color: ${colors.white};
`;

export const TotalPrice = styled.p`
  color: ${colors.vermelhoChurrasco};
  /* font-weight: 600; */
  margin-top: 20px;
  font-family: ${fonts.segudary};
`;

export const Button = styled.button`
  flex-direction: column;
  /* margin-top: 15px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  /* background: ${({ variant }) =>
    variant === "destructive" ? colors.cinza : colors.cinza}; */
  color: ${({ variant }) => (variant === "destructive" ? "#fff" : "#374151")};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* border-bottom: 1px solid ${colors.white}; */
  cursor: pointer;
  transition: background 0.2s;
  /* background-color: ${colors.brack}; */

  &:hover {
    background: ${({ variant }) =>
      variant === "destructive" ? colors.white : colors.white};
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  max-height: 40%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* justify-content: center; */
  outline: none;
  overflow: auto;
  /* margin-top: 10px; */
  padding: 5px;
  /* margin-bottom: 200px; */
  /* background-color: ${colors.green_claro}; */
`;
