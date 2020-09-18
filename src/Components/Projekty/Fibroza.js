import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
// import mikBeh from "../../assets/mik_beh.jpg";

//Main component
export default class Fibroza extends React.Component {
  constructor() {
    super();
    this.state = {
      size: null,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  resize = () => {
    this.setState({ size: window.innerWidth });
  };
  render() {
    const { size } = this.state;
    return (
      <StyledMidBanner>
        <h1>
          Prečo potrebujeme modernejší spôsob vyšetrovania chloridov v pote?
        </h1>
        {size > 560 && (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bLpMd881g-A"
            frameBorder="0"
            title="Video zbierky"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {size < 561 && (
          <iframe
            width="350"
            height="197"
            src="https://www.youtube.com/embed/bLpMd881g-A"
            frameBorder="0"
            title="Video zbierky"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div>
          Číslo transparentného účtu zbierky je{" "}
          <a href="https://www.transparentneucty.sk/#/ucet/SK9709000000005171611554">
            SK 97 0900 0000 0051 7161 1554
          </a>
          .
        </div>
        <div>
          Naším cieľom je zaviesť na našej ambulancii moderné vyšetrovanie
          chloridov v pote pomocou Macroduct systému, čím by sme nielenže
          zefektívnili našu prácu, ale v prvom rade dali šancu pacientom
          s cystickou fibrózou na rýchle a kvalitné stanovenie diagnózy. Pred
          niekoľkými rokmi sa rovnala diagnóza cystickej fibrózy nielen
          nemožnosti prežiť detstvo plnohodnotne a mimo stien nemocnice, ale
          bohužiaľ aj slabú nádej na dosiahnutie dospelosti vôbec. Avšak žijeme
          v dobe, kedy medicína dosiahla obrovský pokrok v podobe kauzálnej
          liečby.
        </div>
        <div style={{ textAlign: "start" }}>
          <ul>
            <li>
              Banská Bystrica je jedným z 
              <span className="bold padding">
                3 Centier pre liečbu pacientov s cystickou fibrózou v Slovenskej
                republike
              </span>
              . Ostatné dva sa nachádzajú v Bratislave a v Košiciach.
            </li>
            <li>
              Cystická fibróza je autozomálne recesívne ochorenie, ktoré patrí
              medzi zriedkavé choroby. Je celoživotné. Podstatou je porucha na
              úrovni CFTR génu, ktorá má za následok poruchu transportu sodíka
              a chloridov v orgánoch obsahujúcich žľazy s vonkajším vylučovaním.
              Postihuje takmer všetky orgány, no najviac dýchací a tráviaci
              trakt. Prejavuje sa opakovanými zápalmi dýchacích ciest (zápaly
              prínosových dutín, zápaly pľúc), vykašliavaním hustého hlienu,
              neprospievaním a objemnými stolicami.
            </li>
            <li>Trpí ním cca 150 detských pacientov na Slovensku.</li>
            <li>
              Od roku 2013 je toto ochorenie súčasťou tzv. novorodeneckého
              skríningu. U každého novorodenca detekujeme na 4.deň života
              prítomnosť imunorektívneho trypsinogénu metódou suchej kvapky
              získanej z pätičky. Hladina sa potom vyšetruje v Národnom
              skríningovom centre v Banskej Bystrici.
            </li>

            <li>
              Pri vyššej hodnote sú deti predvolané na pokračovanie
              v diagnostike vyšetrením, ktoré predstavujú chloridy v pote.
              Mesačne vyšetríme okolo 15 pacientov.{" "}
            </li>
            <li>
              Väčšina pochádza zo skríningu, niektorí pacienti sú vyšetrovaní
              pre tzv. „podozrivú anamnézu“. Na našej ambulancii sa vykonáva
              metódou pilokarpínovej ionoforézy a trvá približne 60 minút.
              Výsledok vyšetrenia máme k dispozícii na druhý deň. Ttreba
              podotknúť, že táto metóda je v celosvetovom meradle považovaná už
              za zastaralú. Momentálne sa preferuje stanovenie chloridov v pote
              pomocou Macroduct systému (zber potu je pomocou hodiniek). Výhodou
              je jednoduchosť, kratšia doba samotnej procedúry (20 minút), väčší
              komfort pre pacienta, ako aj možnosť mať k dispozícii výsledok už
              v deň vyšetrenia, nižší počet chýb v predanalytickej a analytickej
              fáze.
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
