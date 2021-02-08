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
        <h1>Budeme vďačné za každú vašu pomoc</h1>
        <h2>OZ Neónka</h2>
        <div>Číslo účtu: SK 96 1100 0000 0029 4507 2424</div>
        <div>IČO: 52301826</div>
        <h2>Aktívne zbierky</h2>
        <div>
          V súčasnosti prebieha naša zbierka na kúpu hodinkového prístroja na
          rýchlu diagnostiku cystickej fibrózy. Číslo transparentného účtu
          zbierky je <br />
          <a href="https://www.transparentneucty.sk/#/ucet/SK9709000000005171611554">
            SK 97 0900 0000 0051 7161 1554
          </a>
          . Viac informácii o zbierke nájdete na podstránke{" "}
          <a href="/cysticka-fibroza">cystickej fibrózy</a>.
        </div>
      </StyledMidBanner>
    );
  }
}

const StyledMidBanner = styled.div`
  margin: 0 0 6vh 0;
  padding: 10vh 15vw;
  position: relative;
  background-color: ${colors.yellowColor};
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
  h2 {
    color: ${colors.pinkColor};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
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
  a {
    text-decoration: underline !important;
  }
`;

const StyledLinkDiv = styled.div`
  position: absolute;
  margin-top: -150px;
  top: 0;
`;
