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
  const { open, setOpen } = useState(true);

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
      <s.Title>Cardápio Denise Burguer</s.Title>
      {open && (
        <s.BoxList>
          {listCardapioBurgers
            .filter((burger) => burger.disponivel)
            .filter((burger) => burger.categoria === "Tradicional")
            .map((burger) => (
              <CustomCard key={burger.id} burger={burger} />
            ))}
        </s.BoxList>
      )}

      {!open && (
        <s.Card>
          <s.TitleCard>Estamos fechados 😔</s.TitleCard>
          <s.MessageCard>
            Voltamos no <strong>sábado, 19/04/2025</strong> às{" "}
            <strong>19:00</strong>!<br />
            Agradecemos a sua compreensão ❤️
          </s.MessageCard>
        </s.Card>
      )}

      <s.MainContainer></s.MainContainer>
      <Footer />
    </s.Container>
  );
}

export default Home;
