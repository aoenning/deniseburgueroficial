import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Styled Components
export const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100vh;
  padding: 5px;
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* display: flex; */
  /* padding-top: 30px; */
  outline: none;
  /* padding: 10px; */
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
  background-color: #fff;
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
  /* margin-top: 50px; */
  padding: 10px;
  width: 100%;
  overflow: "auto";
  outline: none;
`;

export const Title = styled.h1`
  font-size: 20px;
  /* margin: 10px 0; */
  text-align: start;
  color: ${colors.white};
  font-family: ${fonts.primary};
`;

export const Description = styled.p`
  color: #666;
  /* margin: 10px 0; */
  text-align: start;
  font-size: 15px;
  /* font-weight: bold; */
`;

export const Price = styled.p`
  font-size: 20px;
  /* font-weight: bold; */
  /* margin: 10px 0; */
  text-align: start;
`;

export const SectionTitle = styled.h3`
  margin: 20px 0 10px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  /* padding: 10px; */
  align-items: center;
  /* border: 1px solid ${({ selected }) => (selected ? "#000" : "#fff")}; */
  border-bottom: 1px solid ${colors.cinza};
  /* border-radius: 10px; */
  cursor: pointer;
  margin-bottom: 30px;
  height: 60px;
  margin-left: 15px;
`;

export const OptionInfo = styled.div`
  /* flex: 1; */
`;

export const OptionName = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: start;
  color: #666;
`;

export const OptionDescription = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: start;
  color: #666;
`;

export const OptionPrice = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: start;
  color: #666;
`;

export const OptionImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px solid ${colors.cinza_forte};
  width: 110px;
  height: 30px;
  border-radius: 15px;
`;

export const QuantityButton = styled.button`
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  justify-content: center;
  border: none;
  /* padding: 10px; */
  font-size: 20px;
  cursor: pointer;
  /* width: 40px; */
  /* height: 40px; */
  /* border-top: 1px solid ${colors.brack}; */
  /* border-bottom: 1px solid ${colors.brack}; */
  /* border-radius: 15px; */
`;

export const Quantity = styled.span`
  font-size: 18px;
  margin: 0 15px;
`;

export const AddButton = styled.button`
  width: 100%;
  background: ${(props) =>
    props.background ? props.background : colors.brack};
  color: ${(props) => (props.color ? props.color : colors.white)};
  /* border: 1px solid ${colors.brack}; */
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
`;

export const Footer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 0px;
`;

export const Area = styled.div`
  width: 100%;
  /* margin-top: 20px; */
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
