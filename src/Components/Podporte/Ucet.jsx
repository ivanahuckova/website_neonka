import React from 'react';
import styled from 'styled-components';

import { pinkColor, yellowColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';
import qrPodpora from '../../assets/qr_podpora.png';

export default function Ucet() {
  const ref = useReveal();

  return (
    <Section id="podporte">
      <Inner ref={ref} className="reveal">
        <Left>
          <Badge>Pomôžte nám</Badge>
          <Headline>Budeme vďačné za každú vašu pomoc</Headline>
          <Subline>Vaša podpora priamo pomáha deťom s chronickými ochoreniami v Banskej Bystrici.</Subline>

          <AccountCard>
            <OrgName>OZ Neónka</OrgName>
            <Row>
              <RowLabel>Číslo účtu</RowLabel>
              <RowValue>SK 96 1100 0000 0029 4507 2424</RowValue>
            </Row>
            <Row>
              <RowLabel>IČO</RowLabel>
              <RowValue>52301826</RowValue>
            </Row>
          </AccountCard>
        </Left>

        <Right>
          <QrLabel>Naskenujte QR kód</QrLabel>
          <QrImg src={qrPodpora} alt="QR kód na podporu" />
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: white;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Badge = styled.span`
  display: inline-block;
  background: ${yellowColor};
  color: #1a1a1a;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
`;

const Headline = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 0.75rem;
  color: #1a1a1a;

  @media (max-width: 600px) { font-size: 1.9rem; }
`;

const Subline = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin: 0 0 2rem;
`;

const AccountCard = styled.div`
  background: #f7f7f7;
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OrgName = styled.div`
  color: ${pinkColor};
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.97rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
  }
`;

const RowLabel = styled.span`
  font-weight: 600;
  color: #888;
  white-space: nowrap;
`;

const RowValue = styled.span`
  font-weight: 700;
  color: #1a1a1a;
  font-variant-numeric: tabular-nums;
  word-break: break-all;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`;

const QrLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`;

const QrImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 16px;
  object-fit: contain;
  display: block;
`;
