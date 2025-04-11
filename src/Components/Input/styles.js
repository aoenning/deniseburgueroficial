import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.backgroudColor ? props.backgroudColor : colors.white};
  width: ${(props) => (props.width ? props.width : "100%")};
  /* max-width: 98%; */
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 40px;
  flex-direction: row;
  margin: 5px 5px 5px 5px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid;
  border-color: ${colors.cinza_forte};
  border-radius: 10px;
  /* transition: all 0.5s; */

  &::placeholder {
    color: #dadada;
  }

  :hover {
    border: 2px solid;
    border-color: ${colors.white};
  }
`;

export const Input = styled.input`
  font-size: 15px;
  /* line-height: 24px; */
  width: 90%;
  color: ${colors.yello_primary} rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) =>
    props.backgroudColor ? props.backgroudColor : colors.white};
`;

export const Title = styled.text`
  color: ${colors.cinza_forte};
  font-size: 10px;
  margin-left: 5px;
  font-weight: bold;
  opacity: 0.8;
`;
