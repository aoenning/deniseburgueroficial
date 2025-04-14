import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProdutoStore from "./../Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 100%;
  height: 170px;
  /* margin-top: 200px; */
  /* padding-bottom: 10px; */
  border-bottom: 1px solid ${colors.header};
  cursor: pointer;
  background-color: ${colors.primary};
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
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: start;
  color: ${colors.laraja};
  font-family: ${fonts.segudary};
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
`;

const CardDetails = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: start;
  font-family: ${fonts.primary};
  font-size: 13px;
`;

const CardBoxImage = styled.div`
  /* width: 37%; */

  /* justify-content: center; */
  align-items: center;
  /* background-color: ${colors.cinza}; */
`;

const CardImage = styled.img`
  width: 90%;
  height: 150px;
  border-radius: 50%;
  background-color: ${colors.primary};
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
