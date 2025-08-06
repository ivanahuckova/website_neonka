import React from 'react';
import styled from 'styled-components';
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import akvariumLogo from '../../assets/akvarium-logo.png';
import qrPodpora from '../../assets/qr_neonka_akvarium.png';
import akvarium1 from '../../assets/akvarium1.jpeg';
import akvarium2 from '../../assets/akvarium2.jpeg';
import akvarium3 from '../../assets/akvarium3.jpeg';

export default function Akvarium() {
  return (
    <StyledMidBanner>
      <img src={akvariumLogo} alt="Akvárium logo" style={{ maxWidth: '200px', marginBottom: 24 }} />
      <h1>Zbierka „Akvárium“ <br />pre detskú pľúcnu ambulanciu</h1>
      <div>
        <span className="bold yellow">Pomôžte nám získať prístroj na presnejšiu diagnostiku ochorení pľúc.</span>
        <br />
        Na našej Pľúcnej ambulancii v Detskej fakultnej nemocnici sa venujeme diagnostike a liečbe stovkám detí – od najmenších bábätiek až po dospievajúcich.
        Venujeme sa vrodeným ochoreniam pľúc, astme bronchiale, zápalom pľúc, opakovaným infekciám dýchacích ciest a mnohým ďalším pľúcnym diagnózam.
        <br />
        <br />

        Staráme sa aj o predčasne narodené deti, ktoré majú pľúcne komplikácie. <span className="bold yellow">Patríme medzi jedno z troch špecializovaných centier pre liečbu cystickej fibrózy na Slovensku</span>. Pacienti k nám prichádzajú nielen z okolitých miest ako Brezno či Zvolen, ale aj zo vzdialenejších regiónov stredného a južného Slovenska – ako napríklad Veľký Krtíš, Rimavská Sobota alebo Revúca – kde detskí pľúcni lekári chýbajú.
        Naším cieľom je neustále zlepšovať diagnostické možnosti pre našich pacientov, a preto vznikla zbierka s názvom „Akvárium“ – jej cieľom je spolufinancovanie špeciálneho diagnostického prístroja s názvom bodypletyzmograf.
      </div>
      <h2>Prečo práve bodypletyzmograf?</h2>
      <div>
        Bodypletyzmograf je štandardom v moderných ambulanciách na celom svete.<br />
        Je to najkomplexnejšia metóda funkčného vyšetrenia pľúc – bez nutnosti fyzickej záťaže, bolesti či invazívnych zásahov. Prístroj pripomína priehľadnú kabínu, v ktorej dieťa dýcha podľa jednoduchých pokynov. Vyšetrenie je rýchle, presné a objektívne – vhodné pre deti približne od 5 rokov, ktoré už dokážu spolupracovať. V ideálnom prípade prebieha vyšetrenie hravou formou – napríklad „fúkaním balónika“ alebo „ako drak“.
        <br />
        <br />
        Metóda je spoľahlivejšia než klasická spirometria – dokáže zmerať aj pľúcne objemy, ktoré spirometria nezachytí, a presne vyhodnotiť odpor v dýchacích cestách.
        Pomáha včas odhaliť poruchy dýchania, nastaviť liečbu a sledovať jej účinnosť.
      </div>
      <div className="padding">
        <img src={akvarium1} alt="Akvarium 1" style={{ maxWidth: 300, margin: 8 }} />
        <img src={akvarium2} alt="Akvarium 2" style={{ maxWidth: 300, margin: 8 }} />
        <img src={akvarium3} alt="Akvarium 3" style={{ maxWidth: 300, margin: 8 }} />
      </div>
      <h2>Príbeh Aničky a kabíny, ktorá počúva pľúca</h2>
      <div>
        Anička má 10 rokov. Miluje jazdu na kolobežke, spieva v zbore a doma má škrečka menom Hopsík. V posledných mesiacoch ju však pri behu začalo pichať v hrudníku, v noci ju budil kašeľ a rýchlo sa zadýchala. Jej pani doktorka ju poslala na špeciálne vyšetrenie do Detskej fakultnej nemocnice v Banskej Bystrici.
        <br />
        <br />
        Trochu sa bála, ale v ambulancii ju privítali s úsmevom a povedali: „Anička, dnes pôjdeš do kabíny, ktorá vie počúvať, ako dýchaš!“
        <br />
        <br />
        Kabína sa volala bodypletyzmograf – vyzerala ako veľká priehľadná búdka. Sadla si, zavreli sa  dvere a dýchala ako obyčajne. Občas jej sestrička povedala, aby zadržala dych, alebo fúkala „ako sopka“. Pripomenulo jej to spev v zbore – len bez melódie.
        <span role="img" aria-label="doktorka">👩‍⚕️</span> Lekári zistili, že Aničke bola diagnostikovaná detská astma. Do liečby jej nasadili inhalátor s liečivom a už o mesiac sa cítila oveľa lepšie. Nemusela ísť na vyšetrenie pre dospelých a všetko prebehlo bez stresu, v priateľskom prostredí.
        Anička si po vyšetrení dokonca nakreslila „kabínu, kde môže spievať“. 
        <br />
        <br />
        Dnes znovu jazdí na kolobežke bez prestávky a Hopsík sa už nebudí jej kašľom. Nám rybičkám Neónkam pripomína bodypletyzmograf prázdne akvárium. Anička si nakreslila kabínu, kde si môže spievať. A čo pripomína tebe?
      </div>
      <h2>Informácie o zbierke</h2>
      <div>
        Ide o verejnú zbierku registrovanú Ministerstvom vnútra Slovenskej republiky pod názvom:
        <br />
        <span className="bold yellow">„Akvárium – zakúpenie bodypletyzmografického prístroja pre detskú pneumologickú ambulanciu v Detskej fakultnej nemocnici v Banskej Bystrici“</span>
        <br />
        Registrovaná v registri verejných zbierok pod číslom: 000-2025-025566
        <br />
        Prístroj bodypletyzmograf, ktorého cena je 21 000 €, je už nainštalovaný a v prevádzke v našej detskej pneumologickej ambulancii. Jeho financovanie je rozdelené medzi troch partnerov:
        <br />
        <ul style={{ textAlign: 'left', margin: '16px 0 16px 32px' }}>
          <li>1/3 nákladov hradila Slovenská asociácia cystickej fibrózy,</li>
          <li>1/3 pokryje Detská fakultná nemocnica v Banskej Bystrici,</li>
          <li>1/3 (7 000 €) chceme dofinancovať prostredníctvom tejto verejnej zbierky „Akvárium“.</li>
        </ul>
      </div>
      <h2>Ako môžete prispieť</h2>
      <div>
        <span role="img" aria-label="platobná karta">💳</span> Číslo transparentného účtu:<br />
        <span className="bold">SK72 0900 0000 0052 2909 7405</span>
        <br />
        <span role="img" aria-label="mobil">📱</span> Alebo pomocou QR kódu:<br />
        <img src={qrPodpora} alt="QR kód pre podporu" style={{ maxWidth: 200, margin: 16 }} />
        <div style={{ fontSize: 14, color: colors.pinkColor }}>(Otvoríte v mobilnej aplikácii banky)</div>
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
  .bold {
    font-weight: bold;
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
    margin-bottom: 10px;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: ${fonts.textMobile};
    }
    a {
      color: ${colors.pinkColor};
      &:hover {
        cursor: pointer;
      }
    }
    img {
      max-width: 270px;
    }
  }
`; 