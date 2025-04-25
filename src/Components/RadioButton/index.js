import React, { useState } from "react";
import styled from "styled-components";
import useProdutoStore from "../../Components/Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Card = styled.div`
  width: 97%;
  background: ${colors.pretoChumbo};
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: ${fonts.primary};
  margin: 15px 0px 0px 5px;
  padding: 2px;
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
  font-size: 1rem;
  margin-bottom: 16px;
  font-family: ${fonts.primary};
  color: ${colors.amareloQueijo};
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 05px 0px 0px 0px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: ${fonts.primary};
  color: ${colors.white};

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
        <Title>Pagamento na entrega do pedido:</Title>
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
              {/* {pgto === "pix" && (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deniseburgues-f1924.firebasestorage.app/o/pix.png?alt=media&token=0b64f307-df45-48fe-8f16-9391ef3255b9"
                  alt="Pix"
                />
              )} */}

              {/* {pgto == "cartão" && (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deniseburgues-f1924.firebasestorage.app/o/633611.png?alt=media&token=46d02867-4363-4925-b1bf-195b2598238e"
                  alt="Cartão"
                />
              )} */}

              {/* {pgto == "dinheiro" && (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deniseburgues-f1924.firebasestorage.app/o/images.jpeg?alt=media&token=561c9501-b642-46f9-8f2d-4a3382424cec"
                  alt="Dinheiro"
                />
              )} */}

              {pgto}
            </RadioOption>
          </RadioGroup>
        ))}
      </Content>
    </Card>
  );
}
