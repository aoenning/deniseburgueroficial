import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomCard from "../../Components/CustomCard";
import CustomCardBebidas from "../../Components/CustomCardBebidas";
import { burgers, bebidas } from "../../Components/Cardapio";
import Header from "../../Components/CustomHeader";
import Footer from "../../Components/SidebarButton";
import img from "../../assets/denise_burguer.jpg";
import useProdutoStore from "../../Components/Store/useCartStore";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import * as s from "./styles";

function Home() {
  const [listCardapioBurgers, setListCardapioBurgers] = useState([]);
  const [listCardapioBebidas, setListCardapioBebidas] = useState([]);
  const { SetDadosLocalStore, DadoslocalStorage } = useProdutoStore();

  useEffect(() => {
    getProdutos();
    // setListCardapioBurgers(cardapioBurgers);

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
  useEffect(() => {}, []);

  function getProdutos() {
    const q = query(collection(db, "produtos"), orderBy("preco"));

    // const unsubscribe = onSnapshot(collection(db, "produtos"), (snapshot) => {
    //   const lista = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setListCardapioBurgers(lista);
    // });

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListCardapioBurgers(lista);
    });

    return () => unsubscribe();
  }

  return (
    <s.Container>
      <Header height={"150px"} img={img} />
      {/* <s.Area> */}
      <s.Title>Cardápio Denise Burger</s.Title>
      {/* </s.Area> */}
      <s.BoxList>
        {listCardapioBurgers
          .filter((burger) => burger.disponivel)
          .filter((burger) => burger.categoria === "Tradicional")
          .map((burger) => (
            <CustomCard key={burger.id} burger={burger} />
          ))}
      </s.BoxList>
      {/* <h1>Bebidas</h1>
      {listCardapioBebidas.map((bebidas) => (
        <CustomCardBebidas item={bebidas} />
      ))} */}
      <s.MainContainer></s.MainContainer>
      <Footer />
    </s.Container>
  );
}

export default Home;
