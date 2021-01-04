import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
import mik2019_1 from "../../assets/events/mik2019_1.jpg";
import mik2020_1 from "../../assets/events/mik2020_1.jpg";
import mik2020_2 from "../../assets/events/mik2020_2.jpg";
// import neonkaBeh from "../../assets/neonka_beh.svg";

//Main component
export default class MikBeh extends React.Component {
  render() {
    return (
      <StyledMidBanner id="novinky">
        <h1>„Čas je drahý!“ - Charitatívny Mikulášsky beh 2020</h1>
        <div>
          OZ Neónka spojilo sily s OZ Crazy Women Active Planet. Keď sa spojí 5
          žien, tak to má zmysel a veľkú silu pomôcť.
        </div>
        <div className="bold padding">VÝNIMOČNE - CELOSVETOVO - DIŠTANČNE</div>
        <div>
          7. ročník Mikulášskeho behu „Čas je drahý“ bol určený pre deti s
          cystickou fibrózou. Od októbra 2020 beží verejná zbierka s cieľom
          vyzbierať{" "}
          <span className="bold yellow">7000 Eur na diagnostický prístroj</span>
          , ktorý umožní rýchlejšiu diagnostiku. Diagnostika cystickej fibrózy
          je postavená na stanovení chloridov v pote. Pri tomto ochorení je
          v pote vysoká koncentrácia chloridov. V okolitých krajinách je možné
          diagnostikovať cystickú fibrózu jednoducho do 1 hodiny pomocou
          moderného hodinkového prístroja Macroduct. Na Slovensku vyšetrujeme
          chloridy v pote zastaralou metódou, kedy výsledok vyšetrenia máme
          k dispozícii za 24 hodín od odobratia vzorky.
        </div>
        <div>
          <img src={mik2020_1} alt="mikulassky beh" />
        </div>
        <div className="bold padding">
          Ako náš charitatívny Mikulášsky beh vyzeral?
        </div>
        <div>
          Vytvorili sme skupinky po 6 bežcov a tých sme štartovali každých 10
          minút. V cieli na bežcov čakala skupina pánov z 
          <span className="bold yellow">Lions klubu</span> s teplým čajom, jedna
          z rodín doniesla perníky, podarilo sa spraviť pekné fotografie,
          podujatie prišli podporiť aj samotní pacienti s cystickou fibrózou
          a tohtoročná 1. Vicemiss SR pochádzajúca z Banskej Bystrice Viktória
          Podmanická . Vďaka ochote a podpore firmy{" "}
          <span className="bold yellow">BB EXPO</span> sme mali darom 2
          bilboardy.{" "}
          <span className="bold yellow">
            Firmy LIDL, Urpiner, Nebalené, Modrá púpava, Galvex, Active Planet
          </span>{" "}
          venovali krásnu tombolu a za to im ďakujeme, tombola čakala v cieli
          a potešila naozaj každého. <br />
          <br />
          Bežci, ktorí sa nemohli zúčastniť behu v Banskej Bystrici, podporovali
          deti s cystickou fibrózou distančne z celého sveta.V čase mikulášskeho
          behu si zabehli a poslali nám krásne mikulášske fotky spolu
          s finančnou podporou na transparentný účet zbierky. Distančnou formou
          sme vyzbierali <span className="bold yellow">320 eur</span>, cez
          registráciu účastníkov sa nám podarilo vyzbierať{" "}
          <span className="bold yellow">622 eur</span>, čiastku na
          transparentnom účte pripíšeme, keď vybavíme zaseknuté mikulášske
          oblečenie na colnici 🙂. Všetkým veľmi pekne ďakujeme!
        </div>
        <div>
          <img src={mik2020_2} alt="mikulassky beh" />
        </div>

        <div className="bold padding">Čo je to cystická fibróza?</div>
        <div>
          Cystická fibróza je genetické celoživotné ochorenie, ktorým trpí
          približne 150 detí na Slovensku. Postihuje najmä dýchací a tráviaci
          trakt (pľúca a črevo). Prejavuje sa opakovanými zápalmi dýchacích
          ciest, vykašliavaním hustého hlienu a podvýživou. Diagnóza cystickej
          fibrózy je postavená na vyšetrení potu, ktorý je pri tejto chorobe
          veľmi slaný a deti majú pre tento pot prívlastok „slané deti“. V
          okolitých krajinách je možné diagnostikovať toto ochorenie jednoducho
          do 1 hodiny pomocou moderného hodinkového prístroja Macroduct. Na
          Slovensku vyšetrujeme chloridy v pote zastaralou metódou, kedy
          výsledok vyšetrenia máme k dispozícii o 24 hodín. „Čas je drahý“ alebo
          pomôžte nám naučiť Slovensko moderne a rýchlo diagnostikovať cystickú
          fibrózu a tým venujete slaným deťom a im rodinám čas.
        </div>
        <h1>„Dýchaj z hlboka!“ - Charitatívny Mikulášsky beh 2019</h1>
        <div>
          Občianske združenie Crazy WoMen Active Planet v spolupráci
          s občianskym združením Neónka Banská Bystrica zorganizovali na
          začiatku decembra už 6. ročník charitatívneho Mikulášskeho behu. Tento
          rok sa stretlo 250 mikulášov, ktorý spoločne odštartovali a všetci
          bežali za jeden spoločný cieľ.
        </div>
        <div>
          <img src={mik2019_1} alt="mikulassky beh" />
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
