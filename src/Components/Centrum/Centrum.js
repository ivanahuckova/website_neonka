import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
import pozvanka from "../../assets/pozvanka.png";

//Main component
export default class Centrum extends React.Component {
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
      <StyledMidBanner id="novinky">
        <h1>
          Stredoslovenské centrum nervovo-svalových ochorení v detskom veku
        </h1>
        <div>
          Najmä vďaka vašej podpore sme v Banskej Bystrici otvorili moderné{" "}
          <span className="bold yellow">
            Stredoslovenské centrum pre diagnostiku a liečbu nervovo-svalových
            ochorení v detskom veku
          </span>
          . Takmer 11 000 eur sa nám podarilo vyzbierať za pomoci „neobyčajne
          obyčajných“ ľudí 💛. Prispeli aj samotní rodičia pacientov so
          svalovými ochoreniami. Pri oficiálnom otvorení bol 12.6.2020 prítomný
          aj pán minister Marek Krajčí, ktorému sa na návšteve nášho centra
          páčilo. Sibylka, 9 ročná pacientka so spinálnou muskulárnou atrofiou,
          si pre neho pripravila fitnes bábovku, s ktorou sa s nami podelil.
        </div>
        {size > 500 && (
          <iframe
            src="https://www.ta3.com/embed/20200613-hw-444f2aeb-4dbe-4ef5-a765-d4cb991ba778.html"
            width="500"
            height="320"
            frameborder="0"
            scrolling="no"
            className="padding"
            title="Reportaz o centre vacsia"
          ></iframe>
        )}
        {size < 501 && (
          <iframe
            src="https://www.ta3.com/embed/20200613-hw-444f2aeb-4dbe-4ef5-a765-d4cb991ba778.html"
            width="350"
            height="224"
            frameborder="0"
            scrolling="no"
            className="padding"
            title="Reportaz o centre mensia"
          ></iframe>
        )}
        <div className="bold padding">Prečo sme centrum vytvorili?</div>
        <div>
          Svalové ochorenia v detskom veku nie sú veľmi časté, ale takmer vždy
          sa jedná o závažné stavy. Medzi svalové ochorenia vyskytujúce sa
          v detskom veku patrí napríklad aj spinálna muskulárna atrofia (SMA).
          Toto ochorenie je sprevádzané postupným úbytkom nervových buniek
          riadiacich svaly (motoneuróny), ktoré sa prejaví poruchou funkcie
          svalov a vedie k postupnému zlyhaniu všetkých svalov vrátane tých
          dýchacích. <br />
          <br />
          Kedysi toto ochorenie bolo neliečiteľné, aktuálne existuje vysoko
          špecifická liečba, ktorá zlepšuje týmto pacientom kvalitu života.
          Okrem SMA existujú mnohé ďalšie nervovosvalové ochorenia kam patria aj
          svalové dystrofie. V Slovenskej republike sú 2 centrá pre diagnostiku
          a liečbu detských nervovo-svalových ochorení, v{" "}
          <span className="bold">Bratislave</span> a v 
          <span className="bold">Košiciach</span>. Liečba nami diagnostikovaných
          pacientov je niekedy obmedzená a môže byť podávaná len v centre, čo
          pre rodiny môže znamenať dochádzanie niekoľko stoviek kilometrov.
          Práve preto sme v <span className="bold">Banskej Bystrici</span>
          otvorili Stredoslovenské centrum pre diagnostiku a liečbu
          nervovo-svalových ochorení v detskom veku.
        </div>
        {size > 500 && (
          <iframe
            width="500"
            height="297"
            src="https://www.youtube.com/embed/Hs2bO7_3uvo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Sibylka o ochoreni vacsie"
            className="padding"
          ></iframe>
        )}
        {size < 501 && (
          <iframe
            width="350"
            height="208"
            src="https://www.youtube.com/embed/Hs2bO7_3uvo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Sibylka o ochoreni mensie"
            className="padding"
          ></iframe>
        )}
        <div className="bold padding">Slávnostné otvorenie</div>
        <div>
          Slávnostné otvorenie sa uskutoční 24.7.2020 o 14:00 v Detskej
          fakultnej nemocnici v Banskej Bystrici, na prvom poschodí
          v priestoroch EMG ambulancie. Krstným otcom bude{" "}
          <a href="https://www.instagram.com/fero_joke/?hl=en">Fero Joke</a>.{" "}
          <img alt="pozvanka na akciu" src={pozvanka}></img>
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
