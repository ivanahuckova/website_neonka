import React from 'react';
import styled from 'styled-components';

// //Import icons/images
// import neonkaLogo from '../assets/logo_image.svg';

//Colors
import { pinkColor } from '../colors/colors';

//Main component
export default class Content extends React.Component {
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
                    <StyledDescribtionCard>
                        <h3 className='heading'>Naši pacienti trpia spektrom ochorení:</h3>
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
                            <span className='pink'>Liečba a starostlivosť o tieto deti je často celoživotná!</span>
                        </div>
                    </StyledDescribtionCard>
                </StyledContentSection>
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    width: 100%;
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
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 10vh 0;
`;

const StyledDescribtionCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    .heading {
        color: ${pinkColor};
    }
    @media screen and (max-width: 1000px) {
        padding-bottom: 50px;
    }
    h3 {
        font-size: 2rem;
        @media screen and (max-width: 500px) {
            font-size: 1.4rem;
        }
    }
    @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 1.1rem;
    }
    .content-div {
        font-size: 1.3rem;
        padding-bottom: 30px;
        text-align: left;
        @media screen and (max-width: 1200px) {
            padding-bottom: 10px;
        }
        @media screen and (max-width: 600px) {
            font-size: 1.2rem;
        }
        .pink {
            color: ${pinkColor};
            font-weight: bold;
        }
        li {
            margin-top: 20px;
            .main-part {
                font-weight: bold;
            }
            @media screen and (max-width: 500px) {
                font-size: 1.1rem;
            }
        }
    }
`;
