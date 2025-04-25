import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Components/CustomCardDetails";
import { burgers, bebida } from "../../Components/Cardapio";
import useProdutoStore from "../../Components/Store/useCartStore";
import * as s from "./styles";
import { FaBack } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { colors } from "../../Styles";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Detalhe() {
  const [listCardapioAdicionais, setListCardapioAdicionais] = useState([]);
  const {
    produto,
    atualizarProduto,
    selecionarProduto,
    addItemAdicionais,
    removeItemAdicionais,
    adicionais,
    queijos,
    totalItens,
    valorTotalItens,
    clearAdicionais,
    totalProduto,
    atualizarProdutoAdicionais,
    addItemCart,
    totalCart,
    tipoEntrega,
    setAdicional,
    atualizaAdicionalProduto,
  } = useProdutoStore();
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProdutos();
  }, []);

  function backScreen() {
    clearAdicionais();
    navigate("/");
  }

  function haldleAddAdicionais(item) {
    addItemAdicionais(item);
    atualizaAdicionalProduto();
    totalProduto();
  }

  function haldleRemovedicionais(item) {
    removeItemAdicionais(item);
    totalProduto();
  }

  function handleNext() {
    // console.log(produto);
    addItemCart(produto);
    totalCart();
    navigate("/Carrinho");
  }

  function getProdutos() {
    const unsubscribe = onSnapshot(collection(db, "produtos"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const cardapio = lista
        .filter((i) => i.categoria !== "Tradicional")
        .map((i) => {
          const dados = {
            id: i.id,
            disponivel: i.disponivel,
            categoria: i.categoria,
            img: i.img,
            nome: i.nome,
            detalhe: i.detalhe,
            quantidade: 0,
            preco: i.preco,
            valorTotal: 0.0,
          };

          return dados;
        });

      // console.log(cardapio);
      setAdicional(cardapio);
      // setListCardapioAdicionais(lista);
    });

    return () => unsubscribe();
  }

  return (
    <s.Container>
      <s.Header background={produto.img}>
        <s.BackButton onClick={() => backScreen()}>
          <IoArrowBack
            size={40}
            color={colors.red}
            onClick={() => backScreen()}
          />
        </s.BackButton>
      </s.Header>
      <s.BoxItemHeader>
        <s.Title>{produto.nome}</s.Title>
        <s.Price>
          {produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </s.Price>
        <s.Description>{produto.detalhe}</s.Description>
      </s.BoxItemHeader>

      <s.Content>
        <s.BoxItem>
          <s.Title>Escolha o tipo de queijo:</s.Title>
        </s.BoxItem>

        {queijos.map((queijo) => (
          <s.RadioLabel key={queijo}>
            <s.RadioInput
              type="radio"
              name="queijo"
              value={queijo}
              checked={produto.tipoQueijo === queijo}
              onChange={(e) => {
                atualizarProduto("tipoQueijo", e.target.value);
              }}
            />
            {queijo}
          </s.RadioLabel>
        ))}
        <s.BoxItem>
          <s.Title>Adicionais</s.Title>
        </s.BoxItem>
        {adicionais
          .filter((burger) => burger.disponivel)
          .filter((burger) => burger.categoria === "Adicional")
          .map((item) => (
            <s.Option
              key={item.id}
              onClick={() => setSelectedOption(item)}
              selected={selectedOption?.id === item.id}
            >
              <s.OptionInfo>
                <s.OptionName>{item.nome}</s.OptionName>
                <s.OptionDescription>{item.detalhe}</s.OptionDescription>
                <s.OptionPrice>
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </s.OptionPrice>
                <s.OptionPrice></s.OptionPrice>
              </s.OptionInfo>
              <s.QuantityContainer>
                <s.QuantityButton onClick={() => haldleRemovedicionais(item)}>
                  <FaMinus size={25} color="RED" />
                </s.QuantityButton>
                <s.Quantity>{item.quantidade}</s.Quantity>

                <s.QuantityButton onClick={() => haldleAddAdicionais(item)}>
                  <FaPlus size={25} color={colors.green} />
                </s.QuantityButton>
              </s.QuantityContainer>
            </s.Option>
          ))}
        <s.BoxItem>
          <s.Title>Molho</s.Title>
        </s.BoxItem>
        {adicionais
          .filter((burger) => burger.disponivel)
          .filter((burger) => burger.categoria === "Molho")
          .map((item) => (
            <s.Option
              key={item.id}
              onClick={() => setSelectedOption(item)}
              selected={selectedOption?.id === item.id}
            >
              <s.OptionInfo>
                <s.OptionName>{item.nome}</s.OptionName>
                <s.OptionDescription>{item.detalhe}</s.OptionDescription>
                <s.OptionPrice>
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </s.OptionPrice>
                <s.OptionPrice></s.OptionPrice>
              </s.OptionInfo>
              <s.QuantityContainer>
                <s.QuantityButton onClick={() => haldleRemovedicionais(item)}>
                  <FaMinus size={25} color="RED" />
                </s.QuantityButton>
                <s.Quantity>{item.quantidade}</s.Quantity>

                <s.QuantityButton onClick={() => haldleAddAdicionais(item)}>
                  <FaPlus size={25} color={colors.green} />
                </s.QuantityButton>
              </s.QuantityContainer>
            </s.Option>
          ))}
        <s.BoxItem>
          <s.Title>Bebidas</s.Title>
        </s.BoxItem>
        {adicionais
          .filter((burger) => burger.disponivel)
          .filter((burger) => burger.categoria === "Bebida")
          .map((item) => (
            <s.Option
              key={item.id}
              onClick={() => setSelectedOption(item)}
              selected={selectedOption?.id === item.id}
            >
              <s.OptionInfo>
                <s.OptionName>{item.nome}</s.OptionName>
                <s.OptionDescription>{item.detalhe}</s.OptionDescription>
                <s.OptionPrice>
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </s.OptionPrice>
                <s.OptionPrice></s.OptionPrice>
              </s.OptionInfo>
              <s.QuantityContainer>
                <s.QuantityButton onClick={() => haldleRemovedicionais(item)}>
                  <FaMinus size={25} color="RED" />
                </s.QuantityButton>
                <s.Quantity>{item.quantidade}</s.Quantity>

                <s.QuantityButton onClick={() => haldleAddAdicionais(item)}>
                  <FaPlus size={25} color={colors.green} />
                </s.QuantityButton>
              </s.QuantityContainer>
            </s.Option>
          ))}
        <s.OptionDescription>Observações:</s.OptionDescription>
        <s.TextArea
          placeholder="Ex: Hamburguer bem passado..."
          value={produto.observacao}
          onChange={(e) => {
            atualizarProduto("observacao", e.target.value);
          }}
        />
        <s.AddButton
          onClick={() => {
            handleNext();
          }}
        >
          Avançar{" "}
          <span>
            {valorTotalItens.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </s.AddButton>
      </s.Content>
    </s.Container>
  );
}

export default Detalhe;
