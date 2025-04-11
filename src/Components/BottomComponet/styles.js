import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.button`
  background: ${(props) =>
    props.backgroudColor ? props.backgroudColor : colors.yello_primary};
  /* padding: 10px; */
  width: ${(props) => (props.width ? props.width : "50%")};
  height: ${(props) => (props.height ? props.height : "45px")};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) =>
    props.bordercolor ? props.bordercolor : colors.cinza};
  align-items: center;
  /* margin-left: 15px; */
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  :active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  :hover {
    opacity: 0.8;
  }

  /* z-index: 1; */
`;

export const Title = styled.text`
  color: ${(props) => (props.textColor ? props.textColor : colors.brue)};
  font-size: 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
`;
