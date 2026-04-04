import React from 'react';
import styled from 'styled-components';

import rallyklub from '../../assets/partners/rallyklub.jpg';
import koliba from '../../assets/partners/kolibaozdany.png';
import cincuacik from '../../assets/partners/cincuacik.png';
import invelity from '../../assets/partners/invelity.png';
import modrapupava from '../../assets/partners/modrapupava.png';
import activeplanet from '../../assets/partners/activeplanet.jpg';
import crazywomen from '../../assets/partners/crazywomen.jpg';
import panpagacik from '../../assets/partners/panpagacik.jpeg';
import nemcianskacyklomotanica from '../../assets/partners/nemcianskacyklomotanica.png';
import akkord from '../../assets/partners/akkord.jpg';
import luna from '../../assets/partners/luna.png';
import magurazborov from '../../assets/partners/magurazborov.jpg';
import staratrznica from '../../assets/partners/staratrznica.png';
import straznianjeli from '../../assets/partners/strazni_anjeli.png';

import { pinkColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

const PARTNERS = [
  { src: cincuacik,               alt: 'Cincuačík',                href: 'http://cincuacik.sk' },
  { src: rallyklub,               alt: 'Rally klub Dolná Strehová', href: 'http://rallyshowds.sk' },
  { src: koliba,                  alt: 'Koliba Ozdany',            href: 'https://kolibaozdany.sk/' },
  { src: invelity,                alt: 'Invelity',                 href: 'https://invelity.com/' },
  { src: modrapupava,             alt: 'Modrá Púpava',             href: 'https://modrapupava.sk/' },
  { src: activeplanet,            alt: 'Active Planet',            href: 'https://www.activeplanet.sk/' },
  { src: crazywomen,              alt: 'Crazy Women',              href: 'https://www.katarinabelicova.sk/mili-priatelia-sportu-a-o-z-crazy-woman-active-planet/' },
  { src: panpagacik,              alt: 'Pán Pagáčik',              href: 'https://www.instagram.com/panpagacik' },
  { src: nemcianskacyklomotanica, alt: 'Nemčianska cyklomotanica', href: 'https://mtbliga.sk/' },
  { src: akkord,                  alt: 'Harmónia Chutí',           href: 'https://harmoniachuti.sk/' },
  { src: luna,                    alt: 'Luna Studio',              href: 'https://lunastudio.sk/' },
  { src: staratrznica,            alt: 'Stará Tržnica',            href: 'https://www.facebook.com/staratrznica.bb' },
  { src: magurazborov,            alt: 'Magura Zborov',            href: 'https://www.facebook.com/tjmagura.zborov' },
  { src: straznianjeli,           alt: 'Strážni anjeli Prešov',    href: 'https://www.straznianjeli.sk/' },
];

export default function Partneri() {
  const ref = useReveal();

  return (
    <Section id="partneri">
      <Inner ref={ref} className="reveal">
        <Eyebrow>Spolupráca</Eyebrow>
        <Heading>Ďakujeme naším partnerom</Heading>
        <Sub>Bez ich pomoci by sme nemohli robiť to, čo robíme.</Sub>
        <Grid>
          {PARTNERS.map(p => (
            <PartnerLink key={p.href} href={p.href} rel="noopener noreferrer" target="_blank" title={p.alt}>
              <img src={p.src} alt={p.alt} />
            </PartnerLink>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: #f8f8f8;
  padding: 6rem 12vw;

  @media (max-width: 1200px) { padding: 5rem 8vw; }
  @media (max-width: 600px)  { padding: 4rem 5vw; }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${pinkColor};
  margin: 0 0 0.75rem;
`;

const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0 0 0.5rem;

  @media (max-width: 500px) { font-size: 1.75rem; }
`;

const Sub = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0 0 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 2.5rem;

  @media (max-width: 600px) { gap: 1.5rem 2rem; }
`;

const PartnerLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(100%);
  opacity: 0.55;
  transition: filter 0.3s ease, opacity 0.3s ease, transform 0.2s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.07);
  }

  img {
    max-height: 72px;
    max-width: 130px;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;
