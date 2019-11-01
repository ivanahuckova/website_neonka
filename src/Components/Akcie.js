import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Import icons/images
import neonkaBeh from '../assets/neonka_beh.svg';

const url = 'https://www.activeplanet.sk/clanok/ked-sa-neonka-zoznami-s-mikulasom?fbclid=IwAR13Zcqhl0tploGJM1tE5uNSqJ7uQsSO-jV_3zniUVydWsHT6JdotWw2CeM'



//Main component
export default class Akcie extends React.Component {
    render() {
        return (
            <StyledMidBanner>
                <h1 id='akcie'>Nasledujúce charitatívne akcie</h1>
                <div><a href={url} target="_self"><img alt="neonka beh" src={neonkaBeh} /></a></div>
                <div className="heading">Charitatívny Mikulášsky beh</div>
                <div>7.12.2019 o 16:00 pred BB ESC </div>
                <div><a href={url} target="_self">Viac o behu</a></div>
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
    .heading {
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
