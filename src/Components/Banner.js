import React from 'react';
import styled from 'styled-components';

//Import icons/images
import neonkaLogo from '../assets/logo_text.svg';
import neonkaImg from '../assets/logo_image.svg';

//Import components

//Colors
import { yellowColor, pinkColor } from '../colors/colors';

//Main component
export default class Banner extends React.Component {
    render() {
        return (
            <StyledLandingBanner>
                <LandingHeader>
                    <h1>Ahojte a vitajte na našej stránke!</h1>
                    <div>
                        Sme Neónka, občianske združenie na pomoc detským pacientom II.Detskej kliniky DFNsP v Banskej Bystrici. Sme Neónka, občianske združenie na pomoc detským pacientom II.Detskej
                        kliniky DFNsP v Banskej Bystrici.
                    </div>
                </LandingHeader>
                <LandingBubble>
                    <img className='banner' src={neonkaLogo} alt='neonka logo' />
                </LandingBubble>
                <img className='banner-small' src={neonkaImg} alt='neonka logo' />
            </StyledLandingBanner>
        );
    }
}

const StyledLandingBanner = styled.div`
    margin: 0vh 0 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    @media screen and (max-width: 1000px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @media screen and (max-width: 800px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .banner {
        width: 100%;
        @media screen and (max-width: 1000px) {
            height: 20vw;
            width: 20vw;
        }
    }
    .banner-small {
        display: none;
        @media screen and (max-width: 1000px) {
            display: block;
            width: 30vw;
        }
    }
`;

const LandingBubble = styled.div`
    height: 20vw;
    width: 20vw;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;

    @media screen and (max-width: 1300px) {
        height: 25vw;
        width: 25vw;
    }

    @media screen and (max-width: 1000px) {
        width: 0;
        height: 0;
        display: none;
    }
`;

const LandingHeader = styled.div`
    width: 60%;
    line-height: 1.6;
    @media screen and (max-width: 1000px) {
        width: 75%;
        text-align: center;
    }
    @media screen and (max-width: 800px) {
        margin-top: 5vh;
        width: 80%;
    }
    div {
        font-size: 1.2rem;
        padding: 10px 0;
    }
    h1 {
        font-size: 2.5rem;
        @media screen and (max-width: 400px) {
            font-size: 2rem;
        }
    }
`;
