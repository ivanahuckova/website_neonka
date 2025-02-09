import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

import rebrina from '../../assets/rebrina.jpg';

//Main component
export default function Rebrina() {
  return (
    <StyledMidBanner>
      {/* <h1>O čom je projekt Rebrina?</h1> */}
      <div>
        <img src={rebrina} alt="Rebrina logo" style={{ height: '40vh' }} />
        <div>
          Rebrina je pomôcka na cvičenie. Pri jej pravidelnom cvičení si vybudujete väčšiu silu, a tak sa dokážete
          zodvihnúť o stupienok vyššie. Ale potrebujete nato ČAS,TRPEZLIVOSŤ A PEVNÚ VÔĽU. A dobrého fyzioterapeuta!
          <span className="bold yellow">
            Projekt REBRINA vznikol pre potreby lepšieho prístupu ku kvalitným detským rehabilitáciám.
          </span>
          Našim cieľom sú rýchlo dostupné a kvalitne prevedené cvičenia nielen pre detských neurologických pacientov. V
          tomto projekte spolupracujeme s{' '}
          <a href="https://bbfyzioterapia.sk">fyzioterapeutkou Mgr. Zlaticou Žigmundovou</a>, ktorá má skúsenosti s
          detskými pacientami. Cvičenia sú uhrádzané plne.
          <br />
          Spolupracujeme s neurorehabilitačným zariadením <a href="https://turehabilitujem.sk">NEUROGYM</a>, ktorý
          navštevujú hlavne predčasne narodené deti z našich ambulancií. Čiastočne uhrádzame rehabilitácie po traumách
          mozgu a miechy.
          <div>
            Za rok 2024 sme uhradili rehabilitácie v sume 3203,5 EUR. Projekt od začiatku fungovania od 1/25 pomohol 10
            pacientom k prístupnejším rehabilitáciám.
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
    // width: 100%;
    // max-width: 1000px;
  }
  h1 {
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
    color: ${colors.pinkColor};
  }
  h2 {
    margin-top: 0;
    font-size: ${fonts.subHeadingScreen};
    text-align: center;
  }
  div {
    font-size: ${fonts.textScreen};
    padding-top: 10px;
    text-align: center;
    a {
      color: ${colors.pinkColor};
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
