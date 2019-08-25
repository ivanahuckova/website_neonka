import React from 'react';
import styled from 'styled-components';

//Import icons/images
import neonkaTeam from '../assets/neonka_team2.jpg';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class ONas extends React.Component {
    render() {
        return (
            <StyledTeamContainer id='team'>
                <h3>O nás</h3>
                <StyledPeopleConatiner>
                    <div>
                        Sme 4 mladé lekárky - <span className='name'>Ninka</span>, <span className='name'>Ľudka</span>, <span className='name'>Žofka</span> a <span className='name'>Mirka</span> z
                        Detskej fakultnej nemocnice v Banskej Bystrici. Túžime pomáhať deťom a rodinám chronicky chorých detí, či už finančne, alebo prostredníctvom zlepšovania podmienok na našom
                        detskom oddelení. Neónka je známa tým, že svieti v tme. A aj my chceme byť takýmto svetielkom pre všetky choré deti.
                    </div>
                    <img src={neonkaTeam} alt='fotografia teamu'></img>
                </StyledPeopleConatiner>
            </StyledTeamContainer>
        );
    }
}

const StyledTeamContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.yellowColor};
    h3 {
        font-size: 2.5rem;
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: 1.4rem;
        }
    }
`;

const StyledPeopleConatiner = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fonts.textScreen};
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    .name {
        color: ${colors.pinkColor};
        font-weight: bold;
    }
    @media screen and (max-width: 1100px) {
        width: 70%;
    }
    @media screen and (max-width: 800px) {
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        font-size: ${fonts.textMobile};
    }

    img {
        margin: 30px 0;
        width: 100%;
    }
`;
