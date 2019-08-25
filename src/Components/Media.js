import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class Media extends React.Component {
    render() {
        return (
            <StyledContent>
                <StyledContentSection>
                    <StyledDescribtionCard>
                        <h3 className='heading' id='media'>
                            Mohli ste nás vidieť:{' '}
                        </h3>
                        <div className='content-div'>
                            <a href='https://videoarchiv.markiza.sk/video/televizne-noviny/epizoda/23896-televizne-noviny/15-pribeh-dobra'>
                                Reportáž Markízy o našej benefičnej akcii Rally Show v Solnej Strehovej
                            </a>
                        </div>
                        <div className='content-div'>
                            <a href='https://www.bystricoviny.sk/bystricoviny-tv/rally-show-v-dolnej-strehovej-podpori-pacientov-bystrickej-detskej-nemocnice-cez-neonku/?fbclid=IwAR1ovErhKlLrF7tu_jNV2Q0LNMLch-4pjpD4ztBjhr3MkLyhQ6Y_-mVwqR0'>
                                Článok v Bystricoviny.sk o našej benefičnej akcii Rally Show v Solnej Strehovej
                            </a>
                        </div>
                    </StyledDescribtionCard>
                </StyledContentSection>
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    background-color: ${colors.pinkColor};
    padding: 0 15vw;
    display: flex;
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
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 10vh 0;
`;

const StyledDescribtionCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    .heading {
        color: white;
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
        text-align: left;
        @media screen and (max-width: 1200px) {
            padding-bottom: 10px;
        }
        @media screen and (max-width: 600px) {
            font-size: ${fonts.textMobile};
        }
        a {
            text-decoration: underline;
            color: white;
            &:hover {
                color: ${colors.yellowColor};
            }
        }
        .pink {
            font-weight: bold;
        }

        li {
            margin-top: 15px;
            .main-part {
                font-weight: bold;
            }
            @media screen and (max-width: 500px) {
                font-size: ${fonts.textMobile};
            }
        }
    }
`;
