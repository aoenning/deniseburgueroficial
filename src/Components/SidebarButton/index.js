import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaList, FaShoppingCart, FaStore } from "react-icons/fa";
import { colors, fonts } from "../../Styles";
import useProdutoStore from "../../Components/Store/useCartStore";

// Estilização da barra de navegação inferior
const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: ${colors.brack};
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 5px 0;
  z-index: 1000;
  /* background: #fff; */
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.white};
  font-size: 13px;
  padding: 10px;
  font-family: ${fonts.segudary};
  /* font-size: 5px; */
  text-align: right;
  &.active {
    color: ${colors.laraja};
    font-weight: bold;
  }
`;

const Box = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 55px;
`;

const Title = styled.p`
  font-size: 14px;
  text-align: right;
  margin-bottom: -5px;
  margin-right: -25px;
  z-index: 1000;
  color: ${colors.white};
  /* background: ${colors.white}; */
  border-radius: 50%;
  /* height: 15px; */
  /* width: 30px; */
  /* position: fixed; */
  /* bottom: 0.5; */
`;

export default function Footer() {
  const { cart } = useProdutoStore();

  return (
    // <FooterContainer>
    <NavBar>
      <NavItem to="/">
        <FaHome size={25} />
        Inicio
      </NavItem>
      <NavItem to="/Pedidos">
        <FaList size={25} />
        Pedidos
      </NavItem>
      <NavItem to="/Promos">
        <FaStore size={25} />
        Promos
      </NavItem>
      <NavItem to="/Carrinho">
        {/* <Box> */}
        <Title>{cart.length}</Title>
        <FaShoppingCart size={25}></FaShoppingCart>
        {/* </Box> */}
        Carrinho
      </NavItem>
    </NavBar>
    // </FooterContainer>
  );
}
