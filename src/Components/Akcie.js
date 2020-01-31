import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Import icons/images
// import eventBanner from '../assets/event_banner.jpg';
import neonka from '../assets/logo_image.svg';

// const url = 'https://bystrica.dnes24.sk/slachetny-cin-bystrickych-gymnazistov-takto-sa-rozhodli-pomoct-detom-priputanym-na-lozka-348436?fbclid=IwAR3Ijn8mA7dLaord_ErvzyaEc5o8R03rXVZBoxyS21VhpdzAwWG0_0VS1vY'



//Main component
export default class Akcie extends React.Component {
    render() {
        return (
            <StyledMidBanner id='novinky'>
                <h1>Novinky</h1>
                <h2>Každý hlas v ankete Mobil roka 2019 pomôže Neónke</h2>
                <div>Každý hlas v ankete Mobil roka 2019 vhodí do našej pomyselnej pokladničky päť centov. Hlasujte <a href="https://techbox.dennikn.sk/temy/kazdy-hlas-v-ankete-mobil-roka-2019-powered-by-o2-pomoze-detom-v-nemocnici/?fbclid=IwAR0n8IXNq4rmGrxaNsZt4BI8FHmsg5vJjBACU4QobErb1VVRY9sS1RQCnvI">tu</a>.</div>
                <div className='logo'><img alt="logo neonky" src={neonka} /></div>
                <h2 id='mikulas'>Mikuláš sa vrátil do DFN</h2>
                <div>6. ročník Charitatívneho Mikulášskeho behu dopadol nad naše očakávanie, s rekordnou účasťou 222 mikulášov. Všetci sme behali za spoločný cieľ, za deti s cystickou fibrózou.</div>
                <div>Za vyzbierané peniaze sa nám podarilo zakúpiť 5 najmodernejších inhalátorov od spoločnosti MR diagno - stic. Prístroje budú venované 5 deťom s cystickou fibrózou. Tieto deti boli zachytené novorodeneckým skríningom a sú mladšie ako dva roky. Inhalátory im zlepšia kvalitu života - pocit nadýchnuť sa!</div>
                <div>Oficiálne odovzdanie prístrojov rodinám bude za účasti Dr. Takáča, ktorý vedie Centrum pre liečbu cystickej fibrózy v Banskej Bystrici. Prístroje odovzdajú organizátori behu - OZ Neónka Banská Bystrica a OZ Crazy woman v zastúpení Dr. Belicovej.</div>
                <div className="bold">Save the date! 12.2.2020, o 16:00 v zasadačke DFN v Banskej Bystrici.</div>
                <div>Občerstvenie zabezpečíme.</div>
                <div className='logo'>Vaše Neónky!<img alt="logo neonky" src={neonka}></img></div>
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
