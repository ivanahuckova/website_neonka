import React from "react";
import styled from "styled-components";

//Colors
import { yellowColor, pinkColor } from "../../style/colors";

//Import components
import LandingBanner from "./LandingBanner";
import Ciele from "./Ciele";
import NasiPacienti from "./NasiPacienti";
import FacebookFeed from "./FacebookFeed";
import Media from "./Media";
import Partneri from "./Partneri";
import PodporteNas from "./PodporteNas";
import ONas from "./ONas";
import Centrum from "./Centrum";

function General() {
  return (
    <Wrapper>
      <TopLandingContainer>
        <LandingBanner />
      </TopLandingContainer>
      <Ciele />
      <PodporteNas />
      <ONas />
      <Media />
      <Centrum />
      <FacebookFeed />
      <NasiPacienti />
      <Partneri />
    </Wrapper>
  );
}

export default General;

const Wrapper = styled.div`
  .sticky {
    position: sticky;
    top: 80vh;
    left: 70vw;
    height: 100px;
    width: 100px;
    z-index: 1000;
    cursor: pointer;
    img {
      border: 4px solid ${pinkColor};
      border-radius: 50%;
      width: 100%;
    }
  }
`;

const TopLandingContainer = styled.div`
  height: 75vh;
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    background-color: ${yellowColor};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    -webkit-transform: skewY(3deg);
    -ms-transform: skewY(3deg);
    transform: skewy(-7deg);
    -webkit-transform-origin: 70%;
    -ms-transform-origin: 70%;
    transform-origin: 0;
    z-index: -1;
  }
  @media screen and (max-width: 1500px) {
    padding: 0 10vw;
  }

  @media screen and (max-width: 1000px) {
    background-color: ${yellowColor};
    height: auto;
    &::after {
      display: none;
    }
  }
  /* @media screen and (max-width: 400px) {
        padding: 0 7vw;
    } */
`;
