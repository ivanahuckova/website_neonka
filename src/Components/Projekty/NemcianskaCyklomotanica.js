import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import nemcianska2021 from '../../assets/nemcianska_2021.png';
import nemcianska2022 from '../../assets/nemcianska_2022.png';

//Main component
export default function NemcianskaCyklomotanica() {
    return (
      <StyledMidBanner>
        <div>Neónka sa zoznámila s <span className="bold yellow">Jurajom Žembom a jeho kamarátmi</span>, ktorí sú riadne do bicyklovania. Rozhodli sa cez nás pomôcť našim pacientom. Sme rady, že sme boli pri zrode tejto akcie.</div>
        <div>Viac info o preteku na stránke <span className="bold yellow"><a href="https://www.mtbliga.sk/?fbclid=IwAR1MAdlMUkMGHVCQ4SSfCCRy6MpOzmJIepfZrEr6jVO6DE381MqHxRHTms8" rel="noopener noreferrer" target="_blank">Nemčianskej cyklomotanice</a></span></div>
        <h1>Nemčianska cyklomotanica 2022</h1>
          <div>Tento ročník bol lepší, bolo cítiť rodinnú atmosféru a my sme sa cítili veľmi príjemne, hoci bola riadna zima. 
          I keď to bolo 18.septembra 2022.<span className="bold yellow">Zvýšil sa počet pretekárov na 62</span>. Táto cyklomotanica bola pre nás v znamení príbehu o 
          gombíkovej baterke. Prehltnutej gombíkovej baterke, ktorá dokáže v čreve narobiť veľkú pohromu. Gombíková prehltnutá baterka 
          sa prilepila na stenu pažeráka malej Zary. Popálila pažerák a za istý čas vytvorila drobnú dierku až do najväčšej tepny, priamo 
          za pažerákom- aorty. Z tejto “dierky” následne Zara niekoľkokrát skoro vykrvácala a bolo ju treba oživovať.  Vďaka odborníkom v 
          detskom kardiocentre sa podarilo dieru v tepne úspešne uzatvoriť.  Závažné  krvácanie však spôsobilo stav podobný mŕtvici a tak 
          Zarina pravá ruka a pravá noha nefungujú na 100%. Šibalský pohľad sa však nezmenil. 
          <span className="bold yellow">Dobrovoľný výťažok z 1. ročníka bol 155 eur</span>. A my ideme do konca roka opätovne zháňať, aby sme <span className="bold yellow">Zare mohli kúpiť pohybový liečebný 
          bicykel- typ motomed viva 2, ktorý slúži na posilňovanie a udržanie svalovej sily</span>.

        </div>
        <div><img src={nemcianska2022} alt="Cyklomotanica 2022" id="nemMot2021"/></div>
        <h1 >Nemčianska cyklomotanica 2021</h1>
        <div>0.ročník Nemčianskej cyklomotanice (bicyklových pretekov) sa konal 12.septembra 2021
          v obci Nemce. V tento deň súťažilo <span className="bold yellow">48 pretekárov a 1 euro zo štartovného sa zbieralo pre
          nášho 14 ročného pacienta Olivera</span> s vrodenou vývojovou chybou mozgu, s ňou súvisiacu
          mentálnu zaostalosť, epilepsiu, autizmus, obezitu,... . Papier zvládne veľa. Rodičia musia
          zvládnuť oveľa- oveľa viac.
           <span className="bold yellow">Pre Olivera sme chceli kúpiť špeciálny elektrobicykel</span>- rikšu, značky BABBOE, prispôsobený
          práve pre jeho vysokú hmotnosť (Jeho váha už presiahla vyše 100 kíl a jeho matka ho
          nevládze voziť v obyčajnom bicykli.).
          <span className="bold yellow">Výťažok z nultej cyklomotanice bol takmer 212 eur</span>. Do konca roka 2021 sa nám podarilo dať
          dokopy 2000 eur, a to za pomoci mnohých ďalších (Babboe, obyvatelia obce Divín, koliba
          Ožďany). A Oliver dnes:
        </div>
        <div><img src={nemcianska2021} alt="Oliver"/></div>
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
    img {
        max-width: 600px;
    }
  }
`;
