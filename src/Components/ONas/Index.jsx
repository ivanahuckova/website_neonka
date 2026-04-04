import React from 'react';
import styled from 'styled-components';

import { yellowColor } from '../../style/colors';

import LandingBanner from './LandingBanner';
import ONeonke from './ONeonke';
import NasiPacienti from './NasiPacienti';
import Ciele from './Ciele';
import Media from './Media';
import Kontakt from './Kontakt';

export default function General() {
  return (
    <Wrapper>
      <HeroContainer>
        <LandingBanner />
        <WaveBottom>
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 C240,160 480,20 720,90 C960,160 1200,30 1440,90 L1440,160 L0,160 Z"
              fill="white"
            />
          </svg>
        </WaveBottom>
      </HeroContainer>
      <ONeonke />
      <NasiPacienti />
      <Ciele />
      <Media />
      <Kontakt />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const HeroContainer = styled.div`
  background: linear-gradient(to bottom, ${yellowColor} 0%, #ffbcdf 100%);
  // background-color: ${yellowColor};
  padding: 3rem 12vw 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 1500px) {
    padding-left: 8vw;
    padding-right: 8vw;
  }

  @media (max-width: 1000px) {
    min-height: auto;
    padding: 2.5rem 6vw 9rem;
  }

  @media (max-width: 600px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 5rem;
  }
`;

const WaveBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 160px;

    @media (max-width: 768px) {
      height: 110px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }
`;
