import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Import icons/images
import neonkaTeam1 from '../assets/neonka_team.jpg';
import neonkaTeam2 from '../assets/neonka_team2.jpg';
import neonkaTeam3 from '../assets/neonka_team3.jpg';
import neonkaTeam4 from '../assets/neonka_team4.jpg';
import neonkaTeam5 from '../assets/neonka_team5.jpg';
import neonkaTeam6 from '../assets/neonka_team6.jpg';
import neonkaTeam7 from '../assets/neonka_team7.jpg';
import neonkaTeam8 from '../assets/neonka_team8.jpg';
import neonkaTeam9 from '../assets/neonka_team9.jpg';
import neonkaTeam10 from '../assets/neonka_team10.jpg';
import neonkaTeam11 from '../assets/neonka_team11.jpg';
import neonkaTeam12 from '../assets/neonka_team12.jpg';
import neonkaTeam13 from '../assets/neonka_team11.jpg';
import neonkaTeam14 from '../assets/neonka_team12.jpg';



//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';


//Main component
export default function ONas() {
    return (
        <StyledTeamContainer id='team'>
            <h3>O nás</h3>
            <StyledPeopleConatiner>
                <div>
                    Sme 4 mladé lekárky v príprave na pediatriu - <span className='name'>Ninka</span>, <span className='name'>Ľudka</span>, <span className='name'>Žofka</span> a <span className='name'>Mirka</span> z
                    Detskej fakultnej nemocnice v Banskej Bystrici. Túžime pomáhať deťom a rodinám chronicky chorých detí, či už finančne, alebo prostredníctvom zlepšovania podmienok na našom
                    detskom oddelení. Neónka je známa tým, že svieti v tme. A aj my chceme byť takýmto svetielkom pre všetky choré deti.
                </div>
                <CarouselContainer>
                    <Carousel>
                        <div>
                            <img className="main-img" src={neonkaTeam7} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam8} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam9} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam13} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam14} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam10} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam11} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam12} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam1} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam6} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam2} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam3} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam4} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam5} alt='fotografia teamu' />
                        </div>
                        <div>
                            <img className="main-img" src={neonkaTeam6} alt='fotografia teamu' />
                        </div>
                    </Carousel>
                </CarouselContainer>
            </StyledPeopleConatiner>
        </StyledTeamContainer>
    );
};

const StyledTeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: ${colors.pinkColor};
        font-size: ${fonts.mainHeadingScreen};
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: ${fonts.mainHeadingMobile};

        }
    }
`;

const StyledPeopleConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fonts.textScreen};
    margin: 0 0 50px 0;
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    max-width: 100vw;
    box-sizing: border-box;
    .name {
        color: ${colors.pinkColor};
        font-weight: bold;
    }
    @media screen and (max-width: 1100px) {
        width: 70%;
        padding: 0;
    }
    @media screen and (max-width: 800px) {
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        font-size: ${fonts.textMobile};
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
    }

`;


const CarouselContainer = styled.div`
    margin-top: 30px;
    width: 75%;
    @media screen and (max-width: 1000px) {
        width: 90%;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`


