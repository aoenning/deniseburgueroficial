import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import { colors } from "../../Styles";
import useProdutoStore from "../Store/useCartStore";
import BottomComponet from "../BottomComponet";
import Input from "../Input";
import { maskPhone } from "../Mask";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import {
  MdOutlineClose as IconClosed,
  RxDoubleArrowRight as ArrowRight,
} from "react-icons/md";

function Modal({ exibir, data, onClick, value, onChange }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const {
    setShow,
    atualizarCliente,
    cliente,
    limparCliente,
    message,
    setMessage,
    setOpenMessage,
    openMessage,
  } = useProdutoStore();
  function handleSetShow(value) {
    setShow(value);
  }

  function handleSetEndereco(value) {
    setShow(value);
  }

  function handleSetMaskPhone(campo, value) {
    const phone = maskPhone(value);
    atualizarCliente(campo, phone);
  }

  function handleCloseModal(value) {
    // limparCliente();
    handleSetShow(value);
    handleNext();
    // alert("🟡 Atenção!Preencha os dados.");
  }

  function handleClose() {
    setOpen(false);
    setMessage("");
  }

  function handleNext() {
    // alert("🟡 Atenção!Preencha os dados.");
    if (!cliente.nome) {
      setMessage("Preencha o nome");
      setOpen(true);
      return;
    }

    if (!cliente.telefone) {
      setMessage("Preencha o telefone");
      setOpen(true);
      return;
    }

    if (!cliente.rua) {
      setMessage("Preencha a rua");
      setOpen(true);
      return;
    }

    if (!cliente.numero) {
      setMessage("Preencha o numero");
      setOpen(true);
      return;
    }

    if (!cliente.bairro) {
      setMessage("Preencha o bairro");
      setOpen(true);
      return;
    }
    setShow("");
    navigate("/ResumoPedido");
  }

  return (
    <s.Container>
      <s.Modal>
        <s.Area
          justifyContent={"right"}
          backgroundColor={colors.white}
          marginTop={"0px"}
        >
          <BottomComponet
            width={"5.5%"}
            height={"21px"}
            text={"X"}
            disabled={""}
            backgroudColor={colors.brack}
            bordercolor={colors.brack}
            textColor={colors.white}
            onClick={() => handleCloseModal("")}
          >
            <IconClosed color={colors.white} />
          </BottomComponet>
        </s.Area>
        <s.Area>
          <s.Title>Preencha os dados do cliente</s.Title>
        </s.Area>
        <s.Box>
          <s.AreaInput width="100%">
            <s.TitleInput>Informe nome *</s.TitleInput>
            <Input
              width={"100%"}
              type={"text"}
              value={cliente.nome}
              onChange={(e) => {
                atualizarCliente("nome", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
            <s.TitleInput>Telefone *</s.TitleInput>
            <Input
              width={"70%"}
              type={"text"}
              value={cliente.telefone}
              onChange={(e) => {
                handleSetMaskPhone("telefone", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.Area>
            <s.Title>Preencha os dados da entrega</s.Title>
          </s.Area>
          <s.AreaInput width="100%">
            <s.TitleInput>Rua *</s.TitleInput>
            <Input
              type={"text"}
              value={cliente.rua}
              onChange={(e) => {
                atualizarCliente("rua", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
            <s.TitleInput>Numero *</s.TitleInput>
            <Input
              width={"40%"}
              type={"text"}
              value={cliente.numero}
              onChange={(e) => {
                atualizarCliente("numero", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
            <s.TitleInput>Ponto de referência</s.TitleInput>
            <Input
              width={"100%"}
              type={"text"}
              value={cliente.referencia}
              onChange={(e) => {
                atualizarCliente("referencia", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
            <s.TitleInput>Bairro *</s.TitleInput>
            <Input
              width={"100%"}
              type={"text"}
              value={cliente.bairro}
              onChange={(e) => {
                atualizarCliente("bairro", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
            <s.TitleInput>Cidade *</s.TitleInput>
            <Input
              width={"70%"}
              type={"text"}
              value={cliente.cidade}
              onChange={(e) => {
                atualizarCliente("cidade", e.target.value);
              }}
              backgroudColor={""}
            />
          </s.AreaInput>
          <s.AreaInput width="100%">
           <s.AreaContainer></s.AreaContainer>
          </s.AreaInput>
        </s.Box>

        <s.AreaBotton>
          <BottomComponet
            width={"100%"}
            height={"50px"}
            text={"Avançar"}
            disabled={""}
            backgroudColor={colors.brack}
            bordercolor={colors.brack}
            textColor={colors.white}
            onClick={() => handleNext()}
          >
            <IconClosed color={colors.white} />
          </BottomComponet>
        </s.AreaBotton>
        <Dialog
          open={open}
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby=""
        >
          <DialogTitle color="red">{"Atenção!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="">{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose}>Fechar</Button>
          </DialogActions>
        </Dialog>
      </s.Modal>
    </s.Container>
  );
}

export default Modal;
