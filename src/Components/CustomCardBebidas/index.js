import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 100%;
  height: 110px;
  /* padding-bottom: 10px; */
  border-bottom: 1px solid #9da4aa;
  cursor: pointer;

  &:hover {
    transform: scale(1);
    /* background-color: #f2f2f2; */
  }

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px; */
`;

const CardImage = styled.img`
  width: 20%;
  height: 70px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.p`
  text-align: start;
  font-family: ${fonts.primary};
  font-size: 15px;
  font-weight: bold;
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: start;
  color: ${colors.laraja};
  font-family: ${fonts.segudary};
  font-size: 15px;
  font-weight: bold;
`;

const CardDetails = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: start;
  font-family: ${fonts.primary};
  font-size: 13px;
`;

const CardBoxImage = styled.div`
  width: 30%;
  height: 150%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  /* padding: 10px; */
  margin-top: 15px;
`;

const CardBoxDetail = styled.div`
  width: 70%;
`;

const CardBoxPrice = styled.div`
  bottom: 0px;

  /* position: fixed; */
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  /* height: 100%; */
  /* align-items: center; */
  padding: 10px;
`;

const CustomCardBebidas = ({ item }) => {
  const navigate = useNavigate();
  const selectedTelaDetalhe = () => {};
  return (
    <Card key={item.id} onClick={() => navigate("/Detalhe")}>
      <CardBox>
        <CardBoxDetail>
          <CardTitle>{item.nome}</CardTitle>
          <CardDetails>{item.detalhe}</CardDetails>
          <CardPrice>
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CardPrice>
        </CardBoxDetail>
        <CardBoxImage>
          <CardImage src={item.img} alt="Random" />
        </CardBoxImage>
      </CardBox>
    </Card>
  );
};

export default CustomCardBebidas;
