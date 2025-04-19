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
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import * as s from "./styles";

function Home() {
  const [listCardapioBurgers, setListCardapioBurgers] = useState([]);
  const [listCardapioBebidas, setListCardapioBebidas] = useState([]);
  const { SetDadosLocalStore, DadoslocalStorage } = useProdutoStore();
  const { open, setOpen } = useState("");
  // const [statusCaixa, setStatusCaixa] = useState(null);
  const [statusCaixa, setStatusCaixa] = useState(null); // null: ainda carregando
  const [loading, setLoading] = useState(true);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const timestampHoje = Timestamp.fromDate(hoje);

  // useEffect(() => {
  //   const q = query(
  //     collection(db, "caixa"),
  //     where("data", ">=", timestampHoje)
  //   );
  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const dataHoje = snapshot.docs.find(
  //       (doc) => doc.data().status !== "fechado"
  //     );
  //     setStatusCaixa(dataHoje ? { id: dataHoje.id, ...dataHoje.data() } : null);
  //   });
  //   return () => unsub();
  // }, []);

  useEffect(() => {
    const q = query(
      collection(db, "caixa"),
      where("data", ">=", timestampHoje)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const dataHoje = snapshot.docs.find(
        (doc) => doc.data().status !== "fechado"
      );

      setStatusCaixa(dataHoje ? { id: dataHoje.id, ...dataHoje.data() } : null);
      setLoading(false); // Agora sabemos o status
    });

    return () => unsub();
  }, []);

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
      {loading ? (
        <s.LoadingCard>Carregando...</s.LoadingCard>
      ) : statusCaixa ? (
        <s.BoxList>
          {listCardapioBurgers
            .filter((burger) => burger.disponivel)
            .filter((burger) => burger.categoria === "Tradicional")
            .map((burger) => (
              <CustomCard key={burger.id} burger={burger} />
            ))}
        </s.BoxList>
      ) : (
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
