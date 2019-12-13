import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Import icons/images
// import neonkaBeh from '../assets/neonka_beh.svg';
import eventBanner from '../assets/event_banner.jpg';

const url = 'https://bystrica.dnes24.sk/slachetny-cin-bystrickych-gymnazistov-takto-sa-rozhodli-pomoct-detom-priputanym-na-lozka-348436?fbclid=IwAR3Ijn8mA7dLaord_ErvzyaEc5o8R03rXVZBoxyS21VhpdzAwWG0_0VS1vY'



//Main component
export default class Akcie extends React.Component {
    render() {
        return (
            <StyledMidBanner>
                <h1 id='akcie'>Tajácky Benefičný Punč</h1>
                <div className="banner"><img alt="plagat beneficneho puncu" src={eventBanner} /></div>
                <div>17.12.2019 o 16:00 - 19:00</div>
                <div>Gymnázium J. G. Tajovského v Banskej Bystrici</div>
                <div><a href={url} rel="noopener noreferrer" target="_blank">Viac</a></div>
            </StyledMidBanner>
        );
    }
}

const StyledMidBanner = styled.div`
    margin: 0;
    padding: 10vh 15vw;
    background-color: ${colors.yellowColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1500px) {
        padding: 10vh 10vw;
    }
    h1 {
        font-size: ${fonts.mainHeadingScreen};
        text-align: center;
        @media screen and (max-width: 600px) {
            font-size: ${fonts.mainHeadingMobile};
        }
    }
    .banner {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        @media screen and (max-width: 600px) {
            width: 95%;
        }
        img {
            width: 100%;
        }
    }
    div {
        font-size: ${fonts.textScreen};
        padding-top: 10px;
        text-align: center;
        font-weight: bold;
        @media screen and (max-width: 600px) {
            ont-size: ${fonts.textMobile};
        }
        a {
          color: ${colors.pinkColor};
          &:hover {
            cursor: pointer;
          }
        }
    }
`;
