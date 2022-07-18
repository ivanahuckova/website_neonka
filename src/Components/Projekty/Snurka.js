import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import snurka from "../../assets/snurka.png";
import snurka_beh from "../../assets/snurka_beh.jpg";

//Main component
export default function Snurka() {

    return (
      <StyledMidBanner>
        <h1>24 hodinový charitatívny beh ŠNÚRKA</h1>
          <img src={snurka_beh} alt="snurka beh"/>
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
            <div className="bold padding">Šnúrku sme odštartovali 8. ročníkom Mikulášskeho behu</div>
            <div>Výťažok bol určený na úhradu nutričného programu <span className="bold yellow">3 našim pacientom</span>. Tento program bol realizovaný v spolupráci s OZ Chuť žiť, ktoré má v tíme kvalifikované 
            nutričné terapeutky so skúsenosťami v oblasti porúch príjmu potravy.</div>
            <br/>
            Do budúcnosti chceme s  našim projektom podporiť a vyzdvihnúť potrebu vzdelávania
            nutričných terapeutov v oblasti porúch príjmu potravy a v našej Banskobystrickej nemocnici
            ponúknuť naším pacientom uzavretý liečebný okruh: <span className="bold yellow">pacient- rodina- psychológ- psychiater- kvalifikovaný nutričný terapeut</span>

            . To pre nás znamená snahu o vyškolenie nutričného terapeuta, ktorý bude dostatočne
            vzdelaný v tejto oblasti a bude s nami spolupracovať na ceste liečby hneď, od prepustenia
            pacienta, pokiaľ to stav dovolí. Zároveň by sme našim pacientom tieto konzultácie podľa
            možností uhrádzali. A teraz obuť tenisky, zaviazať šnúrky a bežíme ďalej. Na dlhej trati, do kopca s novým 
            projektom Šnúrka. Kým sa nám to podarí, budeme sa snažiť zabezpečovať kvalifikovaných odborníkov a podľa
            možností uhrádzať tieto konzultácie.
            <div className="bold padding">Viac o nutričnom poradenstve</div>

            Cieľom je dosiahnutie normálneho stravovania, ktoré pokrýva všetky nutričné potreby
            pravidelným vyváženým a udržateľným spôsobom a zároveň vedie k dosiahnutiu a
            udržaniu zdraviu zodpovedajúcej telesnej hmotnosti.
            <br/>
            Ako tento program prebieha cez <a href="https://chutzit.sk/">OZ Chuť žiť</a>?
            Počas niekoľko mesačného poradenstva sú odborníčky spolu s pacientmi v intenzívnom
            kontakte. Pomáhajú im opäť nájsť väčšiu slobodu v stravovaní a spoločne nastaviť nové
            návyky tak, aby bola strava pestrá a dostatočná.
            V aktuálnej dobe prebieha poradenstvo online cez videohovor, čím odpadajú náklady na
            cestovanie a tiež sa nestane, že by sa poradenstvo vplyvom aktuálnych
            protipandemických opatrení muselo prerušiť.
            Na začiatku sa zhodnotí aktuálny stav výživy a spíše sa nutričná anamnézu, na základe
            ktorej je vypracovaná analýza a individuálny plán spolu s praktickými zmenami a
            jednotlivými krokmi.
            Počas mesačnej, respektíve niekoľkomesačnej spolupráce je nutričný tím s pacientmi
            neraz v každodennom kontakte.
            Pacienti posielajú fotografie svojich jedál, tak je to možné na diaľku zhodnotiť a napísať
            spätnú väzbu či povzbudiť v udržaní dohodnutých zmien.
            Následne prebiehajú každotýždenné kontrolné videokonzultácie, kde sa dohadujeme na
            ďalších zmenách.
            Poradenstvo prebieha vždy za účasti minimálne jedného rodiča či zákonného zástupcu,
            keďže tí najbližší sú práve tou najväčšou oporou a podporou v každodennom udržiavaní
            zmien a nastavovaní správneho stravovania.
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
