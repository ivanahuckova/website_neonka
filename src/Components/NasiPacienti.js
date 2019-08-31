import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class NasiPacienti extends React.Component {
    render() {
        return (
            <StyledContent>
                <StyledContentSection>
                    <StyledDescribtionCard>
                        <h3 className='heading'>Komu pomáhame</h3>
                        <div className='content-div'>
                            <ul>
                                <li>
                                    <span className='main-part'>neurologickí pacienti</span> (detská mozgová obrna DMO, epilepsie, genetické syndrómy, pacienti s porušenou miechou po úraze,...)
                                </li>
                                <li>
                                    <span className='main-part'>nefrologickí pacienti</span> - pacienti s poruchou obličiek (nefrotický syndróm, glomerulonefritídy, tubulopatie, obličkové
                                    zlyhania,...)
                                </li>
                                <li>
                                    <span className='main-part'>metabolickí pacienti</span> (cukrovka, vrodené metabolické poruchy)
                                </li>
                                <li>
                                    <span className='main-part'>reumatologickí pacienti</span> (juvenílne idiopatické artritídy, systémový lupus,...)
                                </li>
                                <li>
                                    <span className='main-part'>pacienti s ochoreniami pľúc</span>
                                </li>
                                <li>
                                    <span className='main-part'>pacienti s poruchami imunity a transplantovaní</span>
                                </li>
                            </ul>
                            Liečba a starostlivosť o tieto deti je často celoživotná.
                        </div>
                    </StyledDescribtionCard>
                </StyledContentSection>
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    padding: 0 15vw;
    display: flex;
    background-color: ${colors.yellowColor};
    @media screen and (max-width: 1500px) {
        padding: 0 10vw;
    }
    @media screen and (max-width: 800px) {
        padding: 0 5vw;
        margin-top: 0vh;
    }
    @media screen and (max-width: 400px) {
        padding: 2vw 7vw;
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
        color: ${colors.pinkColor};
    }
    @media screen and (max-width: 1000px) {
        padding-bottom: 50px;
    }
    h3 {
        font-size: ${fonts.mainHeadingScreen};
        @media screen and (max-width: 500px) {
            font-size: ${fonts.mainHeadingMobile};
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
