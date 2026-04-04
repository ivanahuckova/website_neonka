import React from 'react';
import styled from 'styled-components';
import { pinkColor, yellowColor } from '../style/colors';

const downloads = [
  { href: '/files/formular_nutricna_terapia.docx', label: 'Formulár na nutričnú terapiu', filename: 'Formulár na nutričnú terapiu' },
  { href: '/files/formular_rebrina.docx', label: 'Formulár Rebrina', filename: 'Formulár Rebrina' },
  { href: '/files/formular_neonka.docx', label: 'Formulár Neonka – liečba', filename: 'Formulár Neonka - liečba' },
  { href: '/files/formular_neopedia.docx', label: 'Žiadosť na preplatenie vzdelávania', filename: 'Formulár Neonka - Žiadosť na preplatenie vzdelávania' },
];

export default function Formulare() {
  return (
    <Page id="formulare">
      <Inner>
        <Heading>Formuláre na stiahnutie</Heading>
        <List>
          {downloads.map(({ href, label, filename }) => (
            <Item key={href}>
              <DownloadLink href={href} download={filename}>
                <Icon aria-hidden="true">↓</Icon>
                {label}
              </DownloadLink>
            </Item>
          ))}
        </List>
      </Inner>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  background: ${yellowColor};
  padding: 2.5rem 2rem 5rem;
`;

const Inner = styled.div`
  max-width: 560px;
  width: 100%;
  margin: 40px auto 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li``;

const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${pinkColor};
    color: white !important;
    transform: translateX(4px);
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${yellowColor};
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 700;
  flex-shrink: 0;
  color: #1a1a1a;
`;
