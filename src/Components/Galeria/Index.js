import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pinkColor, yellowColor } from '../../style/colors';

// Akvárium
import akvarium1 from '../../assets/akvarium1.jpeg';
import akvarium2 from '../../assets/akvarium2.jpeg';
import akvarium3 from '../../assets/akvarium3.jpeg';

// Nervové centrum
import otvorenie from '../../assets/otvorenie.jpg';

// Mikulášsky beh
import mik2023_1 from '../../assets/events/mik2023_1.jpg';
import mik2023_2 from '../../assets/events/mik2023_2.jpg';
import mik2022_1 from '../../assets/events/mik2022_1.jpg';
import mik2022_2 from '../../assets/events/mik2022_2.png';
import mik2022_3 from '../../assets/events/mik2022_3.jpeg';
import mik2021_1 from '../../assets/events/mik2021_1.png';
import mik2021_2 from '../../assets/events/mik2021_2.png';
import mik2020_1 from '../../assets/events/mik2020_1.jpg';
import mik2020_2 from '../../assets/events/mik2020_2.jpg';
import mik2019_1 from '../../assets/events/mik2019_1.jpg';

// Diagnostika cystickej fibrózy
import zbierka0 from '../../assets/events/zbierka/zbierka0.jpg';
import zbierka1 from '../../assets/events/zbierka/zbierka1.jpg';
import zbierka2 from '../../assets/events/zbierka/zbierka2.jpg';
import zbierka3 from '../../assets/events/zbierka/zbierka3.jpg';

// Nemčianska cyklomotanica
import nemcianska2021 from '../../assets/nemcianska_2021.png';
import nemcianska2022 from '../../assets/nemcianska_2022.png';

// Šnúrka
import snurkaBeh from '../../assets/snurka_beh.png';
import snurkaDonovaly from '../../assets/snurka_donovaly.png';

// Káva
import kavaPhoto from '../../assets/kava_photo.jpeg';

const ALL_PHOTOS = [
  { src: akvarium1,      label: 'Akvárium',                        category: 'Akvárium',           to: '/akvarium' },
  { src: akvarium2,      label: 'Akvárium',                        category: 'Akvárium',           to: '/akvarium' },
  { src: akvarium3,      label: 'Akvárium',                        category: 'Akvárium',           to: '/akvarium' },
  { src: otvorenie,      label: 'Nervovo-svalové centrum',         category: 'Nervové centrum',    to: '/nervovo-svalove-centrum' },
  { src: mik2023_1,      label: 'Mikulášsky beh 2023 – Rebrina',  category: 'Mikulášsky beh',     to: '/mikulassky-beh' },
  { src: mik2023_2,      label: 'Mikulášsky beh 2023 – Rebrina',  category: 'Mikulášsky beh',     to: '/mikulassky-beh' },
  { src: mik2022_1,      label: 'Mikulášsky beh 2022',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2022' },
  { src: mik2022_2,      label: 'Mikulášsky beh 2022',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2022' },
  { src: mik2022_3,      label: 'Mikulášsky beh 2022',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2022' },
  { src: mik2021_1,      label: 'Mikulášsky beh 2021 – #Šnúrka',  category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2021' },
  { src: mik2021_2,      label: 'Mikulášsky beh 2021 – #Šnúrka',  category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2021' },
  { src: mik2020_1,      label: 'Mikulášsky beh 2020',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2020' },
  { src: mik2020_2,      label: 'Mikulášsky beh 2020',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2020' },
  { src: mik2019_1,      label: 'Mikulášsky beh 2019',             category: 'Mikulášsky beh',     to: '/mikulassky-beh#mikbeh2019' },
  { src: zbierka0,       label: 'Cystická fibróza',                category: 'Cystická fibróza',   to: '/cysticka-fibroza' },
  { src: zbierka1,       label: 'Cystická fibróza',                category: 'Cystická fibróza',   to: '/cysticka-fibroza' },
  { src: zbierka2,       label: 'Cystická fibróza',                category: 'Cystická fibróza',   to: '/cysticka-fibroza' },
  { src: zbierka3,       label: 'Cystická fibróza',                category: 'Cystická fibróza',   to: '/cysticka-fibroza' },
  { src: nemcianska2022, label: 'Nemčianska cyklomotanica 2022',   category: 'Cyklomotanica',      to: '/nemcianska-cyklomotanica' },
  { src: nemcianska2021, label: 'Nemčianska cyklomotanica 2021',   category: 'Cyklomotanica',      to: '/nemcianska-cyklomotanica' },
  { src: snurkaBeh,      label: '#Šnúrka',                         category: '#Šnúrka',            to: '/snurka' },
  { src: snurkaDonovaly, label: '#Šnúrka – Donovaly',              category: '#Šnúrka',            to: '/snurka' },
  { src: kavaPhoto,      label: 'Káva je vždy dobrý nápad',        category: 'Iné projekty',       to: '/kava-je-vzdy-dobry-napad' },
];

const CATEGORIES = ['Všetky', 'Akvárium', 'Mikulášsky beh', 'Cystická fibróza', 'Cyklomotanica', '#Šnúrka', 'Nervové centrum', 'Iné projekty'];

export default function Galeria() {
  const [filter, setFilter] = useState('Všetky');

  const visible = filter === 'Všetky'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter(p => p.category === filter);

  return (
    <Page>
      <Header>
        <Eyebrow>Naše fotky</Eyebrow>
        <PageTitle>Galéria</PageTitle>
        <InstagramLink href="https://www.instagram.com/smeneonka/" rel="noopener noreferrer" target="_blank">
          Ďalšie fotky na Instagrame →
        </InstagramLink>
      </Header>

      <FilterBar>
        <FilterScroll>
          {CATEGORIES.map(f => (
            <FilterBtn key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </FilterBtn>
          ))}
        </FilterScroll>
      </FilterBar>

      <Grid>
        {visible.map((photo, i) => (
          <PhotoCard key={i} to={photo.to}>
            <img src={photo.src} alt={photo.label} loading="lazy" />
            <Overlay>
              <OverlayLabel>{photo.label}</OverlayLabel>
              <OverlayArrow>→</OverlayArrow>
            </Overlay>
          </PhotoCard>
        ))}
      </Grid>
    </Page>
  );
}

const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;

  @media (max-width: 600px) { padding: 2rem 1rem 4rem; }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${pinkColor};
  margin: 0 0 0.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin: 0 0 1rem;

  @media (max-width: 600px) { font-size: 2.2rem; }
`;

const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${pinkColor};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.7; }
`;

const FilterBar = styled.div`
  margin-bottom: 2.5rem;
  position: relative;

  /* fade edges to hint scroll on mobile */
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40px;
    background: linear-gradient(to left, white, transparent);
    pointer-events: none;

    @media (min-width: 700px) { display: none; }
  }
`;

const FilterScroll = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  justify-content: center;
  flex-wrap: nowrap;
  padding-bottom: 2px; /* prevent clipping of focus rings */

  &::-webkit-scrollbar { display: none; }

  @media (max-width: 700px) {
    justify-content: flex-start;
    padding-right: 40px;
  }
`;

const FilterBtn = styled.button`
  background: ${({ active }) => (active ? pinkColor : '#f4f4f4')};
  color: ${({ active }) => (active ? 'white' : '#444')};
  border: none;
  border-radius: 100px;
  padding: 0.45rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;

  &:hover {
    background: ${({ active }) => (active ? pinkColor : '#e8e8e8')};
    transform: translateY(-1px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.6rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.25s ease;
`;

const OverlayLabel = styled.span`
  color: white;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.3;
  max-width: 80%;
`;

const OverlayArrow = styled.span`
  color: ${yellowColor};
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const PhotoCard = styled(Link)`
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #f0f0f0;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;
