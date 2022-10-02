import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import snurka from "../../assets/snurka.png";
import snurka_beh from "../../assets/snurka_beh.png";

//Main component
export default function Snurka() {

    return (
      <StyledMidBanner>
        <h1>24 hodinový charitatívny beh ŠNÚRKA</h1>
          <img src={snurka_beh} alt="snurka beh"/>
          <div style={{fontWeight: 'bold'}}>Viac info a registrácia na: <a href="https://www.activeplanet.sk/podujatie/24-snurka">https://www.activeplanet.sk/podujatie/24-snurka</a>.</div>
          <div>Spolu s naším partnerom Crazy Women Active Planet (organizátor športových a charitatívnych behov) a outdoorovými predajňami Active Planet Outdoor 
            centrum sme sa rozhodli zorganizovať <span className="bold yellow">horský 24-hodinový celoslovenský charitatívny beh s názvom ŠNÚRKA</span>. Vyzývame všetkých bežcov zaviazať šnúrky, spojiť 
            sily a vydať sa spolu s nami v termíne od 31.8.2022- 1.9.2022 na bežecké „kolečko“ Park Snow Donovaly - Nová Hoľa v pohorí Veľkej Fatry. Cieľom behu je 
            finančne podporiť našich detských pacientov s poruchami príjmu potravy. Prihlásiť sa je možné ako jednotlivec alebo ako 6-10 členný tím. Nazbierajte, čo 
            najviac výškových metrov za 24 hodín alebo jednorázovo vybehnite traťami zjazdoviek na kopec Nová Hoľa s prevýšením 453 m! Pridajte sa s nami na dlhú cestu s 
            cieľom poraziť ich.
            </div>
          <div>Informácie o behu: <a href="https://www.youtube.com/watch?v=7PBIlM0FoVk">https://www.youtube.com/watch?v=7PBIlM0FoVk</a>.</div>
          <h1>O projekte #Šnúrka</h1>
          <div> Počet detí s psychiatrickým ochorením na Slovensku dlhodobo rastie. Diagnóza porúch príjmu potravy
              v detskom veku sa trojnásobne zvýšila. Poruchy príjmu potravy (PPP) patria medzi závažné duševné ochorenia s 
              najvyššou úmrtnosťou. Ochorenie sa nevyhýba ani detskej populácii a počet pacientov výrazne narastá. PPP majú 
              veľa príčin. Vrodených či získaných. Sú následkom uponáhľaného života plného tlaku o prvenstvo, úspech a krásu, 
              sú následkom zaneprázdnenosti rodičov. COVID tejto dobe nepomohol a prehĺbil spoločenskú izoláciu.  <span className="bold yellow">PPP sú tretím 
              najčastejším zdravotným problémom dievčat medzi 15-19 rokom</span>. Postihujú človeka fyzicky aj psychicky. Podvýživa postupne 
              postihuje každý orgán v tele a narúša funkčnosť, môže viesť až k zástave srdca. Je bežné, že PPP sú 
              spojené s depresiou, úzkosťami, samovražednými sklonmi, psychózami a závislosťami. Menej než štvrtina 
              pacientov s PPP vyhľadá alebo dostáva lekársku pomoc. Liečba PPP trvá priemerne 5 rokov. <span className="bold yellow">V komplexnej liečbe je 
              nevyhnutná spolupráca psychiatra, psychológa a nutričného terapeuta</span>. Keďže základným liekom je potrava, správna 
              diagnostika stravovacích návykov a nastavenie vhodného jedálnička šitého na mieru 
              konkrétnemu pacientovi je kľúčová. Nutričné poradenstvo by malo byť pevnou súčasťou 
              liečby, ale bohužiaľ nie je. Nie každý nutričný terapeut je dostatočne vzdelaný v prístupe k 
              pacientom s PPP, navyše, takéto konzultácie nie sú hradené z verejného zdravotného 
              poistenia. Pre mnohé rodiny je takáto liečba finančne nedostupná. <span className="bold yellow">Odporúčaná dĺžka nutričnej 
              terapie je cca 3 mesiace</span>. Ako lekárky na detskom oddelení sme sa stretli s tým, že pacienti 
              s týmto ochorením boli niekoľko mesiacov vedený nutričným terapeutom, ktorý nemal 
              skúsenosti v tejto oblasti a celý stav len zhoršil.
              <br/>
              <br/>
              <img src={snurka} alt="snurka logo"/>
            <div><span className="bold yellow">Šnúrku sme odštartovali 8. ročníkom Mikulášskeho behu.</span> Projekt Šnúrka má za cieľ podporiť 
            a vyzdvihnúť potrebu vzdelávania nutričných terapeutov v oblasti porúch príjmu potravy a pre našich detských pacientov 
              v Banskobystrickej Detskej fakultnej nemocnici ponúknuť uzavretý liečebný okruh: <span className="bold yellow">pacient- rodina- psychológ- psychiater- kvalifikovaný nutričný terapeut</span>. 
              To pre nás znamená nájsť nutričného terapeuta, ktorý sa bude vzdelávať v tejto oblasti a bude s nami spolupracovať pri liečbe našich pacientov. 
              Zároveň by sme týmto pacientom konzultácie podľa našich možností uhrádzali. <span className="bold yellow">Na projekte Šnúrka s nami začala spolupracovať od júna 2022 s nutričná poradkyňa Ing. Magdaléna Moller.</span>
            </div>
            
            </div>
      </StyledMidBanner>
    );
  }


const StyledMidBanner = styled.div`
  margin: 0;
  padding: 20vh 20vw 10vh 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .yellow {
    padding: 0 5px;
    background-color: ${colors.yellowColor};
  }
  .pink {
    padding: 0 5px;
    background-color: ${colors.pinkColor};
  }
  .padding {
    padding: 5vh 0 0 0;
  }

  @media screen and (max-width: 1500px) {
    padding: 10vh 15vw;
  }
  @media screen and (max-width: 700px) {
    padding: 10vh 5vw;
  }
  .bold {
    font-weight: bold;
  }
  .yellow {
    padding: 0 5px;
    background-color: ${colors.yellowColor};
  }
  .pink {
    padding: 0 5px;
    background-color: ${colors.pinkColor};
  }
  .padding {
    padding: 5vh 0 0 0;
  }
  a {
    color: ${colors.pinkColor};
    font-weight: bold;
  }
  img {
    width: 100%;
    max-width: 700px;
  }
  h1 {
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
    color: ${colors.pinkColor};
    @media screen and (max-width: 600px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  h2 {
    margin-top: 0;
    font-size: ${fonts.subHeadingScreen};
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: ${fonts.subHeadingMobile};
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
    img {
        width: 200px;
        height: 200px;
    }
  }
`;
