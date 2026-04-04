import React from 'react';
import styled, { keyframes } from 'styled-components';

import neonkaImg from '../../assets/logo_animated.svg';
import { pinkColor } from '../../style/colors';

const FISH_PATH =
  'M25.7704 19.5C20.1524 19.5 12.9511 13.5191 9.90133 11.2807C7.65416 13.5191 1.97175 17.2497 0.527145 17.2497C0.848169 17.399 0.206121 17.2497 0.527145 17.2497C-1.55951 16.3544 3.2229 10.1938 3.2229 9C3.2229 8.10464 -1.01325 1.87971 1.07341 0.835117C2.67853 0.0889807 7.17263 4.41622 9.90133 7.25154C13.1116 5.01313 20.1524 0 25.7704 0C32.8329 0 42.4019 7.55232 42.7229 8C43.2044 8.44768 43.5838 8.26392 42.2227 9.5C42.0622 9.79845 32.9934 19.5 25.7704 19.5ZM33.6961 6.70778C32.8936 6.11087 31.6095 6.11087 30.9674 6.70778C30.1648 7.45392 30.1648 8.4985 30.9674 9.24464C31.6095 9.99078 32.8936 9.99078 33.6961 9.24464C34.4987 8.64773 34.4987 7.45392 33.6961 6.70778Z';

const FISH_CONFIGS = [
  { top: '64%', size: 34, color: '#F23695', delay: 0,  delayMobile: 0,   wobble: 0.75, duration: 95  },
  { top: '11%', size: 34, color: '#ffffff', delay: 5,  delayMobile: -3,  wobble: 1,  duration: 108 },
  { top: '28%', size: 34, color: '#F23695', delay: 10, delayMobile: -7,  wobble: 0.88, duration: 130  },
  { top: '68%', size: 34, color: '#ffffff', delay: 16, delayMobile: -10, wobble: 1.5,  duration: 70 },
  { top: '80%', size: 34, color: '#F23695', delay: 21, delayMobile: -14, wobble: 0.7,  duration: 100 },
  { top: '12%', size: 34, color: '#ffffff', delay: 29, delayMobile: -17, wobble: 2.1,  duration: 92  },
  { top: '32%', size: 34, color: '#F23695', delay: 36, delayMobile: -21, wobble: 1.9,  duration: 105 },
  { top: '48%', size: 34, color: '#ffffff', delay: 42, delayMobile: -24, wobble: 0.82, duration: 85  },
  { top: '8%',  size: 34, color: '#F23695', delay: 48, delayMobile: -28, wobble: 1.6,  duration: 110 },
  { top: '70%', size: 34, color: '#ffffff', delay: 54, delayMobile: -31, wobble: 0.92, duration: 98  },
  { top: '62%', size: 34, color: '#F23695', delay: 60, delayMobile: -35, wobble: 0.68, duration: 90  },
  { top: '22%', size: 34, color: '#ffffff', delay: 66, delayMobile: -38, wobble: 1.45, duration: 115 },
  { top: '42%', size: 34, color: '#F23695', delay: 72, delayMobile: -42, wobble: 0.78, duration: 102 },
  { top: '58%', size: 34, color: '#ffffff', delay: 78, delayMobile: -45, wobble: 2.0,  duration: 87  },
  { top: '78%', size: 34, color: '#F23695', delay: 84, delayMobile: -49, wobble: 1.55, duration: 107 },
  { top: '38%', size: 34, color: '#ffffff', delay: 90, delayMobile: -52, wobble: 0.73, duration: 93  },
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
              '--duration': `${fish.duration}s`,
              '--delay': `${fish.delay}s`,
              '--delay-mobile': `${fish.delayMobile}s`,
              '--wobble': `${fish.wobble}s`,
            }}
          >
            <FishBody>
              <svg
                width={fish.size}
                height={Math.round(fish.size * 20 / 44)}
                viewBox="0 0 44 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'scaleX(1)' }}
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

  @media (max-width: 600px) {
    transform-origin: left center;
    scale: 0.75;
  }
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
