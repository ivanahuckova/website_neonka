import React from 'react';
import styled, { keyframes } from 'styled-components';

import neonkaImg from '../../assets/logo_animated.svg';
import { pinkColor } from '../../style/colors';

export default function LandingBanner() {
  return (
    <StyledLandingBanner>
      <LandingHeader>
        <h1>
          Vitajte na našej stránke <span className="pink">Neónky!</span>
        </h1>
        <p>
          Sme občianske združenie na pomoc detským pacientom s neonkologickými,
          často veľmi závažnými ochoreniami. Pomáhame hospitalizovaným deťom na
          detskom oddelení v Detskej fakultnej nemocnici v Banskej Bystrici a
          deťom v ambulantnej starostlivosti našej nemocnice. Neónka je známa
          tým, že svieti v tme. A aj my chceme byť takýmto svetielkom pre
          všetky choré deti a ich rodiny.
        </p>
      </LandingHeader>
      <LogoBubble>
        <img src={neonkaImg} alt="Neónka logo" />
      </LogoBubble>
    </StyledLandingBanner>
  );
}

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const StyledLandingBanner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const LandingHeader = styled.div`
  width: 60%;
  line-height: 1.65;
  animation: ${fadeSlideIn} 0.8s ease both;

  @media (max-width: 1000px) {
    width: 100%;
    text-align: left;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0 0 1rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }

    .pink {
      color: ${pinkColor};
    }
  }

  p {
    font-size: 1.15rem;
    margin: 0;
    opacity: 0.85;
    animation: ${fadeSlideIn} 0.8s 0.15s ease both;

    @media (max-width: 600px) {
      font-size: 1.05rem;
    }
  }
`;

const LogoBubble = styled.div`
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeSlideIn} 0.8s 0.25s ease both;

  img {
    width: 100%;
    height: 100%;
    animation: ${float} 4s ease-in-out infinite;
  }

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1000px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
