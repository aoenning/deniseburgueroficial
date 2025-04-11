import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomCard from "../../Components/CustomCard";
import CustomCardBebidas from "../../Components/CustomCardBebidas";
import { burgers, bebidas } from "../../Components/Cardapio";
import Header from "../../Components/CustomHeader";
import Footer from "../../Components/SidebarButton";
import img from "../../assets/denise_burguer.jpg";
import useProdutoStore from "../../Components/Store/useCartStore";
import * as s from "./styles";

function Pedidos() {
  const [listCardapioBurgers, setListCardapioBurgers] = useState([]);
  const [listCardapioBebidas, setListCardapioBebidas] = useState([]);
  const { SetDadosLocalStore, DadoslocalStorage } = useProdutoStore();

  useEffect(() => {
    let cardapioBurgers = burgers();
    setListCardapioBurgers(cardapioBurgers);

    let cardapioBebidas = bebidas();
    setListCardapioBebidas(cardapioBebidas);

    const nomeUser = localStorage.getItem("nome");
    const telefoneUser = localStorage.getItem("telefone");

    const dados = {
      nome: nomeUser,
      telefone: telefoneUser,
    };

    if (dados) {
      SetDadosLocalStore(dados);
    }
  }, []);
  return (
    <s.Container>
      {/* <Header height={"150px"} />
      <s.Title>Cardápio Denise Burger</s.Title>
      {listCardapioBurgers.map((burger) => (
        <CustomCard burger={burger} />
      ))}
      <h1>Bebidas</h1>
      {listCardapioBebidas.map((bebidas) => (
        <CustomCardBebidas item={bebidas} />
      ))} */}
      <s.MainContainer></s.MainContainer>
      <Footer />
    </s.Container>
  );
}

export default Pedidos;
