import React, { useState } from "react";
import styled from "styled-components";
import useProdutoStore from "../Store/useCartStore";
import { colors, fonts } from "../../Styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1rem;
  border: 2px solid ${({ selected }) => (selected ? "#222" : "#ccc")};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f5f5f5" : "#fff")};

  transition: all 0.2s ease;
`;

const Input = styled.input`
  accent-color: #222;
`;

export default function RadioButtonEndereco({
  valor,
  onChange,
  enderecoCliente,
}) {
  return (
    <Container>
      <Option selected={valor === "retirada"}>
        <Input
          type="radio"
          name="entrega"
          value="retirada"
          checked={valor === "retirada"}
          onChange={(e) => onChange(e.target.value)}
        />
        Retirar no local
      </Option>

      <Option selected={valor === "entrega"}>
        <Input
          type="radio"
          name="entrega"
          value="entrega"
          checked={valor === "entrega"}
          onChange={(e) => onChange(e.target.value)}
        />
        
        Entregar no endereço: <strong>{enderecoCliente.rua}</strong>
      </Option>
    </Container>
  );
}
