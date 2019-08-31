import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Asset
import logo_transparent from '../assets/logo_image.svg'

//Main component
export default class PodporteNas extends React.Component {
    render() {
        return (
            <StyledMidBanner>
                <h1 id='podporte'>Budeme vďačné za každú pomoc!</h1>
                <div>Číslo účtu: SK 96 1100 0000 0029 4507 2424</div>
                <div>IČO: 52301826</div>
            </StyledMidBanner>
        );
    }
}

const StyledMidBanner = styled.div`
    margin: 0vh 0 3vh 0;
    padding: 10vh 15vw;
    background-color: ${colors.yellowColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${logo_transparent}),url(${logo_transparent});
    background-repeat: repeat-x, repeat-x;
    background-position: top, bottom;
    background-size: 30px;



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
    div {
        font-size: ${fonts.textScreen};
        padding-top: 10px;
        text-align: center;
        font-weight: bold;
        @media screen and (max-width: 600px) {
            ont-size: ${fonts.textMobile};
        }
    }
`;
