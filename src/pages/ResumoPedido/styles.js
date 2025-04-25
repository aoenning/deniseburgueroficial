import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Styled Components
export const Container = styled.div`
  font-family: ${fonts.primary};
  width: 100%;
  height: 100vh;
  padding: 5px;
  outline: none;
  background-color: ${colors.brack};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  background: ${colors.brack};
`;

export const BoxItem = styled.div`
  margin: 5px 5px 0px 20px;
  width: 100%;
`;

export const BoxIcon = styled.div`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: auto;
  margin-left: 10px;
  /* border: 1px solid ${colors.white}; */
  border-radius: 15px;
  background-color: ${colors.brack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
`;

export const BackButton = styled.button`
  background: none;
  /* border: none; */
  font-size: 20px;
  cursor: pointer;
  z-index: auto;
  margin-left: 10px;
  border: 1px solid ${colors.cinza_forte};
  border-radius: 15px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
`;

export const ProductImage = styled.img`
  width: 90%;
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  margin: 10px 0 0 5px;
  /* border-radius: 15px; */
  /* box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  font-family: ${fonts.primary};
  /* border-bottom: ${(props) => (props.border ? props.border : "1px")} solid
    ${colors.header}; */
  /* border-bottom: 1px solid ${colors.header}; */
  /* padding: 10px; */
  justify-content: start;
  align-items: start;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : colors.pretoChumbo)}
`;

export const Area = styled.div`
  /* width: 98%; */
  /* margin: 5px 0 0 5px; */
  /* background-color: ${colors.white}; */
  /* padding: 5px; */
`;

export const BoxTitle = styled.div`
  /* width: 70%; */
  /* margin: 5px 0 0 5px; */
  /* background-color: ${colors.cinza_leve}; */
  /* padding: 5px; */
`;

export const BoxButton = styled.div`
  /* width: 30%; */
  /* margin: 5px 0 0 5px; */
  /* background-color: ${colors.cinza_leve}; */
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1rem;
  /* margin-bottom: 16px; */
  font-family: ${fonts.primary};
  color: ${(props) => (props.color ? props.color : "auto")};
  font-weight: bold;
`;

export const TitleHeader = styled.p`
  font-size: 1.25rem;
  /* margin-bottom: 16px; */
  font-family: ${fonts.primary};
  color: ${(props) => (props.color ? props.color : "auto")};
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  /* margin-bottom: 16px; */
  font-family: ${fonts.primary};
  color: ${colors.white};
`;

export const Price = styled.p`
  font-size: 20px;
  text-align: start;
`;

export const SectionTitle = styled.h3`
  margin: 20px 0 10px;
`;

export const AddButton = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) =>
    props.background ? props.background : colors.vermelhoChurrasco};
  color: ${(props) => (props.color ? props.color : colors.white)};
  border: 1px solid ${colors.brack};
  font-size: 18px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  align-items: center;
  margin-top: 5px;
  margin-bottom: ${(props) =>
    props.marginButton ? props.marginButton : "5px"};
  font-family: ${fonts.primary};
`;

export const Footer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  /* margin-bottom: 0px; */
`;

export const ListContainer = styled.div`
  width: 100%;
  max-height: 79%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* justify-content: center; */
  outline: none;
  overflow: auto;
  /* margin-top: 10px; */
  padding: 10px;
  /* margin-bottom: 200px; */
  /* background-color: ${colors.green_claro}; */
`;

export const RadioLabel = styled.label`
  margin: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-family: ${fonts.primary};
  /* background-color: ${colors.pretoChumbo} */
`;

export const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: #e07a5f; // cor do radio selecionado
  /* background-color: ${colors.pretoChumbo} */
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  margin-top: 10px;
  background-color: ${colors.brack};
  /* margin-bottom: 45px; */
`;

export const OptionEndereco = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1rem;
  border: 2px solid ${({ selected }) => (selected ? colors.cinza : colors.pretoChumbo)};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? colors.pretoChumbo : colors.pretoChumbo};
  transition: all 0.2s ease;
  background-color: ${colors.pretoChumbo};
  margin-top: 15px;
`;

export const InputEndereco = styled.input`
  accent-color: #222;
`;

export const AreaPagamento = styled.input`
  margin-bottom: 25px;
`;

export const Divisão = styled.div`
  margin-bottom: 60px;
`;
