import React, { useEffect } from "react";
import { colors } from "./Styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyled from "./Styles/GlobalStyled";
import Rotas from "./routes";
import { loginUnico } from "./auth";

function App() {
  useEffect(() => {
    loginUnico();
  }, []);
  return (
    <Router>
      <GlobalStyled />
      <Rotas />
    </Router>
  );
}

export default App;

export const Container = styled.section`
  display: flex;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};

  main {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
`;

export const Area = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
`;
