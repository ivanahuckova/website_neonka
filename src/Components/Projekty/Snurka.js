import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
//import snurkaDonovaly from "../../assets/snurka_donovaly.png";
import donovaly1 from "../../assets/donovaly1.mp4";

//Main component
export default function Snurka() {
  const [size, setSize] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', setSize(window.innerWidth));
  }, [])

    return (
      <StyledMidBanner>
        <h1>O projekte #Šnúrka</h1>
          <div>Počet detí s psychiatrickým ochorením na Slovensku dlhodobo rastie. Diagnóza porúch príjmu potravy
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
            <div><span className="bold yellow">Šnúrku sme odštartovali 8. ročníkom Mikulášskeho behu </span>(uhradili sme nutričnú
            terapiu pre 4 pacientov). Projekt Projekt Šnúrka má za cieľ podporiť 
            a vyzdvihnúť potrebu vzdelávania nutričných terapeutov v oblasti porúch príjmu potravy a pre našich detských pacientov 
              v Banskobystrickej Detskej fakultnej nemocnici ponúknuť uzavretý liečebný okruh: <span className="bold yellow">pacient- rodina- psychológ- psychiater- kvalifikovaný nutričný terapeut</span>. 
              To pre nás znamená nájsť nutričného terapeuta, ktorý sa bude vzdelávať v tejto oblasti a bude s nami spolupracovať pri liečbe našich pacientov. 
              Zároveň by sme týmto pacientom konzultácie podľa našich možností uhrádzali. <span className="bold yellow">Na projekte Šnúrka s nami začala spolupracovať od júna 2022 s nutričná poradkyňa Ing. Magdaléna Moller.</span>
              Zároveň spolupracujeme s OZ Chuť žiť.
            </div>
            <h1>O behu ŠNÚRKA22</h1>
            <iframe width={size > 500 ? "500" : "350"} height={size > 500 ? "297" : "209"} src="https://www.youtube.com/embed/7PBIlM0FoVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Spolu s naším partnerom Crazy Women Active Planet (organizátor športových a charitatívnych behov) a outdoorovými predajňami Active Planet Outdoor 
            centrum sme sa rozhodli zorganizovať <span className="bold yellow">horský 24-hodinový celoslovenský charitatívny beh s názvom ŠNÚRKA</span>. Beh sa konal v národnom parku Veľká Fatra v Park Snow
            Donovaly (bežecké „kolečko“ Park Snow Donovaly - Nová Hoľa s prevýšením 453 m).
            24 hodinový beh odbehli 4 bežci, 3 muži a jedna úžasná dáma. 1 z bežcov pokoril
            svojimi výškovými metrami Mont Everest a stal sa jedným z menej ako desiatich
            mužov, ktorí sú nositeľmi tohto brutálneho výkonu na Slovensku.
            Nasledujúci deň na sprievodnej akcii „Vertikal- vybehni Novú Hoľu“, sa na štart
            postavilo 40 registrovaných bežcov. Bežalo ich však oveľa viac! A to všetko pre
            jeden cieľ. <span className="bold yellow">Vďaka Vám sme vyzbierali na projekt nutričnej terapie pre pacientov s
            poruchami príjmu potravy 1563 €, ktoré použijeme na úhradu nutričnej terapie pre ďalších pacientov.</span>
            </div>
            </div>
            {/* <img src={snurkaDonovaly} alt="snurka logo"/> */}
            <div>Viac info o behu v článku: <a href="https://www.katarinabelicova.sk/snurka-vertikal" target="_blank" rel="noopener noreferrer">ŠNÚRKA 24 /ŠNÚRKA Vertikal</a></div>
           <div>
            <video width={size > 500 ? "400" : "350"} controls>
              <source src={donovaly1} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
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

  @media screen and (max-width: 1500px) {
    padding: 10vh 15vw;
  }
  @media screen and (max-width: 700px) {
    padding: 10vh 5vw;
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
    max-width: 1000px;
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
