import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
// import * as fonts from "../../style/fonts";

//Main components
export default class Formulate extends React.Component {
  render() {
    return (
      <>
        <StyledMidBanner id="formulare">
          <StyledDownload>
            <div>
            <h1>Formuláre na stiahnutie</h1>
            <div >
            <div>
              <a href="/files/formular_nutricna_terapia.docx" download="Formulár na nutričnú terapiu">
               Formulár na nutričnú terapiu
              </a>
            </div>
            <div>
              <a href="/files/formular_rebrina.docx" download="Formulár na rebrinu">
              Formulár Rebrina
              </a>
            </div>
            <div>
              <a href="/files/formular_neonka.docx" download="Formulár Neonka - liečba">
              Formulár Neonka - liečba
              </a>
            </div>
            <div>
              <a href="/files/formular_neopedia.docx" download="Formulár Neonka - Žiadosť na preplatenie vzdelávania">
                Žiadosť na preplatenie vzdelávania
              </a>
            </div>
            
            </div>
            </div>
          </StyledDownload>
        </StyledMidBanner>
      </>
    );
  }
}

const StyledMidBanner = styled.div`
  padding-top: 70px;
  flex-direction: column;
  display: flex;
  // justify-content: center;
  // align-items: center;
  font-weight: bold;
  background-color: ${colors.yellowColor};
  h2 {
    padding: 2px 10px;
    background-color: ${colors.pinkColor};
  }
`;

const StyledDownload = styled.div`
  flex-direction: column;
  display: flex;
  //justify-content: center;
  align-items: center;
  // text-align: center;
  background-color: ${colors.yellowColor};
  padding: 100px 0;
  height: 100vh;
  a {
    color: ${colors.pinkColor} !important;
    text-decoration: underline !important;
    font-size: 21px; 
  }
`;
