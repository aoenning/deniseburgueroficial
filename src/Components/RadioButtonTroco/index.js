import React, { useState } from "react";
import styled from "styled-components";
import useProdutoStore from "../Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
`;

const Option = styled.label`
  /* display: flex; */
  /* justify-content: start; */
  align-items: center;
  gap: 0.6rem;
  padding: 0.3rem;
  border: 2px solid ${({ selected }) => (selected ? "#222" : "#ccc")};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f5f5f5" : "#fff")};
  transition: all 0.2s ease;
  width: 30%;
  
`;

const Input = styled.input`
  accent-color: #222;
  margin: 0px 5px 0px 0px;
`;

export default function RadioButtonEndereco({
  valor,
  onChange,
  enderecoCliente,
}) {
  const {
    setShow,
    atualizarCliente,
    cliente,
    limparCliente,
    message,
    setMessage,
    setOpenMessage,
    openMessage,
    showModalTroco,
    setShowTroco,
    atualizaTroco,
    troco,
  } = useProdutoStore();

  return (
    <Container>
      <Option selected={troco.status === "nao"}>
        <Input
          type="radio"
          name="nao"
          value="nao"
          checked={troco.status === "nao"}
          onChange={(e) => atualizaTroco("status", e.target.value)}
        />
        Não
      </Option>

      <Option selected={troco.status === "sim"}>
        <Input
          type="radio"
          name="sim"
          value="sim"
          checked={troco.status === "sim"}
          onChange={(e) => atualizaTroco("status", e.target.value)}
        />
        Sim
      </Option>
    </Container>
  );
}
