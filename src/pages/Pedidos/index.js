import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomCard from "../../Components/CustomCard";
import CustomCardBebidas from "../../Components/CustomCardBebidas";
import { burgers, bebidas } from "../../Components/Cardapio";
import Header from "../../Components/CustomHeader";
import Footer from "../../Components/SidebarButton";
import img from "../../assets/denise_burguer.jpg";
import useProdutoStore from "../../Components/Store/useCartStore";
import { Clock, ChefHat, Truck, CheckCircle, BlocksIcon } from "lucide-react";
import * as s from "./styles";
import { colors } from "../../Styles";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FaSync } from "react-icons/fa";
import { loginUnico } from "./../../auth";
import moment from "moment/moment";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Pedidos() {
  const {
    SetDadosLocalStore,
    DadoslocalStorage,
    cliente,
    pedido,
    status,
    SetDadosPedido,
    setStatus,
    tipoEntrega,
  } = useProdutoStore();

  const [dadosPedido, setDadosPedido] = useState([]);

  useEffect(() => {
    // const newPedido = pedido;
    buscarPedidosPendentesPorTelefone();
  }, [status]);

  useEffect(() => {
    const logado = loginUnico();
    if (logado) {
      // alert("usuario logado");
    }
  }, []);

  const steps = [
    { label: "pendente", icon: <Clock size={24} /> },
    { label: "preparando", icon: <ChefHat size={24} color="green" /> },
    { label: "rota", icon: <Truck size={24} /> },
    { label: "finalizado", icon: <CheckCircle size={24} /> },
    { label: "cancelado", icon: <BlocksIcon size={24} /> },
  ];

  const currentStepIndex = steps.findIndex((step) => step.label === status);

  const buscarPedidosPendentesPorTelefone = async () => {
    const idPedido = localStorage.getItem("id_pedido");

    try {
      const pedidoRef = doc(db, "pedidos", idPedido);
      const pedidoSnap = await getDoc(pedidoRef);

      if (pedidoSnap.exists()) {
        const p = pedidoSnap.data();

        const dados = {
          cliente: p.cliente,
          itens: p.itens,
          id: pedidoSnap.id,
          status: p.status,
          pagamento: p.pagamento,
          total: p.total,
          data: moment(p.data).format("DD/MM/YYYY"),
        };

        SetDadosPedido(dados);
        setStatus(p.status); // ou dados.status
      } else {
        // console.log("Pedido não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar pedido por ID:", error);
    }
  };

  return (
    <s.Container>
      <s.Header>
        <s.Title color={colors.white}>Pedido</s.Title>
      </s.Header>

      {pedido.cliente.nome && (
        <s.PedidoInfo>
          <s.Title>Acompanhe seu pedido!!!</s.Title>
          <s.InfoRow>
            <strong>Cliente:</strong> {pedido.cliente.nome}
          </s.InfoRow>
          <s.InfoRow>
            <strong>Telefone:</strong> {pedido.cliente.telefone}
          </s.InfoRow>
          <s.InfoRow>{/* <strong>Itens:</strong> */}</s.InfoRow>
          <s.BoxItem>
            <ul>
              {pedido.itens?.map((item, index) => (
                <s.BoxLi key={index}>
                  {item.nome}
                  {item.adicionais && item.adicionais.length > 0 && (
                    <ul>
                      {item.adicionais
                        .filter((i) => i.quantidade > 0)
                        .map((i, index) => (
                          <div>
                            <s.BoxLiAdicional key={index}>
                              {i.quantidade} {i.nome} (R$ {i.preco.toFixed(2)})
                            </s.BoxLiAdicional>
                          </div>
                        ))}
                    </ul>
                  )}
                </s.BoxLi>
              ))}
            </ul>
          </s.BoxItem>
          <s.InfoRow>
            <strong>Total: </strong>
            {pedido.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </s.InfoRow>
          <s.InfoRow>
            <strong>Data:</strong> {pedido.data}
          </s.InfoRow>
          <s.InfoRow>
            <strong>Status atual:</strong> {status}
          </s.InfoRow>
        </s.PedidoInfo>
      )}
      {/* {pedido.cliente.nome && ( */}
      <s.Steps>
        {steps.map((step, index) => (
          <s.Step key={index}>
            <s.IconWrapper active={index <= currentStepIndex}>
              {step.icon}
            </s.IconWrapper>
            <s.Label active={index <= currentStepIndex}>{step.label}</s.Label>
          </s.Step>
        ))}
      </s.Steps>
      <s.Steps></s.Steps>
      {/* <Dialog open={true} keepMounted onClose={handleClose} aria-describedby="">
        <DialogTitle color="red">{"Informação!!"} </DialogTitle>
        <DialogContent>
          <DialogContentText id="">
            {"No momento estamos fechado!!"}
          </DialogContentText>
          <DialogContentText id="">
            {"Denise Burguer agradece pela preferência!! "}
          </DialogContentText>
          <DialogContentText id="">
            {"Acompanhe seu pedido na tela de pedidos."} 🛵💨
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog> */}

      <Footer />
    </s.Container>
  );
}

export default Pedidos;
