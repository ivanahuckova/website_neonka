import React from 'react';
import styled from 'styled-components';

import Team from '../../assets/team.jpeg';
import { pinkColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

export default function ONeonke() {
  const ref = useReveal();

  return (
    <Container>
      <div id="team" />
      <Inner ref={ref} className="reveal">
        <Heading>O nás</Heading>
        <Body>
          <TextBlock>
            Sme 4 mladé pediatričky –{' '}
            <span className="name">Ninka</span>,{' '}
            <span className="name">Ľudka</span>,{' '}
            <span className="name">Žofka</span> a{' '}
            <span className="name">Mirka</span> z Detskej fakultnej nemocnice
            v Banskej Bystrici. Pomáhame od roku 2019 deťom a rodinám chronicky
            chorých detí, či už finančne, alebo prostredníctvom zlepšovania
            podmienok na našom detskom oddelení a ambulanciách.
          </TextBlock>
          <ImageBlock>
            <img src={Team} alt="tím Neónky" />
          </ImageBlock>
        </Body>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding: 0 12vw;

  @media (max-width: 1500px) { padding: 0 8vw; }
  @media (max-width: 800px)  { padding: 0 6vw; }
  @media (max-width: 600px)  { padding: 0 5vw; }

  #team {
    position: absolute;
    top: -80px;
  }
`;

const Inner = styled.div`
  margin: 2rem 0 4rem;
`;

const Heading = styled.h3`
  color: ${pinkColor};
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem;

  @media (max-width: 500px) { font-size: 2rem; }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextBlock = styled.p`
  font-size: 1.15rem;
  line-height: 1.75;
  margin: 0;

  @media (max-width: 600px) { font-size: 1.05rem; }

  .name {
    color: ${pinkColor};
    font-weight: 700;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 75%;
    max-width: 680px;
    border-radius: 16px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    display: block;

    @media (max-width: 800px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
