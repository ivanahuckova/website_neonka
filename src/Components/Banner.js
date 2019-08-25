import React from 'react';
import styled from 'styled-components';

//Import icons/images
import neonkaImg from '../assets/logo_image.svg';

//Colors
import { pinkColor } from '../colors/colors';

//Main component
export default class Banner extends React.Component {
    render() {
        return (
            <StyledLandingBanner>
                <LandingHeader>
                    <h1>
                        Ahojte a vitajte na našej stránke <span className='pink'>Neónky!</span>
                    </h1>
                    <div>
                        Sme občianske združenie na pomoc detským pacientom s neonkologickými, často veľmi závažnými ochoreniami. Pomáhame hospitalizovaným deťom na detskom oddelení v Detskej fakultnej
                        nemocnici v Banskej Bystrici a deťom v ambulantnej starostlivosti našej nemocnice.
                    </div>
                </LandingHeader>
                <LandingBubble>
                    <img className='banner' src={neonkaImg} alt='neonka logo' />
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
        text-align: left;
    }
    div {
        font-size: 1.2rem;
        padding: 10px 0;
        @media screen and (max-width: 500px) {
            font-size: 1.1rem;
        }
    }
    h1 {
        font-size: 2.5rem;
        @media screen and (max-width: 500px) {
            font-size: 1.8rem;
        }
    }
    .pink {
        color: ${pinkColor};
    }
`;
