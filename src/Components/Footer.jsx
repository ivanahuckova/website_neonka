import React from 'react';
import styled from 'styled-components';
import { pinkColor } from '../style/colors';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterInner>
        <OrgBlock>
          <OrgName>OZ Neónka</OrgName>
          <Address>
            DFNsP BB Námestie Ludvika Svobodu 4
            <Dot>·</Dot>
            Banská Bystrica 974 09
          </Address>
        </OrgBlock>
        <LinksBlock>
          <FooterLink href="mailto:smeneonka@gmail.com">
            smeneonka@gmail.com
          </FooterLink>
          <Dot>·</Dot>
          <FooterLink
            href="https://www.facebook.com/neonkabanskabystrica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </FooterLink>
          <Dot>·</Dot>
          <FooterLink
            href="https://www.instagram.com/smeneonka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </FooterLink>
        </LinksBlock>
      </FooterInner>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #f5f5f5;
  color: #888;
  padding: 1rem 4vw;
`;

const FooterInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const OrgBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const OrgName = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${pinkColor};
`;

const Address = styled.address`
  font-style: normal;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  font-size: 0.85rem;
  font-weight: 600;
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${pinkColor};
  }
`;

const Dot = styled.span`
  opacity: 0.35;
  font-size: 0.8rem;
`;
