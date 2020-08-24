import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
import mikBeh from "../../assets/mik_beh.jpg";

//Main component
export default class MikBeh extends React.Component {
  render() {
    return (
      <StyledMidBanner id="novinky">
        <h1>„Dýchaj z hlboka!“ - Charitatívny Mikulášsky beh</h1>
        <div>
          Občianske združenie Crazy WoMen Active Planet v spolupráci
          s občianskym združením Neónka Banská Bystrica zorganizovali na
          začiatku decembra už 6. ročník charitatívneho Mikulášskeho behu. Tento
          rok sa stretlo 250 mikulášov, ktorý spoločne odštartovali a všetci
          bežali za jeden spoločný cieľ.
        </div>
        <div>
          <img src={mikBeh} alt="mikulassky beh" />
        </div>

        <div className="bold padding">Za deti s cystickou fibrózou</div>
        <div>
          Za výťažok z Mikulášskeho behu a za pomoci študentov z Gymnázia Jozefa
          Gregora Tajovského, ktorý venovali finačný výťažok z Tajáckeho
          adventného punču sa nám podarilo nakúpiť 5 najmodernejších
          inhalátorov, ktoré sme venovali detským pacientom do 2 rokov z nášho
          centra pre liečbu cystickej fibrózy.
        </div>

        <div className="bold padding">Čo je to cystická fibróza?</div>
        <div>
          <ul style={{ textAlign: "start" }}>
            <li>
              Cystická fibróza je genetické metabolické ochorenie, ktoré vedie k
              tomu, že sa vo všetkých žľazách hromadí hustý sekrét
            </li>
            <li>
              Toto ochorenie postihuje predovšetkým pľúca, tráviaci trakt a
              pohlavné orgány
            </li>
            <li>
              V súčasnej dobe nedokážeme týchto pacientov vyliečiť, ale vďaka
              zlepšeniu liečebných možností neustále rastie očakávaná dĺžka
              života pacientov s CF
            </li>
            <li>
              Pokročilé ochorenie obmedzuje to najzakladanejšie pocit nadýchnuť
              sa z plných pľúc
            </li>
            <li>
              Inhalačné prístroje pacientom uľahčujú vykašliavanie hustého
              hlienu a zlepšujú im pocit pri dýchaní
            </li>
          </ul>
        </div>
      </StyledMidBanner>
    );
  }
}

const StyledMidBanner = styled.div`
  margin: 0;
  padding: 20vh 20vw 10vh 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1500px) {
    padding: 10vh 15vw;
  }
  @media screen and (max-width: 700px) {
    padding: 10vh 5vw;
  }
  .bold {
    font-weight: bold;
  }
  .yellow {
    padding: 0 5px;
    background-color: ${colors.yellowColor};
  }
  .pink {
    padding: 0 5px;
    background-color: ${colors.pinkColor};
  }
  .padding {
    padding: 5vh 0 0 0;
  }
  a {
    color: ${colors.pinkColor};
    font-weight: bold;
  }
  img {
    width: 100%;
    max-width: 700px;
  }
  h1 {
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
    color: ${colors.pinkColor};
    @media screen and (max-width: 600px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  h2 {
    margin-top: 0;
    font-size: ${fonts.subHeadingScreen};
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: ${fonts.subHeadingMobile};
    }
  }
  div {
    font-size: ${fonts.textScreen};
    padding-top: 10px;
    text-align: center;
    @media screen and (max-width: 600px) {
      ont-size: ${fonts.textMobile};
    }
    a {
      color: ${colors.pinkColor};
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
