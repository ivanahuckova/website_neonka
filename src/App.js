import React from 'react';
import styled from 'styled-components';

//Styling
import './App.css';

//Colors
import { yellowColor, pinkColor } from './style/colors';



//Import components
import Navbar from './Components/Navbar';
import LandingBanner from './Components/LandingBanner';
import Ciele from './Components/Ciele';
import NasiPacienti from './Components/NasiPacienti';
import Media from './Components/Media';
import Partneri from './Components/Partneri';
import PodporteNas from './Components/PodporteNas';
import ONas from './Components/ONas';

import Footer from './Components/Footer';

function App() {

    return (
        <div>
            <StyledLandingContainer>
                <TopLandingContainer>
                    <Navbar />
                    <LandingBanner />
                </TopLandingContainer>
                <Ciele />
                <PodporteNas />
                <ONas />
                <Media />
                <Partneri />
                <NasiPacienti />
                <Footer />
            </StyledLandingContainer>
        </div>
    );
}

export default App;

const StyledLandingContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    letter-spacing: 1.1;
    line-height: 1.7;
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: ${pinkColor};
        }
    }
`;

const TopLandingContainer = styled.div`
    height: 75vh;
    padding: 0 15vw;
    display: flex;
    flex-direction: column;
    &::after {
        content: '';
        background-color: ${yellowColor};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 70px;
        -webkit-transform: skewY(3deg);
        -ms-transform: skewY(3deg);
        transform: skewy(-7deg);
        -webkit-transform-origin: 70%;
        -ms-transform-origin: 70%;
        transform-origin: 0;
        z-index: -1;
    }
    @media screen and (max-width: 1500px) {
        padding: 0 10vw;
    }

    @media screen and (max-width: 1000px) {
        height: 100vh;
    }
    @media screen and (max-width: 800px) {
        padding: 0 7vw;
    }
    @media screen and (max-width: 600px) {
        &::after {
            content: '';
            bottom: -200px;
        }
    }

    @media screen and (max-width: 400px) {
        padding: 0 7vw;
    }
`;
