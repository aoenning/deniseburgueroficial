import { useState } from "react";
import styled from "styled-components";
import { Minus, Plus, Trash2 } from "lucide-react";
import { colors } from "../../Styles";
import * as s from "./styles";
import useProdutoStore from "../../Components/Store/useCartStore";

const CardCarrinho = ({ produto, onUpdate, onRemove }) => {
  const { AddItemPedido, totalCart, removeQtdeItemCart, removeItemCart } =
    useProdutoStore();

  function handleBefore(item) {
    removeQtdeItemCart(item);
    totalCart();
  }

  function handleRemoveItemCart(index) {
    removeItemCart(index);
    totalCart();
  }

  function handleNext(item) {
    AddItemPedido(item);
    totalCart();
  }

  return (
    <s.Card>
      <s.CardContent>
        <s.Header>
          <s.Image src={produto.img} alt={produto.nome} />
          <s.Title>{produto.nome}</s.Title>
          <s.QuantityContainer>
            {produto.quantidade === 1 ? (
              <s.Button onClick={() => handleRemoveItemCart(produto.index)}>
                <Trash2 size={16} color={colors.red} />
              </s.Button>
            ) : (
              <s.Button variant={produto} onClick={() => handleBefore(produto)}>
                <Minus size={16} color={colors.red} />
              </s.Button>
            )}
            <s.QuantityText>{produto.quantidade}</s.QuantityText>
            <s.Button onClick={() => handleNext(produto)}>
              <Plus size={16} color={colors.red} />
            </s.Button>
          </s.QuantityContainer>
        </s.Header>
        <s.ListContainer>
          <s.SubTitle>Tipo queijo: {produto.tipoQueijo}</s.SubTitle>
          {produto.adicionais
            .filter((item) => item.quantidade > 0)
            .map((item) => (
              <s.Box key={item.nome}>
                <s.SubTitle>{item.quantidade}x</s.SubTitle>
                <s.SubTitle>{item.nome}</s.SubTitle>
              </s.Box>
            ))}
        </s.ListContainer>
        <s.BoxCard>
          <s.TotalPrice>
            {produto.valorTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </s.TotalPrice>
        </s.BoxCard>
      </s.CardContent>
    </s.Card>
  );
};

export default CardCarrinho;
