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
import RadioButtonTroco from "../RadioButtonTroco";

import {
  MdOutlineClose as IconClosed,
  RxDoubleArrowRight as ArrowRight,
} from "react-icons/md";

function ModalTroco({ exibir, data, onClick, value, onChange }) {
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
    showModalTroco,
    setShowTroco,
    atualizaTroco,
    troco,
  } = useProdutoStore();
  function handleSetShow(value) {
    setShowTroco(value);
  }

  function handleSetEndereco(value) {
    setShow(value);
  }

  function handleSetMaskPhone(campo, value) {
    const phone = maskPhone(value);
    atualizarCliente(campo, phone);
  }

  function handleCloseModal(value) {
    handleSetShow(value);
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
          <s.Title>Precisa de troco?</s.Title>
        </s.Area>
        <RadioButtonTroco />
        <s.Box>
          {troco.status === "sim" && (
            <s.AreaInput width="100%">
              <s.TitleInput>Valor *</s.TitleInput>
              <Input
                width={"40%"}
                type={"text"}
                value={troco.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                onChange={(e) => {
                  atualizaTroco("valor", e.target.value);
                }}
                backgroudColor={""}
              />
            </s.AreaInput>
          )}
        </s.Box>
        <s.AreaBotton>
          <BottomComponet
            width={"90%"}
            height={"50px"}
            text={"Salvar"}
            disabled={""}
            backgroudColor={colors.brack}
            bordercolor={colors.brack}
            textColor={colors.white}
            onClick={() => handleCloseModal("")}
          >
            <IconClosed color={colors.white} />
          </BottomComponet>
        </s.AreaBotton>
      </s.Modal>
    </s.Container>
  );
}

export default ModalTroco;
