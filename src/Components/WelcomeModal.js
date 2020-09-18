import React, { Component } from "react";
import Modal from "react-awesome-modal";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../style/colors";

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
            Zbierka na kúpu hodinkového prístroja <br /> na rýchlu diagnostiku
            cystickej fibrózy
          </h2>
          <iframe
            width="350"
            height="197"
            src="https://www.youtube.com/embed/bLpMd881g-A"
            frameBorder="0"
            title="Video zbierky"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <StyledText>
            Číslo transparentného účtu zbierky je <br />
            <a href="https://www.transparentneucty.sk/#/ucet/SK9709000000005171611554">
              SK 97 0900 0000 0051 7161 1554
            </a>
          </StyledText>
          <StyledButtons>
            <span
              onClick={() => {
                this.props.closeModal();
                window.location.replace("/cysticka-fibroza");
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
  div {
    text-align: center;
  }
  iframe {
    margin-bottom: 10px;
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
