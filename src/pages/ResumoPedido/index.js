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
import RadioButton from "../../Components/RadioButton";
import { db } from "../../firebase"; // ou o caminho relativo correto
import { collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

function ResumoPedido() {
  const [listCardapioAdicionais, setListCardapioAdicionais] = useState([]);
  const {
    cliente,
    tipopagamento,
    pagamento,
    SetPagamento,
    valorTotalPedido,
    cart,
    limparCliente,
    limparProduto,
    clearAdicionais,
    clearCart,
    pedido,
    SetDadosPedido,
    setStatus,
  } = useProdutoStore();
  const navigate = useNavigate();

  const handleSelectedScreen = (e) => {
    navigate("/Carrinho");
  };

  const salvarCliente = async () => {
    try {
      await addDoc(collection(db, "clientes"), cliente);
      console.log("Cliente salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  const salvarPedidos = async () => {
    const pedido = {
      cliente: cliente,
      itens: cart,
      status: "pendente",
      pagamento: pagamento,
      total: valorTotalPedido,
      data: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "pedidos"), pedido);
      console.log("🙋 Pedido salvo com ID:", docRef.id);
      localStorage.setItem("nome", cliente.nome);
      localStorage.setItem("telefone", cliente.telefone);
      localStorage.setItem("id_pedido", docRef.id);
      console.error("Id:", docRef.id);
      // setStatus("Pendente");

      // SetDadosPedido(pedido);
      limparCliente();
      limparProduto();
      clearAdicionais();
      clearCart();
      navigate("/Pedidos");
    } catch (e) {
      console.error("Erro ao salvar pedido:", e);
    }
  };

  const handleFinalizarPedido = (e) => {
    // const email = "ongtecnologiaoficial@gmail.com"; // conta fixa
    // const senha = "@1020Vida";

    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, senha)
    //   .then((userCredential) => {
    //     console.log("Autenticado com sucesso");
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao autenticar:", error);
    //   });

    salvarCliente();
    salvarPedidos();
  };

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
        <s.Title color={colors.white}>Resumo carrinho</s.Title>
        <s.BoxIcon
          onClick={() => {
            {
            }
          }}
        ></s.BoxIcon>
      </s.Header>
      {cliente.nome && (
        <s.Content flexDirection={"column"}>
          <s.Title color={colors.brack}>{cliente.nome}</s.Title>
          <s.Description>Telefone: {cliente.telefone}</s.Description>
        </s.Content>
      )}
      {cliente.nome && (
        <s.Content border={"none"}>
          <s.BoxTitle>
            <s.Area>
              <s.Title color={colors.brack}>Endereço para entrega</s.Title>
            </s.Area>
            <s.Description>Rua: {cliente.rua}</s.Description>
            <s.Description>Numero: {cliente.numero}</s.Description>
            <s.Description>Bairro: {cliente.bairro}</s.Description>
            <s.Description>Complemento: {cliente.complemento}</s.Description>
            <s.Description>Cidade: {cliente.cidade}</s.Description>
          </s.BoxTitle>
          <s.BoxButton>
            <s.AddButton
              width={"75px"}
              height={"30px"}
              // disabled={cart.length ? false : true}
              justifyContent={"center"}
              borderColor={""}
              background={colors.cinza_forte}
              color={colors.white}
              onClick={() => {
                {
                }
              }}
            >
              Alterar{" "}
              {/* <span>
              {valorTotalPedido.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span> */}
            </s.AddButton>
          </s.BoxButton>
        </s.Content>
      )}
      <RadioButton />
      <s.Footer>
        <s.AddButton
          disabled={pagamento ? false : true}
          justifyContent={"space-between"}
          borderColor={""}
          background={pagamento ? colors.brack : colors.cinza}
          color={""}
          onClick={(item) => {
            handleFinalizarPedido();
          }}
        >
          {pagamento ? "Finalizar pedido" : "Selecione pagamento"}
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

export default ResumoPedido;
