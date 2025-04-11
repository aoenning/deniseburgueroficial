import styled from "styled-components";
import { colors, fonts } from "../../Styles";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(77, 77, 77, 0.5);
  opacity: 0.97;
  display: flex;
  justify-content: center;
  align-items: end;
  animation: fadeInDown 0.4s;
  z-index: 2;
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const Modal = styled.div`
  padding: 15px;
  width: 100%;
  /* height: 85%; */
  /* min-width: 400px; */
  /* min-height: 400px; */
  background: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
`;

export const Area = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "15px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.cinza};
  border-radius: 10px;
`;

export const AreaBotton = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  /* margin-top: 15px; */
  justify-content: end;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const AreaListItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: ${colors.white};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${colors.yello_primary};
  border-radius: 10px;
`;

export const AreaItem = styled.div`
  width: 100%;
  padding: 3px;
  display: flex;
  flex-direction: row;

  cursor: pointer;
  :hover {
    background-color: ${colors.cinza};
    opacity: 0.9;
  }
`;

export const BoxItem = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${colors.cinza};
`;

export const BoxMaterial = styled.div`
  align-items: center;
  width: 45%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-color: ${colors.cinza};
`;

export const BtnClose = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 8px;
  right: 8px;
  border: 1px solid;
  background-color: ${colors.green_agua};
  border-radius: 20px;
  border-color: ${colors.yello_primary};
  justify-content: center;
  align-items: center;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

  :hover {
    background-color: ${colors.white};
    border-radius: 20px;
    border-color: ${colors.yello_primary};
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 93%;
  /* max-width: 98%; */
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 50px;
  flex-direction: row;
  margin: 15px 0px 0px 5px;
  padding-left: 15px;
  /* padding-right: 15px; */
  border: 1px solid;
  border-color: ${colors.yello_primary};
  border-radius: 10px;
  background-color: ${colors.white};

  /* transition: all 0.5s; */

  &::placeholder {
    color: #dadada;
  }

  :hover {
    border: 2px solid;
    border-color: ${colors.yello_primary};
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  color: ${colors.yello_primary} rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
  background-color: ${colors.white};
`;

export const Title = styled.text`
  margin: 5px 0px 0px 15px;
  color: ${colors.brack};
  font-size: 17px;
  font-weight: bold;
  /* opacity: 0.8; */
  font-family: ${fonts.primary};
`;

export const TitleItem = styled.text`
  margin: 5px 0px 0px 15px;
  color: ${colors.green_claro};
  font-size: 12px;
  font-weight: bold;
  opacity: 0.8;
  font-family: "Roboto";
`;

export const TitleInput = styled.text`
  color: ${colors.cinza_forte};
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
  opacity: 0.8;
  font-family: ${fonts.primary};
`;
export const AreaInput = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  /* margin: 30px 0px 0px 10px; */
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
`;
