import React from 'react';
import styled from 'styled-components';

//Assets

import rallyklub from '../../assets/partners/rallyklub.jpg';
import koliba from '../../assets/partners/kolibaozdany.png';
import cincuacik from '../../assets/partners/cincuacik.png';
import invelity from '../../assets/partners/invelity.png';
import modrapupava from '../../assets/partners/modrapupava.png';
import activeplanet from '../../assets/partners/activeplanet.jpg';
import crazywomen from '../../assets/partners/crazywomen.jpg';
import panpagacik from '../../assets/partners/panpagacik.jpeg';
import nemcianskacyklomotanica from '../../assets/partners/nemcianskacyklomotanica.png';
import akkord from '../../assets/partners/akkord.jpg';
import luna from '../../assets/partners/luna.png';
import magurazborov from '../../assets/partners/magurazborov.jpg';
import staratrznica from '../../assets/partners/staratrznica.png';
import straznianjeli from '../../assets/partners/strazni_anjeli.png';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

//Main component
export default class Partneri extends React.Component {
  render() {
    return (
      <StyledContent id="partneri">
        <StyledContentSection>
          <StyledDescribtionCard>
            <h3 className="heading">Ďakujeme naším partnerom</h3>
            <PartnersContainer>
              <PartnersCard>
                <a href="http://cincuacik.sk" rel="noopener noreferrer" target="_blank">
                  <img src={cincuacik} alt="logo cincuacik"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="http://rallyshowds.sk" rel="noopener noreferrer" target="_blank">
                  <img src={rallyklub} alt="logo rally klubu dolna strehova"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://kolibaozdany.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={koliba} alt="logo koliba ozdany"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://invelity.com/" rel="noopener noreferrer" target="_blank">
                  <img src={invelity} alt="logo invelity"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://modrapupava.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={modrapupava} alt="logo modra pupava"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://www.activeplanet.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={activeplanet} alt="logo active planet"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a
                  href="https://www.katarinabelicova.sk/mili-priatelia-sportu-a-o-z-crazy-woman-active-planet/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={crazywomen} alt="logo crazy women"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://www.instagram.com/panpagacik" rel="noopener noreferrer" target="_blank">
                  <img src={panpagacik} alt="logo pan pagacik"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://mtbliga.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={nemcianskacyklomotanica} alt="WELDTITE Nemčianska cyklomotanica"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://harmoniachuti.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={akkord} alt="harmonia chuti logo"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://lunastudio.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={luna} alt="luna logo"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://www.facebook.com/staratrznica.bb" rel="noopener noreferrer" target="_blank">
                  <img src={staratrznica} alt="staratrznica logo"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://www.facebook.com/tjmagura.zborov" rel="noopener noreferrer" target="_blank">
                  <img src={magurazborov} alt="magurazborov logo"></img>
                </a>
              </PartnersCard>
              <PartnersCard>
                <a href="https://www.straznianjeli.sk/" rel="noopener noreferrer" target="_blank">
                  <img src={straznianjeli} alt="oz strazni anjeli presov logo"></img>
                </a>
              </PartnersCard>
            </PartnersContainer>
          </StyledDescribtionCard>
        </StyledContentSection>
      </StyledContent>
    );
  }
}

const StyledContent = styled.div`
  padding: 0 15vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1500px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 800px) {
    padding: 0 5vw;
    margin-top: 0vh;
  }
  @media screen and (max-width: 400px) {
    padding: 7vw;
    padding-bottom: 3vw;
  }
`;

const StyledContentSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15vh 0;
`;

const StyledDescribtionCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .heading {
    color: ${colors.pinkColor};
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1000px) {
    padding-bottom: 50px;
  }
  h3 {
    font-size: ${fonts.mainHeadingScreen};
    @media screen and (max-width: 500px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  .content-div {
    font-size: ${fonts.textScreen};
    padding-bottom: 30px;
    text-align: center;
    @media screen and (max-width: 1200px) {
      padding-bottom: 10px;
    }
    @media screen and (max-width: 600px) {
      font-size: ${fonts.textMobile};
    }
    .pink {
      color: ${colors.pinkColor};
      font-weight: bold;
    }

    li {
      margin-top: 15px;
      .main-part {
        font-weight: bold;
      }
    }
  }
`;

const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  a {
    filter: grayscale(100%);
    &:hover {
      cursor: pointer;
      filter: grayscale(0);
    }
  }
`;

const PartnersCard = styled.div`
  height: 100px;
  margin: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    margin: 50px;
    width: 150px;
  }
  @media screen and (max-width: 400px) {
    margin: 30px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
