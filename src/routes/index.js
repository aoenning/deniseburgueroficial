import React from "react";
import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./../pages/home";
import Detalhe from "./../pages/DetalheItem";
import Carrinho from "./../pages/Carrinho";
import ResumoPedido from "./../pages/ResumoPedido";
import Pedidos from "./../pages/Pedidos";

const Routes = () => {
  return (
    <Rotas>
      <Route path="/" element={<Home />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      {/* <Route path="/Historico" element={<Historico />} /> */}
      <Route path="/Detalhe" element={<Detalhe />} />
      <Route path="/ResumoPedido" element={<ResumoPedido />} />
      <Route path="/Pedidos" element={<Pedidos />} />
    </Rotas>
  );
};
export default Routes;
