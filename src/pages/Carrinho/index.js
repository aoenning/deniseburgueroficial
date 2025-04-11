import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Components/CustomCardDetails";
import { burgers, bebidas } from "../../Components/Cardapio";
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
import CartCarrinho from "../../Components/CardCarrinho";
import CardCarrinho from "../../Components/CardCarrinho";
import { Minus, Plus, Trash2 } from "lucide-react";
import Modal from "../../Components/Modal";

function Carrinho() {
  const [listCardapioAdicionais, setListCardapioAdicionais] = useState([]);
  const {
    clearAdicionais,
    cart,
    valorTotalPedido,
    clearCart,
    setShow,
    show,
    cliente,
  } = useProdutoStore();
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleSelectedScreen = (e) => {
    clearAdicionais();
    navigate("/");
  };

  function handleSetShow(value) {
    setShow(value);
  }

  function handleNext() {
    if (cliente.nome && cliente.telefone) {
      setShow("");
      navigate("/ResumoPedido");
    } else {
      setShow("X");
    }
  }

  return (
    <s.Container>
      <s.Header>
        <s.BoxIcon
          onClick={() => {
            handleSelectedScreen();
          }}
        >
          <IoIosArrowBack color={colors.white} size={30} />
        </s.BoxIcon>
        <s.Title>Carrinho</s.Title>
        <s.BoxIcon
          onClick={() => {
            clearCart();
          }}
        >
          <Trash2 color={colors.white} size={20} />
        </s.BoxIcon>
      </s.Header>

      <s.ListContainer>
        {cart.map((item) => (
          <CardCarrinho produto={item} />
        ))}
      </s.ListContainer>
      <s.AddButton
        marginButton={"25px"}
        justifyContent={"center"}
        borderColor={colors.white}
        background={colors.white}
        color={colors.laraja_forte}
        onClick={() => {
          handleSelectedScreen();
        }}
      >
        Adicionar mais itens
      </s.AddButton>
      {show && (
        <Modal
          show={() => {}}
          data={""}
          onClick={(item) => {}}
          onChange={(txt) => {}}
        />
      )}
      <s.Footer>
        <s.AddButton
          disabled={cart.length ? false : true}
          justifyContent={"space-between"}
          borderColor={""}
          background={cart.length ? colors.brack : colors.cinza}
          color={""}
          onClick={(item) => {
            handleNext();
          }}
        >
          Avançar{" "}
          <span>
            {valorTotalPedido.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </s.AddButton>
      </s.Footer>
    </s.Container>
  );
}

export default Carrinho;
