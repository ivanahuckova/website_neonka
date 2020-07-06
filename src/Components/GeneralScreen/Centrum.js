import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";

//Import icons/images
import bg from "../../assets/bg.svg";

//Main component
export default class Akcie extends React.Component {
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
    // const { size } = this.state;
    return (
      <StyledMidBanner id="novinky">
        <h1>Stredoslovenské centrum pre nervovo-svalové ochorenia</h1>
        <div>
          Aj vďaka Vašej podpore, za ktorú veľmi ďakujeme otvárame
          Stredoslovenské centrum pre diagnostiku a liečbu nervovo-svalových
          ochorení v detskom veku. Slávnostné otvorenie sa uskutoční 24.7.2020
          o 14:00 v Detskej fakultnej nemocnici v Banskej Bystrici, na prvom
          poschodí v priestoroch EMG ambulancie. Krstným otcom bude František
          Košarišťan, ktorého pravdepodobne poznáte pod menom Fero Joke. Viac
          informácii nájdete na podstránke{" "}
          <a href="/nervovo-svalove-centrum">centra. </a>
        </div>
      </StyledMidBanner>
    );
  }
}

const StyledMidBanner = styled.div`
  margin: 0;
  padding: 10vh 20vw;
  background-color: ${colors.yellowColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url(${bg});
  background-size: cover;

  iframe {
    margin-top: 20px;
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
  .logo {
    width: 94px;
  }
  a {
    color: ${colors.pinkColor};
    font-weight: bold;
  }
  img {
    width: 100%;
  }
  h1 {
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
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
  .banner {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    @media screen and (max-width: 600px) {
      width: 95%;
    }
    img {
      width: 100%;
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
