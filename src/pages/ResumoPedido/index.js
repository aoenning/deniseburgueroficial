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
import ModalTroco from "../../Components/ModalTroco";
import RadioButton from "../../Components/RadioButton";
import { db } from "../../firebase"; // ou o caminho relativo correto
import { collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

function ResumoPedido() {
  const [listCardapioAdicionais, setListCardapioAdicionais] = useState([]);
  const [open, setOpen] = useState(false);

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
    setShow,
    show,
    setTipoEntrega,
    tipoEntrega,
    local,
    showModalTroco,
    setShowTroco,
    troco,
  } = useProdutoStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (pagamento === "dinheiro") {
      setShowTroco("true");
    }
  }, [pagamento]);

  const handleSelectedScreen = (e) => {
    navigate("/Carrinho");
  };

  const salvarCliente = async () => {
    try {
      await addDoc(collection(db, "clientes"), cliente);
      // console.log("Cliente salvo com sucesso!");
    } catch (error) {
      // console.error("Erro ao salvar cliente:", error);
    }
  };

  const salvarPedidos = async () => {
    const pedido = {
      cliente: cliente,
      itens: cart,
      status: "pendente",
      pagamento: pagamento,
      tipoEntrega: tipoEntrega,
      troco: troco,
      total: valorTotalPedido,
      data: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "pedidos"), pedido);
      // console.log("🙋 Pedido salvo com ID:", docRef.id);
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
      setOpen(true);
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

    // salvarCliente();
    salvarPedidos();
  };

  function handleClose() {
    setOpen(false);
    navigate("/Pedidos");
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
        <s.TitleHeader color={colors.white}>Resumo carrinho</s.TitleHeader>
        <s.BoxIcon
          onClick={() => {
            {
            }
          }}
        ></s.BoxIcon>
      </s.Header>
      {cliente.nome && (
        <s.Content backgroundColor={colors.brack} flexDirection={"column"}>
          <s.Title color={colors.amareloQueijo}>{cliente.nome}</s.Title>
          <s.Description>Telefone: {cliente.telefone}</s.Description>
        </s.Content>
      )}

      {show && (
        <Modal
          show={() => {}}
          data={""}
          onClick={(item) => {}}
          onChange={(txt) => {}}
        />
      )}

      {showModalTroco && (
        <ModalTroco
          show={() => {}}
          data={""}
          onClick={(item) => {}}
          onChange={(txt) => {}}
        />
      )}
      {/* <s.ListContainer> */}
      <RadioButton />
      <s.ContainerEndereco>
        <s.OptionEndereco selected={tipoEntrega === "retirada"}>
          <s.InputEndereco
            type="radio"
            name="entrega"
            value="retirada"
            checked={tipoEntrega === "retirada"}
            onChange={(e) => setTipoEntrega(e.target.value)}
          />
          <s.Content border={"none"}>
            <s.BoxTitle>
              <s.Area>
                <s.Title color={colors.amareloQueijo}>Retirar no local</s.Title>
              </s.Area>
              <s.Description>
                Rua: {local.rua}, {local.numero}, {local.bairro}
              </s.Description>
              <s.Description>Complemento: {local.complemento}</s.Description>
              <s.Description>Cidade: {cliente.cidade}</s.Description>
            </s.BoxTitle>
          </s.Content>
        </s.OptionEndereco>

        <s.OptionEndereco selected={tipoEntrega === "entrega"}>
          <s.InputEndereco
            type="radio"
            name="entrega"
            value="entrega"
            checked={tipoEntrega === "entrega"}
            onChange={(e) => setTipoEntrega(e.target.value)}
          />

          <s.Content border={"none"}>
            <s.BoxTitle>
              <s.Area>
                <s.Title color={colors.amareloQueijo}>Endereço para entrega</s.Title>
              </s.Area>
              <s.Description>
                Rua: {cliente.rua}, {cliente.numero}, {cliente.bairro}.
              </s.Description>
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
                  setShow("true");
                }}
              >
                Alterar{" "}
              </s.AddButton>
            </s.BoxButton>
          </s.Content>
        </s.OptionEndereco>
        <s.Divisão></s.Divisão>
      </s.ContainerEndereco>
      {/* </s.ListContainer> */}
      <Dialog open={open} keepMounted onClose={handleClose} aria-describedby="">
        <DialogTitle color="red">{"Parabéns!!"} 😄 </DialogTitle>
        <DialogContent>
          <DialogContentText id="">
            {"Pedido 🍔 realizado com sucesso!!"}🎉😄
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
      </Dialog>

      <s.Footer>
        <s.AddButton
          disabled={pagamento ? false : true}
          justifyContent={"space-between"}
          borderColor={""}
          background={pagamento ? colors.vermelhoChurrasco : colors.cinza}
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
