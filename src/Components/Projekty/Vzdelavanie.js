import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

import kniha from '../../assets/logo_kniha.png';

//Main component
export default function Vzdelavanie() {
  return (
    <StyledMidBanner>
      <div>
        <img src={kniha} alt="Logo" style={{ height: '40vh' }} />
      </div>
      <div>Od roku 2024 podporujeme vzdelávanie lekárov a sestier.</div>
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
