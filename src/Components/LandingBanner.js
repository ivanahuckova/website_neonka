import React from 'react';
import styled from 'styled-components';

//Import icons/images
import neonkaImg from '../assets/logo_animated.svg';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class LandingBanner extends React.Component {
    render() {
        return (
            <StyledLandingBanner>
                <LandingHeader>
                    <h1>
                        Vitajte na našej stránke <span className='pink'>Neónky!</span>
                    </h1>
                    <div>
                        Sme občianske združenie na pomoc detským pacientom s neonkologickými, často veľmi závažnými ochoreniami. Pomáhame hospitalizovaným deťom na detskom oddelení v Detskej fakultnej
                        nemocnici v Banskej Bystrici a deťom v ambulantnej starostlivosti našej nemocnice. Neónka je známa tým, že svieti v tme. A aj my chceme byť takýmto svetielkom pre všetky choré
                        deti a ich rodiny.
                    </div>
                </LandingHeader>
                <LandingBubble>
                    <img className='banner' src={neonkaImg} alt='neonka logo' />
                </LandingBubble>
                <LandingBubbleSmall>
                    <img className='banner-small' src={neonkaImg} alt='neonka logo' />
                </LandingBubbleSmall>
            </StyledLandingBanner>
        );
    }
}

const StyledLandingBanner = styled.div`
    margin-top: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    @media screen and (max-width: 600px) {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-top: 130px;
    }
    .banner {
        width: 100%;
        @media screen and (max-width: 1000px) {
            height: 20vw;
            width: 20vw;
        }
    }
`;

const LandingBubbleSmall = styled.div`
    display: none;
    @media screen and (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 30vw;
        img {
            width: 100%;
            margin: 40px;
        }
    }
    @media screen and (max-width: 600px) {
            width: 50vw;
        }
`;

const LandingBubble = styled.div`
    height: 18vw;
    width: 18vw;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1300px) {
        height: 18vw;
        width: 18vw;
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
        width: 100%;
        text-align: left;
    }
    @media screen and (max-width: 600px) {
        margin-bottom: 10px;
    }
    div {
        font-size: 1.2rem;
        padding: 10px 0;
        @media screen and (max-width: 500px) {
            font-size: 1.1rem;
        }
    }
    h1 {
        font-size: ${fonts.mainHeadingScreen};
        @media screen and (max-width: 500px) {
            font-size: ${fonts.mainHeadingMobile};
        }
    }
    .pink {
        color: ${colors.pinkColor};
    }
`;
