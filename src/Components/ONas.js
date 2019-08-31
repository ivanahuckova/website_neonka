import React, {useState} from 'react';
import styled from 'styled-components';

//Import icons/images
import neonkaTeam1 from '../assets/neonka_team.jpg';
import neonkaTeam2 from '../assets/neonka_team2.jpg';
import neonkaTeam3 from '../assets/neonka_team3.jpg';
import arrow_left from '../assets/arrow_left.svg';
import arrow_right from '../assets/arrow_right.svg';


//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';


//Main component
export default function ONas() {
    const [photoIndex, setPhotoIndex] = useState(0)

    let photoCollection = [neonkaTeam1, neonkaTeam2, neonkaTeam3]

    let moveInPhotos = (num) => {
        if(photoIndex === 0 && num < 0) {
            setPhotoIndex(photoCollection.length - 1)
        } else if(photoIndex === photoCollection.length - 1 && num > 0) {
            setPhotoIndex(0)
        } else {
            setPhotoIndex(photoIndex + num)
        }
        
    }


    return (
        <StyledTeamContainer id='team'>
            <h3>O nás</h3>
            <StyledPeopleConatiner>
                <div>
                    Sme 4 mladé lekárky v príprave na pediatriu - <span className='name'>Ninka</span>, <span className='name'>Ľudka</span>, <span className='name'>Žofka</span> a <span className='name'>Mirka</span> z
                    Detskej fakultnej nemocnice v Banskej Bystrici. Túžime pomáhať deťom a rodinám chronicky chorých detí, či už finančne, alebo prostredníctvom zlepšovania podmienok na našom
                    detskom oddelení. Neónka je známa tým, že svieti v tme. A aj my chceme byť takýmto svetielkom pre všetky choré deti.
                </div>
                <StyledImageContainer>
                <img onClick={() => moveInPhotos(-1)} className="arrow-left" src={arrow_left} alt='sipka do prava' />
                <img className="main-img" src={photoCollection[photoIndex]} alt='fotografia teamu' />
                <img onClick={() => moveInPhotos(1)} className="arrow-right" src={arrow_right} alt='sipka do lava' />

                </StyledImageContainer>
            </StyledPeopleConatiner>
        </StyledTeamContainer>
    );
};

const StyledTeamContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.yellowColor};

    h3 {
        font-size: ${fonts.mainHeadingScreen};
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: ${fonts.mainHeadingMobile};
        }
    }
`;

const StyledPeopleConatiner = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fonts.textScreen};
    margin: 0 0 50px 0;
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
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
    }


`;

const StyledImageContainer = styled.div`
display: flex;
    .main-img {
        margin: 30px 0;
        width: 86%;
    }
    .arrow-left {
        margin-right: 10px;
        width: 7%;
        cursor: pointer;
    }
    .arrow-right {
        margin-left: 10px;
        width: 7%;
        cursor: pointer;
    }

`
