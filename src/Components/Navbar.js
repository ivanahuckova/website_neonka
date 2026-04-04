import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import logoText from '../assets/logo_text.svg';
import { pinkColor, yellowColor } from '../style/colors';

const PROJEKTY_ACTIVE = [
  { label: 'Rebrina', to: '/rebrina' },
  { label: 'Káva je vždy dobrý nápad', to: '/kava-je-vzdy-dobry-napad' },
  { label: 'Vzdelávanie lekárov a sestier', to: '/vzdelavanie-lekarov-a-sestier' },
];

const PROJEKTY_PAST = [
  { label: 'Akvárium', to: '/akvarium' },
  { label: 'Nemčianska cyklomotanica', to: '/nemcianska-cyklomotanica' },
  { label: '#Šnúrka', to: '/snurka' },
  { label: 'Centrum nervovo-svalových ochorení', to: '/nervovo-svalove-centrum' },
  { label: 'Diagnostika cystickej fibrózy', to: '/cysticka-fibroza' },
  { label: 'Mikulášsky beh', to: '/mikulassky-beh' },
];

const ONAS_ITEMS = [
  { label: 'OZ Neónka', href: '/#team' },
  { label: 'Naše ciele', href: '/#ciele' },
  { label: 'Videli ste nás', href: '/#media' },
  { label: 'Kontakt', href: '/#kontakt' },
  { label: 'Facebook', href: 'https://www.facebook.com/neonkabanskabystrica', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileProjektyOpen, setMobileProjektyOpen] = useState(false);
  const [mobileOnasOpen, setMobileOnasOpen] = useState(false);
  const [mobilePrebehnuteOpen, setMobilePrebehnuteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileProjektyOpen(false);
    setMobileOnasOpen(false);
    setMobilePrebehnuteOpen(false);
  };

  return (
    <Nav data-scrolled={scrolled}>
      <NavInner>
        <Logo href="/" onClick={closeAll}>
          <img src={logoText} alt="Neónka" />
        </Logo>

        <DesktopLinks>
          <DropdownWrapper
            onMouseEnter={() => setActiveDropdown('projekty')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <DropdownTrigger data-scrolled={scrolled}>
              Projekty <Chevron data-open={activeDropdown === 'projekty'}>▾</Chevron>
            </DropdownTrigger>
            <DropdownPanel data-visible={activeDropdown === 'projekty'}>
              <DropdownCard>
                <DropdownArrow />
                {PROJEKTY_ACTIVE.map(item => (
                  <DropdownItem key={item.to} as={Link} to={item.to} onClick={() => setActiveDropdown(null)}>
                    {item.label}
                  </DropdownItem>
                ))}
                <DropdownDivider>Prebehnuté</DropdownDivider>
                {PROJEKTY_PAST.map(item => (
                  <DropdownItem key={item.to} as={Link} to={item.to} onClick={() => setActiveDropdown(null)}>
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownCard>
            </DropdownPanel>
          </DropdownWrapper>

          <DropdownWrapper
            onMouseEnter={() => setActiveDropdown('onas')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <DropdownTrigger data-scrolled={scrolled}>
              O nás <Chevron data-open={activeDropdown === 'onas'}>▾</Chevron>
            </DropdownTrigger>
            <DropdownPanel data-visible={activeDropdown === 'onas'}>
              <DropdownCard>
                <DropdownArrow />
                {ONAS_ITEMS.map(item => (
                  <DropdownItem
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownCard>
            </DropdownPanel>
          </DropdownWrapper>

          <NavLink as={Link} to="/podpora" data-scrolled={scrolled}>Podporte nás</NavLink>
          <NavLink as={Link} to="/formulare" data-scrolled={scrolled}>Formuláre</NavLink>
          <NavLink as={Link} to="/galeria" data-scrolled={scrolled}>Galéria</NavLink>
        </DesktopLinks>

        <HamburgerBtn
          data-open={mobileOpen}
          data-scrolled={scrolled}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerBtn>
      </NavInner>

      <MobileDrawer data-open={mobileOpen} data-scrolled={scrolled}>
        <MobileAccordion>
          <MobileAccordionTrigger
            onClick={() => setMobileProjektyOpen(v => !v)}
            aria-expanded={mobileProjektyOpen}
          >
            Projekty
            <Chevron data-open={mobileProjektyOpen}>▾</Chevron>
          </MobileAccordionTrigger>
          <MobileAccordionBody data-open={mobileProjektyOpen}>
            {PROJEKTY_ACTIVE.map(item => (
              <MobileLink key={item.to} href={item.to} onClick={closeAll}>{item.label}</MobileLink>
            ))}
            <MobileSubTrigger
              onClick={() => setMobilePrebehnuteOpen(v => !v)}
              aria-expanded={mobilePrebehnuteOpen}
            >
              Prebehnuté <Chevron data-open={mobilePrebehnuteOpen}>▾</Chevron>
            </MobileSubTrigger>
            <MobileAccordionBody data-open={mobilePrebehnuteOpen} nested>
              {PROJEKTY_PAST.map(item => (
                <MobileLink key={item.to} href={item.to} onClick={closeAll} nested>{item.label}</MobileLink>
              ))}
            </MobileAccordionBody>
          </MobileAccordionBody>
        </MobileAccordion>

        <MobileAccordion>
          <MobileAccordionTrigger
            onClick={() => setMobileOnasOpen(v => !v)}
            aria-expanded={mobileOnasOpen}
          >
            O nás
            <Chevron data-open={mobileOnasOpen}>▾</Chevron>
          </MobileAccordionTrigger>
          <MobileAccordionBody data-open={mobileOnasOpen}>
            {ONAS_ITEMS.map(item => (
              <MobileLink
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={closeAll}
              >
                {item.label}
              </MobileLink>
            ))}
          </MobileAccordionBody>
        </MobileAccordion>

        <MobileLink href="/podpora" onClick={closeAll} top>Podporte nás</MobileLink>
        <MobileLink href="/formulare" onClick={closeAll} top>Formuláre</MobileLink>
        <MobileLink href="/galeria" onClick={closeAll} top>Galéria</MobileLink>
      </MobileDrawer>
    </Nav>
  );
}

/* ─── Styled Components ─────────────────────────────────────────────────────── */

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  background-color: ${yellowColor};
  transition: background-color 0.4s ease, box-shadow 0.4s ease;

  &[data-scrolled='true'] {
    background-color: rgba(242, 54, 149, 0.96);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.12);
  }
`;

const NavInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  img {
    height: 58px;
    width: auto;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const sharedNavItemStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.45rem 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1a1a1a;
  transition: background 0.2s ease, color 0.2s ease;

  &[data-scrolled='true'] {
    color: white;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.07);
    color: #1a1a1a;
  }

  &[data-scrolled='true']:hover {
    background: rgba(255, 255, 255, 0.18);
    color: white;
  }
`;

const DropdownTrigger = styled.button`
  ${sharedNavItemStyles}
`;

const NavLink = styled.a`
  ${sharedNavItemStyles}
`;

const Chevron = styled.span`
  display: inline-block;
  font-size: 1em;
  line-height: 1;
  transition: transform 0.25s ease;

  &[data-open='true'] {
    transform: rotate(180deg);
  }
`;

const DropdownPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  /* padding-top bridges the visual gap so the mouse never leaves the wrapper */
  padding-top: 10px;
  min-width: 270px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 1100;

  &[data-visible='true'] {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`;

const DropdownCard = styled.div`
  position: relative;
  background: white;
  border-radius: 14px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.13);
  padding: 10px 0;
  overflow: hidden;
`;

const DropdownArrow = styled.div`
  position: absolute;
  top: -6px;
  left: 22px;
  width: 12px;
  height: 12px;
  background: white;
  transform: rotate(45deg);
  border-radius: 2px;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
`;

const DropdownItem = styled.a`
  display: block;
  padding: 9px 18px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(255, 219, 0, 0.3);
    color: ${pinkColor};
  }
`;

const DropdownDivider = styled.div`
  padding: 8px 18px 5px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #aaa;
  border-top: 1px solid #f0f0f0;
  margin-top: 4px;
`;

const HamburgerBtn = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 2.5px;
    border-radius: 2px;
    background: #1a1a1a;
    transition: transform 0.3s ease, opacity 0.3s ease, background 0.4s ease;
    transform-origin: center;
  }

  &[data-scrolled='true'] span {
    background: white;
  }

  &[data-open='true'] span:nth-child(1) {
    transform: translateY(7.75px) rotate(45deg);
  }

  &[data-open='true'] span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  &[data-open='true'] span:nth-child(3) {
    transform: translateY(-7.75px) rotate(-45deg);
  }
`;

const MobileDrawer = styled.div`
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s ease;
  background-color: ${yellowColor};
  overflow-y: auto;

  @media (max-width: 768px) {
    display: block;
  }

  &[data-open='true'] {
    max-height: calc(100vh - 70px);
  }

  &[data-scrolled='true'] {
    background-color: rgba(242, 54, 149, 0.97);
  }
`;

const MobileAccordion = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const MobileAccordionTrigger = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 15px 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #1a1a1a;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const MobileSubTrigger = styled(MobileAccordionTrigger)`
  padding: 11px 1.5rem 11px 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const MobileAccordionBody = styled.div`
  overflow: hidden;
  max-height: ${props => (props.nested ? '600px' : '800px')};
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.03);
  padding-left: ${props => (props.nested ? '1rem' : '0')};

  &[data-open='true'] {
    max-height: ${props => (props.nested ? '600px' : '800px')};
  }
`;

const MobileLink = styled.a`
  display: block;
  padding: ${props => {
    if (props.top) return '15px 1.5rem';
    if (props.nested) return '10px 2.5rem';
    return '11px 2rem';
  }};
  font-size: ${props => (props.top ? '1rem' : '0.9rem')};
  font-weight: ${props => (props.top ? '600' : '500')};
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${pinkColor};
  }
`;
