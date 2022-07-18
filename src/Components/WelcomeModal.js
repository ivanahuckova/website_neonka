import React, { Component } from "react";
import Modal from "react-awesome-modal";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../style/colors";

import modal from "../assets/snurka_beh.jpg";

export default class WelcomeModal extends Component {
  updateLocation = (href) => {
    window.location.replace(href);
  };
  render() {
    return (
      <Modal
        visible={this.props.visible}
        effect="fadeInUp"
        onClickAway={() => this.props.closeModal()}
      >
        <StyledModal>
          <h2 style={{ margin: "10px", textAlign: "center" }}>
            24 hodinový charitatívny beh ŠNÚRKA
          </h2>
          <img src={modal} alt="Beh ŠNÚRKA" />
          <StyledButtons>
            <span
              onClick={() => {
                this.props.closeModal();
                window.location.replace("/snurka");
              }}
            >
              Chcem sa dozvedieť viac
            </span>
            <span onClick={() => this.props.closeModal()}>
              Pokračovať na stránku
            </span>
          </StyledButtons>
        </StyledModal>
      </Modal>
    );
  }
}

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colors.yellowColor};
  padding: 10px;
  border-radius: 5px;
  height: 60vh;
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
    margin: 20px 5px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: ${colors.yellowColor};
      color: ${colors.pinkColor};
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    font-weight: bold;
    color: ${colors.pinkColor} !important;
  }
`;
