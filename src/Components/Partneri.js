import React from 'react';
import styled from 'styled-components';

//Assets

import rallyklub from '../assets/partners/rallyklub.jpg';
import koliba from '../assets/partners/kolibaozdany.png';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class Partneri extends React.Component {
    render() {
        return (
            <StyledContent>
                <StyledContentSection>
                    <StyledDescribtionCard>
                        <h3 className='heading'>Ďakujeme veľmi pekne naším partnerom! </h3>
                        <PartnersContainer>
                            <PartnersCard>
                                <a href='http://rallyshowds.sk' rel='noopener noreferrer' target='_blank'>
                                    <img src={rallyklub} alt='logo rally klubu dolna strehova'></img>
                                </a>
                            </PartnersCard>
                            <PartnersCard>
                                <a href='https://kolibaozdany.sk/' rel='noopener noreferrer' target='_blank'>
                                    <img src={koliba} alt='logo koliba ozdany'></img>
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
        padding: 3vw;
    }
`;

const StyledContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vh 0;
`;

const StyledDescribtionCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    .heading {
        color: ${colors.yellowColor};
    }
    @media screen and (max-width: 1000px) {
        padding-bottom: 50px;
    }
    h3 {
        font-size: ${fonts.subHeadingScreen};
        @media screen and (max-width: 500px) {
            font-size: ${fonts.subHeadingMobile};
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    a {
        &:hover {
            cursor: pointer;
        }
    }
`;

const PartnersCard = styled.div`
    width: 200px;
    margin: 0 5px;
    img {
        width: 100%;
    }
`;
