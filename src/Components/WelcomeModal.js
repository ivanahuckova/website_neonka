import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';

import percenta from '../assets/2percent.png';

export default class WelcomeModal extends Component {
  render() {
    return (
      <Modal visible={this.props.visible} effect="fadeInUp" onClickAway={this.props.closeModal}>
        <StyledModal>
          <h2>Venujte svoje 2% a pomôžte chronicky chorým deťom</h2>
          <img src={percenta} alt="2% z daní" />
          <div style={{ textAlign: 'center', fontWeight: 500 }}>
            Vyplnené tlačivo si môžete stiahnuť tu:{' '}
            <a href="/files/Vyhlasenie-2025-neonka.pdf" download="Vyhlasenie-2025-neonka">
              Vyplnený formulár na venovanie 2% daní
            </a>
          </div>
          <StyledButtons>
            <span
              onClick={() => {
                this.props.closeModal();
                window.location.replace('/podpora#percenta');
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
  h2 {
    padding: 2px 10px;
    background-color: ${colors.pinkColor};
    text-align: center;
    margin: 5px 0;
  }
  a {
    color: ${colors.pinkColor} !important;
    text-decoration: underline !important;
    font-weight: bold;
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
