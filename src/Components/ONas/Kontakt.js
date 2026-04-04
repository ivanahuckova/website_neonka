import React from 'react';
import styled from 'styled-components';

import { pinkColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

export default function Kontakt() {
  const ref = useReveal();

  return (
    <Section id="kontakt">
      <Inner ref={ref} className="reveal">
        <Heading>Kontakt</Heading>
        <AddressBlock>
          <strong>OZ Neónka</strong>
          <br />
          Námestie Ludvika Svobodu 4
          <br />
          97409 Banská Bystrica
          <br />
          Slovakia
        </AddressBlock>
        <EmailLink href="mailto:smeneonka@gmail.com">
          smeneonka@gmail.com
        </EmailLink>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 12vw;

  @media (max-width: 1500px) { padding: 0 8vw; }
  @media (max-width: 800px)  { padding: 0 6vw; }
  @media (max-width: 400px)  { padding: 0 5vw; }
`;

const Inner = styled.div`
  padding: 5rem 0;
`;

const Heading = styled.h3`
  color: ${pinkColor};
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem;

  @media (max-width: 500px) { font-size: 2rem; }
`;

const AddressBlock = styled.address`
  font-size: 1.1rem;
  line-height: 1.9;
  font-style: normal;
  margin: 0 0 1rem;
`;

const EmailLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${pinkColor};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
