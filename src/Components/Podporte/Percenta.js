import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
// import * as fonts from "../../style/fonts";

import percenta from '../../assets/percenta.jpg';

//Main component
export default class Percenta extends React.Component {
  render() {
    return (
      <>
        <StyledMidBanner id="percenta">
          <StyledDownload>
            <h2>Venujte svoje 2% a pomôžte chronicky chorým deťom</h2>
            <div>
              Vyplnené tlačivo si môžete stiahnuť tu:{' '}
              <a href="/files/tlacivo.pdf" download="tlacivo">
                Vyplnený forumlár na venovanie 2% daní
              </a>
            </div>
          </StyledDownload>
          <img src={percenta} alt="2% z dani" />
        </StyledMidBanner>
      </>
    );
  }
}

const StyledMidBanner = styled.div`
  padding-top: 70px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: ${colors.yellowColor};
  img {
    @media screen and (min-width: 1200px) {
      width: 65vw;
    }
    width: 100vw;
  }
  h2 {
    padding: 2px 10px;
    background-color: ${colors.pinkColor};
  }
`;

const StyledDownload = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.yellowColor};
  padding: 30px 0;
  a {
    color: ${colors.pinkColor} !important;
    text-decoration: underline !important;
  }
`;
