import styled from "styled-components";
import { colors, fonts } from "../../Styles";

// Styled Components
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  background-color: ${colors.brack};
`;

export const Header = styled.div`
  margin-top: -100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /* position: relative; */
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  /* top: 0; */
  /* position: fixed; */
`;

export const BoxItemHeader = styled.div`
  margin: 10px 0px 0px 0px;
  width: 97%;
  background-color: ${colors.pretoChumbo};

  border: 1px solid ${colors.cinza};
  border-radius: 10px;
  padding: 10px;
`;

export const BoxItem = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;
  background-color: ${colors.pretoChumbo};

  border: 1px solid ${colors.cinza};
  border-radius: 10px;
  padding: 10px;
`;

export const BackButton = styled.button`
  background: none;
  /* border: none; */
  /* font-size: 45px; */
  cursor: pointer;
  z-index: auto;
  /* margin-left: 10px; */
  border: 1px solid ${colors.cinza_forte};
  border-radius: 20px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 45px;
`;

export const ProductImage = styled.img`
  width: 90%;
  border-radius: 10px;
`;

export const Content = styled.div`
  margin-top: 5px;
  /* padding: 10px; */
  width: 97%;
  background-color: ${colors.brack};  
`;

export const Title = styled.h1`
  font-size: 20px;
  /* margin: 10px 0; */
  text-align: start;
  font-family: ${fonts.primary};
  color: ${colors.amareloQueijo};
`;

export const Description = styled.p`
  color: ${colors.white};
  /* margin: 10px 0; */
  text-align: start;
  font-size: 15px;
  font-family: ${fonts.primary};
  margin-top: 10px;
  /* font-weight: bold; */
`;

export const Price = styled.p`
  font-size: 20px;
  /* font-weight: bold; */
  /* margin: 10px 0; */
  text-align: start;
  font-family: ${fonts.primary};
  color: ${colors.laraja_forte};
`;

export const SectionTitle = styled.h3`
  margin: 20px 0 10px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.pretoChumbo};
  padding: 5px;
  /* border: 1px solid ${({ selected }) => (selected ? "#000" : "#fff")}; */
  /* border-bottom: 1px solid ${colors.cinza}; */
  border-radius: 10px;
  cursor: pointer;
  /* margin-bottom: 30px; */
  /* height: 60px; */
  /* margin-left: 10px; */
  /* margin-right: 10px; */
  margin-top: 10px;


`;

export const OptionInfo = styled.div`
  /* flex: 1; */
`;

export const OptionName = styled.p`
  text-align: start;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-size: 15px;
  font-weight: bold;
`;

export const OptionDescription = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: start;
  color: ${colors.brack};
  font-family: ${fonts.primary};
`;

export const OptionPrice = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: start;
  color: ${colors.vermelhoChurrasco};
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
  /* border: 1px solid ${colors.cinza_forte}; */
  width: 110px;
  height: 40px;
  /* border-radius: 15px; */
`;

export const QuantityButton = styled.button`
  display: flex;
  flex-direction: column;
  background: ${colors.pretoChumbo};
  align-items: center;
  justify-content: center;
  border: none;
  /* padding: 10px; */
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;

  /* border-top: 1px solid ${colors.brack}; */
  /* border-bottom: 1px solid ${colors.brack}; */
  /* border-radius: 15px; */
`;

export const Quantity = styled.span`
  font-size: 18px;
  margin: 0 15px;
  color: ${colors.white};
`;

export const AddButton = styled.button`
  width: 96%;
  background: ${colors.vermelhoChurrasco};
  color: white;
  font-size: 18px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 5px;
  /* margin-bottom: 5px; */
`;

export const TextArea = styled.textarea`
  width: 97%;
  height: 80px;
  /* margin-top: 5px; */
  padding: 5px;
  border: 1px solid ${colors.cinzaChumbo};
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  font-family: ${fonts.primary};
  margin-bottom: 65px;
  margin-top: 15px;
`;

export const RadioLabel = styled.label`
  margin: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-family: ${fonts.primary};
  background-color: ${colors.brack};
  color: ${colors.laraja_forte};
`;

export const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: #e07a5f; // cor do radio selecionado
`;
