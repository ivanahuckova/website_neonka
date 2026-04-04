import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { pinkColor, yellowColor } from '../style/colors';
import percenta from '../assets/2percent.png';

export default function WelcomeModal({ visible, onClickAway, closeModal }) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  const handleLearnMore = () => {
    closeModal();
    window.location.href = '/podpora#percenta';
  };

  return (
    <Overlay onClick={onClickAway}>
      <ModalCard onClick={e => e.stopPropagation()}>
        <PinkBar>
          <h2>Venujte svoje 2% a pomôžte chronicky chorým deťom</h2>
        </PinkBar>
        <ModalBody>
          <PercentaImage src={percenta} alt="2% z daní" />
          <DownloadText>
            Vyplnené tlačivo si môžete stiahnuť tu:{' '}
            <a href="/files/Vyhlasenie-2025-neonka.pdf" download="Vyhlasenie-2025-neonka">
              Vyplnený formulár na venovanie 2% daní
            </a>
          </DownloadText>
          <ButtonRow>
            <PrimaryBtn onClick={handleLearnMore}>Chcem sa dozvedieť viac</PrimaryBtn>
            <SecondaryBtn onClick={closeModal}>Pokračovať na stránku</SecondaryBtn>
          </ButtonRow>
        </ModalBody>
        <CloseBtn onClick={closeModal} aria-label="Zavrieť">✕</CloseBtn>
      </ModalCard>
    </Overlay>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.25s ease;
`;

const ModalCard = styled.div`
  position: relative;
  background: ${yellowColor};
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  animation: ${slideUp} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

const PinkBar = styled.div`
  background: ${pinkColor};
  padding: 18px 24px 16px;

  h2 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 800;
    color: white;
    line-height: 1.4;
    text-align: center;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 28px 28px;
  gap: 18px;
`;

const PercentaImage = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  border-radius: 10px;
`;

const DownloadText = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  color: #1a1a1a;
  line-height: 1.5;

  a {
    color: ${pinkColor};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const baseBtn = `
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid ${pinkColor};
  transition: background 0.2s ease, color 0.2s ease;
  text-align: center;
  white-space: nowrap;
`;

const PrimaryBtn = styled.button`
  ${baseBtn}
  background: ${pinkColor};
  color: white;

  &:hover {
    background: transparent;
    color: ${pinkColor};
  }
`;

const SecondaryBtn = styled.button`
  ${baseBtn}
  background: transparent;
  color: ${pinkColor};

  &:hover {
    background: ${pinkColor};
    color: white;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  color: white;
  font-size: 1rem;
  line-height: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.45);
  }
`;
