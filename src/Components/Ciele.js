import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class Ciele extends React.Component {
    render() {
        return (
            <StyledContent>
                <StyledContentSection>
                    <StyledDescribtionCard>
                        <h3 className='heading'>Naše ciele:</h3>
                        <div className='content-div'>
                            <ol>
                                <li>
                                    zlepšovanie kvality nemedicínskej starostlivosti pediatrickým pacientom (s neonkologickými ochoreniami) hospitalizovaných na lôžkovom oddelení II. DK SZU DFNsP BB{' '}
                                </li>
                                <li>
                                    pomoc pri zabezpečení liečebného režimu (preplácanie liekov, sociálna a materiálna podpora) u chronicky chorých pediatrických pacientov v ambulantnom dispenzári
                                </li>
                                <li>
                                    zabezpečovanie nového prístrojového, materiálneho vybavenia na oddelení, ambulanciách, zabezpečenie zdravotných pomôcok pre domácu liečbu, zabezpečovanie dopravy na
                                    vyšetrenia{' '}
                                </li>
                                <li>
                                    zlepšovanie prostredia na oddelení, komfortu sprevádzajúcich osôb a pacientov, zlepšovanie prostredia na ambulanciách, zlepšovanie a skrášlovanie okolia nemocnice{' '}
                                </li>
                                <li>poradenské služby pre rodičov a laikov formou verbálnej komunikácie a publikačných materiálov </li>
                                <li>edukačné kurzy pre laikov aj odbornú verejnosť formou seminárov, kurzov, školení a skupinových sedení, organizácia letných táborov pre chronicky choré deti </li>
                                <li>organizácia benefičných zbierok </li>
                                <li>publikácie informačných materiálov, sprístupňovanie informácií </li>
                                <li>zakúpenie odbornej literatúry pre lekárov, sestry, pacientov </li>
                                <li>podpora vzdelávania lekárov a sestier </li>
                                <li>pomoc pri zabezpečení potrebnej životnej úrovne v rámci liečebného režimu </li>
                                <li>zabezpečenie nutričného programu na detskom oddelení </li>
                                <li>zavedenie canisterapie </li>
                                <li>vytváranie zahraničnej spolupráce, výmenne odborné pobyty na zahraničných pracoviskách </li>
                                <li>vytváranie možností na zlepšenie medicínskej starostlivosti komunikáciou so zahraničím</li>
                            </ol>
                        </div>
                    </StyledDescribtionCard>
                </StyledContentSection>
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    margin-top: 10vh;
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
        color: ${colors.pinkColor};
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
        .pink {
            color: ${colors.pinkColor};
            font-weight: bold;
        }

        li {
            margin-top: 15px;
        }
    }
`;
