import React from 'react';
import styled from 'styled-components';

import { pinkColor, yellowColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';
import percenta from '../../assets/percenta.png';

export default function Percenta() {
  const ref = useReveal();

  return (
    <Section id="percenta">
      <Inner ref={ref} className="reveal">
        <TextBlock>
          <Badge>2% z daní</Badge>
          <Heading>Venujte svoje 2%<br />a pomôžte deťom</Heading>
          <Sub>
            Neplatíte nič navyše — len presmerujete časť daní, ktoré by inak odišli štátu.
            Vyplnený formulár si stiahnite a odovzdajte na daňovom úrade.
          </Sub>
          <DownloadBtn
            href="/files/Vyhlasenie-2025-neonka.pdf"
            download="Vyhlasenie-2025-neonka"
          >
            ↓ Stiahnuť vyplnený formulár
          </DownloadBtn>
        </TextBlock>

        <ImageBlock>
          <img src={percenta} alt="Formulár na 2% z daní" />
        </ImageBlock>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${yellowColor};
  padding: 6rem 12vw;

  @media (max-width: 1200px) { padding: 5rem 8vw; }
  @media (max-width: 600px)  { padding: 4rem 6vw; }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 860px) { align-items: center; }
`;

const Badge = styled.span`
  display: inline-block;
  background: ${pinkColor};
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: #1a1a1a;
  margin: 0 0 1rem;

  @media (max-width: 600px) { font-size: 2rem; }
`;

const Sub = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.65);
  margin: 0 0 2rem;
`;

const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${pinkColor};
  color: white !important;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.85rem 1.75rem;
  border-radius: 100px;
  text-decoration: none !important;
  transition: opacity 0.2s ease, transform 0.15s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    color: white !important;
  }
`;

const ImageBlock = styled.div`
  flex-shrink: 0;
  width: 340px;

  @media (max-width: 860px) { width: 100%; max-width: 380px; }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
  }
`;
