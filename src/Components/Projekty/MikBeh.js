import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
import mikBeh from "../../assets/mik_beh.jpg";
import neonkaBeh from "../../assets/neonka_beh.svg";

//Main component
export default class MikBeh extends React.Component {
  render() {
    return (
      <StyledMidBanner id="novinky">
        <h1>„Čas je drahý!“ - Charitatívny Mikulášsky beh 2020</h1>
        <div>
          7.ročník najstaršieho Mikulášskeho charitatívneho behu na Slovensku{" "}
          <span className="bold yellow">BUDE</span> a je určený pre deti s
          cystickou fibrózou.
        </div>
        <div className="bold padding">Ako sme si to vymysleli?</div>
        <div>
          Registrácia pre symbolický počet 100 osôb sa rozbehne čoskoro cestou
          web stránky a následne uhradíte tradičné štartovné 10,-Eur na účet
          O.Z. Crazy WoMen Active Planet.{" "}
          <span className="bold yellow">
            IBAN: SK 20 0900 0000 0051 5254 9724, Poznámka: Vaše meno, VS:
            MIKY20
          </span>
          . Mikulášske oblečenie a štartové čísla si budete môcť prevziať na
          predajni,3-4.12.2020. Beh bude prebiehať na tradičnej dráhe v dĺžke 1
          km, v malých skupinkách do 6 osôb.
        </div>
        <img src={neonkaBeh} alt="mikulassky beh" style={{ width: "200px" }} />
        <div className="bold padding">5.12.2020 16.00-18.00</div>
        <div>
          Každej skupinke bude pridelený čas štartu na web stránke a Facebook-u
          s dostatočným odstupom medzi skupinkami. Môžete svoje skupinky aj
          pomenovať. Mikulášski bežci budú mať rúška aj bradu. Agent Mikuláš
          bude pred Europa Shopping Center dohliadať na dodržiavanie pravidiel a
          ďalší agent Mikuláš 2 bude v cieli na Námestí SNP, pri Plzenskej
          reštaurácii vydávať bežcom so štartovným číslom čaj a bude dbať na to,
          aby sme sa nekumulovali. <br />
          <br />
          PROSÍME fotiť, fotiť a fotiť. Pre účastníkov v BB máme pripravenú
          tombolu, ktorú vylosujeme zo štartovacích čísel a oznámime na webe a
          FCB výhercov . Výhra bude pripravená na predajni v Banskej Bystrici.
        </div>
        <div className="bold padding">
          Samozrejme, že si prajeme aby Vás bolo viac a tak je tu celosvetová
          VÝZVA!
        </div>
        <div>
          Bežte, kdekoľvek na svete v určenom čase{" "}
          <span className="bold yellow">5.12.2020 medzi 16.00-18.00</span> a
          buďte oblečení ako Mikuláš. Pošlite finančný príspevok na
          transparentný účet OZ Neónka Banská Bystrica.{" "}
          <span className="bold yellow">SK 97 0900 0000 00517161 1554</span>.
          Tento účet je určený pre verejnú zbierku{" "}
          <span className="bold yellow">„Čas je drahý“</span>, za dospelého
          10,-Eur a dieťa 1,-Euro. Zapojte sa do súťaže zdieľaním fotky s názvom
          #casjedrahy #activeplanet_svk #charityrun #banskabystrica na FB Active
          Planet Outdoor centrum a Neónka Banská Bystrica Cenu získa:
          <br />
          1.Najveselšia fotka z Vášho behu vybratá členkami O.Z. NEÓNKA Banská
          Bystrica osobne.
          <br />
          2.Mikuláš s najviac nabehanými km (doložené screenshotom z bežeckej
          aplikácie) <br />
          3.Mikuláš, ktorý pobeží v najvyššej nadmorskej výške (doložené
          screenshotom z bežeckej aplikácie)
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
