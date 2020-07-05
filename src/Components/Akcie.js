import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Import icons/images
// import eventBanner from '../assets/event_banner.jpg';
// import neonka from '../assets/logo_image.svg';

// const url = 'https://bystrica.dnes24.sk/slachetny-cin-bystrickych-gymnazistov-takto-sa-rozhodli-pomoct-detom-priputanym-na-lozka-348436?fbclid=IwAR3Ijn8mA7dLaord_ErvzyaEc5o8R03rXVZBoxyS21VhpdzAwWG0_0VS1vY'



//Main component
export default class Akcie extends React.Component {
    constructor() {
        super();
        this.state = {
            size: null,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        this.setState({size: window.innerWidth });
    }
    render() {
        const { size } = this.state
        return (
            <StyledMidBanner id='novinky'>
                <h1>Na čom práve pracujeme</h1>
                <div>Aj vďaka Vašej podpore, za ktorú veľmi ďakujeme sa chystáme sa otvárať Stredoslovenské centrum pre diagnostiku a liečbu nervovosvalových ochorení v detskom veku. Pre viac informácií sleduje náš <a href="https://www.facebook.com/neonkabanskabystrica/">Facebook</a>.</div>
            </StyledMidBanner>
        );
    }
}

const StyledMidBanner = styled.div`
    margin: 0;
    padding: 10vh 20vw;
    background-color: ${colors.yellowColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    iframe {
        margin-top: 20px;
    }

    @media screen and (max-width: 1500px) {
        padding: 10vh 15vw;
    }
    @media screen and (max-width: 700px) {
        padding: 10vh 5vw;
    }
    .bold {
        font-weight: bold;
    }
    .logo {
        width: 94px;
    }
    a {
        color: ${colors.pinkColor};
        font-weight: bold;
    }
    img {
        width: 100%;
    }
    h1 {
        font-size: ${fonts.mainHeadingScreen};
        text-align: center;
        @media screen and (max-width: 600px) {
            font-size: ${fonts.mainHeadingMobile};
        }
    }
    h2 {
        margin-top: 0;
        font-size: ${fonts.subHeadingScreen};
        text-align: center;
        @media screen and (max-width: 600px) {
            font-size: ${fonts.subHeadingMobile};
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
