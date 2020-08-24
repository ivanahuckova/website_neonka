import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";

//Main component
export default class PodporteNas extends React.Component {
  render() {
    return (
      <StyledMidBanner id="podporte">
        <StyledLinkDiv />
        <h1>Budeme vďačné za vašu pomoc!</h1>
        <div>Číslo účtu: SK 96 1100 0000 0029 4507 2424</div>
        <div>IČO: 52301826</div>
      </StyledMidBanner>
    );
  }
}

const StyledMidBanner = styled.div`
  margin: 5vh 0 6vh 0;
  padding: 10vh 15vw;
  position: relative;
  background-color: ${colors.pinkColor};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1500px) {
    padding: 10vh 10vw;
  }
  h1 {
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  div {
    font-size: ${fonts.textScreen};
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      ont-size: ${fonts.textMobile};
    }
  }
`;

const StyledLinkDiv = styled.div`
  position: absolute;
  margin-top: -150px;
  top: 0;
`;
