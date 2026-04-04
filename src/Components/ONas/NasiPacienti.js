import React from 'react';
import styled from 'styled-components';

import { pinkColor, yellowColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

const PATIENTS = [
  {
    title: 'Neurologickí pacienti',
    desc: 'Detská mozgová obrna DMO, epilepsie, genetické syndrómy, pacienti s porušenou miechou po úraze,...',
  },
  {
    title: 'Nefrologickí pacienti',
    desc: 'Pacienti s poruchou obličiek — nefrotický syndróm, glomerulonefritídy, tubulopatie, obličkové zlyhania,...',
  },
  {
    title: 'Metabolickí pacienti',
    desc: 'Cukrovka, vrodené metabolické poruchy a ďalšie chronické metabolické ochorenia.',
  },
  {
    title: 'Reumatologickí pacienti',
    desc: 'Juvenílne idiopatické artritídy, systémový lupus a ďalšie reumatologické ochorenia.',
  },
  {
    title: 'Pacienti s ochoreniami pľúc',
    desc: 'Chronické a závažné ochorenia dýchacích ciest vyžadujúce dlhodobú starostlivosť.',
  },
  {
    title: 'Pacienti s poruchami imunity',
    desc: 'Primárne imunodeficiencie, transplantovaní pacienti a deti s poruchami imunitného systému.',
  },
];

export default function NasiPacienti() {
  const ref = useReveal();

  return (
    <Section>
      <Inner ref={ref} className="reveal">
        <Heading>Komu pomáhame</Heading>
        <Grid>
          {PATIENTS.map((p, i) => (
            <Card key={i}>
              <CardTitle>{p.title}</CardTitle>
              <CardDesc>{p.desc}</CardDesc>
            </Card>
          ))}
        </Grid>
        <Callout>
          Liečba a starostlivosť o tieto deti je často celoživotná.
        </Callout>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${yellowColor};
  padding: 0 12vw;

  @media (max-width: 1500px) { padding: 0 8vw; }
  @media (max-width: 800px)  { padding: 0 6vw; }
  @media (max-width: 400px)  { padding: 0 5vw; }
`;

const Inner = styled.div`
  padding: 6rem 0;
`;

const Heading = styled.h3`
  color: ${pinkColor};
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;

  @media (max-width: 500px) { font-size: 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 580px)  { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

const Callout = styled.p`
  margin: 2rem 0 0;
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: rgba(0, 0, 0, 0.55);
`;
