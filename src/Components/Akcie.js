import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Import icons/images
// import neonkaBeh from '../assets/neonka_beh.svg';
import bannerBeh from '../assets/banner_beh.jpg';

const url = 'https://www.activeplanet.sk/podujatie/charitativny-mikulassky-beh-b-bystrica-7122019-6rocnik/registracia'



//Main component
export default class Akcie extends React.Component {
    render() {
        return (
            <StyledMidBanner>
                <h1 id='akcie'>Charitatívny Mikulášsky beh</h1>
                <div className="banner"><img alt="plagat behu" src={bannerBeh} /></div>
                {/* <div><a href={url} target="_self"><img alt="neonka beh" src={neonkaBeh} /></a></div> */}
                <div>7.12.2019 o 16:00 pred BB ESC </div>
                <div><a href={url} target="_self">Registrácia</a></div>
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
