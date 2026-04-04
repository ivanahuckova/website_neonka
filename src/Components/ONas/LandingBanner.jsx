import React from 'react';
import styled, { keyframes } from 'styled-components';

import neonkaImg from '../../assets/logo_animated.svg';
import { pinkColor } from '../../style/colors';

const FISH_PATH =
  'M25.6249 25.3C29.1249 25.3 34.3249 21.5 36.2249 20C37.6249 21.5 38.7249 22.3 39.6249 22.3C39.8249 22.3 40.1249 22.2 40.3249 22.1C41.6249 21.5 41.7249 19.5 41.7249 18.7C41.7249 18.1 41.6249 15.9 40.3249 15.2C39.3249 14.7 37.9249 15.4 36.2249 17.3C34.2249 15.8 29.1249 12 25.6249 12C21.2249 12 16.8249 17.8 16.6249 18.1C16.3249 18.4 16.3249 18.9 16.6249 19.3C16.7249 19.5 21.1249 25.3 25.6249 25.3ZM22.1249 17.8C22.6249 17.4 23.4249 17.4 23.8249 17.8C24.3249 18.3 24.3249 19 23.8249 19.5C23.4249 20 22.6249 20 22.1249 19.5C21.6249 19.1 21.6249 18.3 22.1249 17.8Z';

const FISH_CONFIGS = [
  { top: '55%', size: 52, color: '#F23695', delay: 0,  delayMobile: 0,   wobble: 0.85 },
  { top: '28%', size: 52, color: '#ffffff', delay: 5,  delayMobile: -3,  wobble: 0.72 },
  { top: '18%', size: 52, color: '#F23695', delay: 10, delayMobile: -7,  wobble: 0.7  },
  { top: '65%', size: 52, color: '#ffffff', delay: 16, delayMobile: -10, wobble: 0.88 },
  { top: '72%', size: 52, color: '#F23695', delay: 21, delayMobile: -14, wobble: 1.05 },
  { top: '12%', size: 52, color: '#ffffff', delay: 29, delayMobile: -17, wobble: 0.78 },
  { top: '32%', size: 52, color: '#F23695', delay: 36, delayMobile: -21, wobble: 0.65 },
  { top: '48%', size: 52, color: '#ffffff', delay: 42, delayMobile: -24, wobble: 0.92 },
  { top: '8%',  size: 52, color: '#F23695', delay: 48, delayMobile: -28, wobble: 0.9  },
  { top: '70%', size: 52, color: '#ffffff', delay: 54, delayMobile: -31, wobble: 0.68 },
  { top: '62%', size: 52, color: '#F23695', delay: 60, delayMobile: -35, wobble: 0.75 },
  { top: '22%', size: 52, color: '#ffffff', delay: 66, delayMobile: -38, wobble: 0.82 },
  { top: '42%', size: 52, color: '#F23695', delay: 72, delayMobile: -42, wobble: 0.95 },
  { top: '58%', size: 52, color: '#ffffff', delay: 78, delayMobile: -45, wobble: 0.73 },
  { top: '78%', size: 52, color: '#F23695', delay: 84, delayMobile: -49, wobble: 0.7  },
  { top: '38%', size: 52, color: '#ffffff', delay: 90, delayMobile: -52, wobble: 0.87 },
];

export default function LandingBanner() {
  return (
    <StyledLandingBanner>
      <FishLayer aria-hidden="true">
        {FISH_CONFIGS.map((fish, i) => (
          <FishWrapper
            key={i}
            style={{
              '--top': fish.top,
              '--color': fish.color,
              '--duration': '100s',
              '--delay': `${fish.delay}s`,
              '--delay-mobile': `${fish.delayMobile}s`,
              '--wobble': `${fish.wobble}s`,
            }}
          >
            <FishBody>
              <svg
                width={fish.size}
                height={fish.size}
                viewBox="0 0 66 66"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'scaleX(-1)' }}
              >
                <path d={FISH_PATH} fillRule="evenodd" />
              </svg>
            </FishBody>
          </FishWrapper>
        ))}
      </FishLayer>
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

const swimAcross = keyframes`
  0%      { transform: translateX(-100px); }
  63%     { transform: translateX(calc(100vw + 100px)); }
  63.01%, 100% { transform: translateX(-100px); }
`;

const swimAcrossMobile = keyframes`
  0%      { transform: translateX(-100px); }
  42%     { transform: translateX(calc(100vw + 100px)); }
  42.01%, 100% { transform: translateX(-100px); }
`;

const swimWiggle = keyframes`
  0%, 100% { transform: translateY(0)    rotate(-4deg); }
  50%       { transform: translateY(-7px) rotate(4deg); }
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

const FishLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: visible;
  z-index: 0;
`;

const FishWrapper = styled.div`
  position: absolute;
  top: var(--top);
  left: 0;
  color: var(--color);
  opacity: 1;
  animation: ${swimAcross} var(--duration) linear var(--delay) infinite backwards;

  @media (max-width: 1000px) {
    animation-duration: 65s;
  }

  @media (max-width: 600px) {
    animation: ${swimAcrossMobile} 55s linear var(--delay-mobile) infinite backwards;
  }
`;

const FishBody = styled.div`
  animation: ${swimWiggle} var(--wobble) ease-in-out infinite;
`;

const LandingHeader = styled.div`
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
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
    align-self: center;
    width: 160px;
    height: 160px;
  }

  @media (max-width: 600px) {
    align-self: center;
    width: 140px;
    height: 140px;
  }
`;
