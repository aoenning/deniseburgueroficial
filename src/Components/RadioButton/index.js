import React, { useState } from "react";
import styled from "styled-components";
import useProdutoStore from "../../Components/Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 96%;
  background: ${colors.white};
  /* border-radius: 16px; */
  /* box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); */
  /* overflow: hidden; */
  font-family: ${fonts.primary};
  /* margin: 15px 0px 0px 10px; */
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 1.0rem;
  margin-bottom: 16px;
  font-family: ${fonts.primary};
  color: ${colors.brack};
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: ${fonts.primary};
  color: ${colors.brack};

  input {
    accent-color: ${colors.brue};
    width: 18px;
    height: 18px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default function PaymentCard() {
  const [payment, setPayment] = useState("");
  const { cliente, tipopagamento, pagamento, SetPagamento } = useProdutoStore();

  return (
    <Card>
      <Content>
        <Title>Pagamento:</Title>
        {tipopagamento.map((pgto) => (
          <RadioGroup>
            <RadioOption>
              <input
                type="radio"
                name="pagamento"
                value={pgto}
                checked={pagamento === pgto}
                onChange={(e) => {
                  SetPagamento(e.target.value);
                }}
              />
              {pgto === "pix" && (
                <img
                  src="data:image/png;base64,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"
                  alt="Pix"
                />
              )}

              {pgto == "cartão" && (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                  alt="Cartão"
                />
              )}

              {pgto == "dinheiro" && (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZZCtGXshUJlOkiZ7UNE3G205v9ykrPKlSQ&s"
                  alt="Dinheiro"
                />
              )}

              {pgto}
            </RadioOption>
          </RadioGroup>
        ))}
      </Content>
    </Card>
  );
}
