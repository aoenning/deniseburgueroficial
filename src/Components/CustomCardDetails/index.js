import React from "react";
import styled from "styled-components";
import useProdutoStore from "./../Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 100%;
  height: 150px;
  /* background: #fff; */
  border-bottom: 1px solid #9da4aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const CardImage = styled.img`
  width: 50%;
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
  width: 20%;
  height: 30%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const CardBoxDetail = styled.div`
  width: 63%;
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

const CustomCardDetails = ({ item }) => {
  return (
    <Card key={item.id}>
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

export default CustomCardDetails;
