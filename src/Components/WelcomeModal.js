import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';

import akvariumLogo from '../assets/akvarium-logo.png';
import qrPodpora from '../assets/qr_neonka_akvarium.png';

export default class WelcomeModal extends Component {
  updateLocation = (href) => {
    window.location.replace(href);
  };
  render() {
    return (
      <Modal visible={this.props.visible} effect="fadeInUp" onClickAway={this.props.closeModal}>
        <StyledModal>
          <img src={akvariumLogo} alt="Akvárium logo" style={{ maxWidth: '120px', margin: '0 auto 12px auto', display: 'block' }} />
          <h2 style={{ margin: '-5px', textAlign: 'center' }}>Zbierka „Akvárium“ pre detskú pľúcnu ambulanciu</h2>
          <div style={{ textAlign: 'center', fontWeight: 500 }}>
            Projekt Akvárium pomáha deťom s pľúcnymi ochoreniami k lepšej diagnostike a starostlivosti vďaka špeciálnemu prístroju. 
            Prispejte a pomôžte nám dofinancovať tento dôležitý prístroj pre detskú ambulanciu.
          </div>
          <DesktopSupportSection>
            <img src={qrPodpora} alt="QR kód pre podporu" style={{ maxWidth: 120, margin: '10px auto', display: 'block' }} />
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>SK72 0900 0000 0052 2909 7405</div>
          </DesktopSupportSection>
          <StyledButtons>
            <span
              onClick={() => {
                this.props.closeModal();
                window.location.replace('/akvarium');
              }}
            >
              Chcem sa dozvedieť viac
            </span>
            <span onClick={this.props.closeModal}>Pokračovať na stránku</span>
          </StyledButtons>
        </StyledModal>
      </Modal>
    );
  }
}

const StyledModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: ${colors.yellowColor};
  padding: 10px;
  border-radius: 5px;
  height: 60vh;
  @media (min-width: 700px) {
    max-width: 50vw;
  }
  @media (max-width: 699px) {
    max-width: 95vw;
  }
  div {
    text-align: center;
  }
  img {
    max-width: 50%;
    max-height: 50%;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  span {
    padding: 5px;
    border: 1px solid ${colors.pinkColor};
    border-radius: 5px;
    background: ${colors.pinkColor};
    margin: 10px 5px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: ${colors.yellowColor};
      color: ${colors.pinkColor};
    }
  }
`;

const DesktopSupportSection = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
    text-align: center;
    color: ${colors.pinkColor};
    font-size: 1em;
  }
`;

// const StyledText = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   a {
//     font-weight: bold;
//     color: ${colors.pinkColor} !important;
//   }
// `;
