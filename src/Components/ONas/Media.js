import React from 'react';
import styled from 'styled-components';

import { pinkColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

const MEDIA_LINKS = [
  {
    label: 'Rozhovor v rádiu Lumen',
    href: 'https://www.lumen.sk/archiv-play/186231',
  },
  {
    label: 'Rozhovor na JOJ ŠPORT o 24-hodinovom charitatívnom behu Šnúrka',
    href: 'https://www.youtube.com/watch?v=FMl5N0STdu0',
  },
  {
    label: 'Reportáž TA3 o otvorení Stredoslovenského centra pre diagnostiku a liečbu nervovo-svalových ochorení v detskom veku',
    href: 'https://www.ta3.com/clanok/1185519/v-bystrici-otvorili-nove-nervovo-muskularne-centrum-pre-deti.html',
  },
  {
    label: 'Reportáž Markízy o našej benefičnej akcii Rally Show v Dolnej Strehovej',
    href: 'https://youtu.be/Y21nN6zfoPU',
  },
  {
    label: 'Článok v Bystricoviny.sk o našej benefičnej akcii Rally Show v Dolnej Strehovej',
    href: 'https://www.bystricoviny.sk/bystricoviny-tv/rally-show-v-dolnej-strehovej-podpori-pacientov-bystrickej-detskej-nemocnice-cez-neonku/?fbclid=IwAR1ovErhKlLrF7tu_jNV2Q0LNMLch-4pjpD4ztBjhr3MkLyhQ6Y_-mVwqR0',
  },
  {
    label: 'Článok na priekopnik.sk o našom benefičnom Mikulášskom behu, ktorého sa zúčastnilo viac ako 250 bežcov',
    href: 'https://www.priekopnik.sk/6-rocnik-charitativneho-mikulasskeho-behu-podporili-aj-sportove-osobnosti/',
  },
  {
    label: 'Článok na bystrica.dnes24.sk o benefičnom punči v areáli Gymnázia J. G. Tajovského, z ktorého výťažok podporil Neónku',
    href: 'https://bystrica.dnes24.sk/krasne-co-sa-podarilo-bystrickym-gymnazistom-pre-chore-deti-vyzbierali-stovky-eur-349403?fbclid=IwAR3vhMuKz1XlA94JwKJoKlwFUjjPlP6gIFr1zKhwacanFfuCl-NDxUzoA',
  },
  {
    label: 'Článok o OZ Neonka na Startitup.sk',
    href: 'https://www.startitup.sk/nie-vsetci-mladi-lekari-odchadzaju-zo-slovenska-styri-pediatricky-ostali-a-pomahaju-chronicky-chorym-detom/',
  },
];

export default function Media() {
  const ref = useReveal();

  return (
    <Section id="media">
      <Inner ref={ref} className="reveal">
        <Heading>Videli ste nás</Heading>
        <LinkGrid>
          {MEDIA_LINKS.map(item => (
            <MediaCard
              key={item.href}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.label}
            </MediaCard>
          ))}
        </LinkGrid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${pinkColor};
  padding: 0 12vw;

  @media (max-width: 1500px) { padding: 0 8vw; }
  @media (max-width: 800px)  { padding: 0 6vw; }
  @media (max-width: 400px)  { padding: 0 5vw; }
`;

const Inner = styled.div`
  padding: 5rem 0;
`;

const Heading = styled.h3`
  color: white;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;

  @media (max-width: 500px) { font-size: 2rem; }
`;

const LinkGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const MediaCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white !important;
  text-decoration: none !important;
  font-size: 0.97rem;
  font-weight: 500;
  line-height: 1.4;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;

  @media (max-width: 600px) { font-size: 0.9rem; }

  &:hover {
    background: white;
    border-color: white;
    color: ${pinkColor} !important;
    transform: translateX(4px);
  }

  &::after {
    content: '→';
    flex-shrink: 0;
    font-size: 1.1rem;
    opacity: 0.6;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(3px);
  }
`;
