import styled from "styled-components";
import { colors, fonts } from "../../Styles";

import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
// import img from "../../assets/denise_burguer.jpg";

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "80px")};
  background-color: ${colors.white};
  color: white;
  /* padding: 10px; */
  /* margin-bottom: 20px; */
  text-align: center;
  font-size: 1.5rem;
  /* position: fixed; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* top: 0px; */
  outline: none;
  /* z-index: 1000; */
  /* z-index: auto; */
  /* border-bottom: 1px solid ${colors.header}; */
`;

const BackButton = styled.button`
  background: none;
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

const BoxImage = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  /* border-radius: 50%; */
`;

const HeaderImg = styled.img`
  outline: none;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  /* border: 1px solid ${colors.green_agua}; */
`;

const Title = styled.h1`
  font-size: 25px;
  /* margin: 10px 0; */
  text-align: start;
`;
function backScreen() {
  window.history.back();
}

export default function Header({ title, height, img }) {
  return (
    <HeaderContainer height={height}>
      {title && (
        <BackButton onClick={() => backScreen()}>
          <IoArrowBack size={25} color={colors.cinza_forte} />
        </BackButton>
      )}
      <Title>{title}</Title>
      {img && (
        <BoxImage>
          <HeaderImg src={img} />
        </BoxImage>
      )}
    </HeaderContainer>
  );
}
