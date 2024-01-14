import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

import rebrina from "../../assets/rebrina.jpg";

//Main component
export default function Snurka() {
  return (
    <StyledMidBanner>
      {/* <h1>O čom je projekt Rebrina?</h1> */}
      <div>
      <img src={rebrina} alt="Rebrina logo" style={{height: '40vh'}}/>
      <div>
        Rebrina je pomôcka na cvičenie. Pri jej pravidelnom cvičení si vybudujete väčšiu silu, a tak sa dokážete zodvihnúť 
        o stupienok vyššie. Ale potrebujete nato ČAS,TRPEZLIVOSŤ A PEVNÚ VÔĽU. A dobrého fyzioterapeuta! 
        <span className="bold yellow">
          Projekt REBRINA vznikol pre potreby lepšieho prístupu ku kvalitným detským rehabilitáciám.
        </span>
        V tomto projekte spolupracujeme s fyzioterapeutkou <a href="https://bbfyzioterapia.sk">Mgr. Zlaticou Žigmundovou</a>, ktorá má 
        skúsenosti s detskými pacientami. Našim cieľom sú rýchlo dostupné a kvalitne prevedené cvičenia nielen pre detských neurologických 
        pacientov. 
        <br />
        Cvičenia sú uhrádzané plne. Do konca roka 2023 sme uhradili rehabilitácie 4 pacientom v približnej hodnote 800 eur. Plánujeme spolupracovať aj 
        s neurorehabilitačným <a href="https://turehabilitujem.sk">NEUROGYmom</a>, ktorý navštevujú hlavne predčasne narodené deti z našich ambulancií.
        <br />
        <div>
         S projektom rebrina bol prepojený aj 10. ročník Mikulášskeho behu, kde celý výťažok bol určený pre predčasne  <a href="/mikulassky-beh#novinky">narodeného Tomáška</a>.
        </div>
      </div>

      </div>
    </StyledMidBanner>
  );
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
    max-width: 1000px;
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
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
