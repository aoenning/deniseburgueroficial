import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProdutoStore from "./../Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 95%;
  max-height: 200px;
  margin-left: 10px;
  margin-top: 15px;
  border-radius: 1rem;
  /* border-bottom: 1px solid ${colors.header}; */
  cursor: pointer;
  background-color: ${colors.pretoChumbo};
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

const CardTitle = styled.p`
  text-align: start;
  font-family: ${fonts.primary};
  font-size: 15px;
  font-weight: bold;
  color: ${colors.amareloQueijo};
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: start;
  color: ${colors.vermelhoChurrasco};
  font-family: ${fonts.primary};
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

const CardDetails = styled.p`
  font-size: 0.8rem;
  color: ${colors.white};
  text-align: start;
  font-family: ${fonts.segudary};
  font-size: 13px;
`;

const CardBoxImage = styled.div`
  width: 30%;
  /* width: 80px; */
  max-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.cinza}; */
`;

const CardImage = styled.img`
  width: 100%;
  /* height: 85px; */
  max-height: 90px;
  border-radius: 20%;
  background-color: ${colors.primary};
`;

const CardBoxDetail = styled.div`
  width: 80%;
  margin: 0px 5px 10px 5px;
`;

const CardBoxPrice = styled.div`
  bottom: 0px;
  /* position: fixed; */
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 100%; */
  align-items: center;
  padding: 10px;
`;

const CustomCard = ({ burger }) => {
  const navigate = useNavigate();
  const { produto, atualizarProduto, selecionarProduto } = useProdutoStore();
  const selectedTelaDetalhe = () => {};

  const handleChange = (e) => {
    selecionarProduto(e);
    navigate("/Detalhe");
  };

  return (
    <Card key={burger.id} onClick={() => handleChange(burger)}>
      <CardBox>
        <CardBoxDetail>
          <CardTitle>{burger.nome}</CardTitle>
          <CardDetails>{burger.detalhe}</CardDetails>
          <CardPrice>
            {burger.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CardPrice>
        </CardBoxDetail>
        <CardBoxImage>
          <CardImage src={burger.img} alt="Random" />
        </CardBoxImage>
      </CardBox>
    </Card>
  );
};

export default CustomCard;
