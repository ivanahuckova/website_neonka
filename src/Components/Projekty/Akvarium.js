import React from 'react';
import styled from 'styled-components';
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import akvariumLogo from '../../assets/akvarium-logo.png';
import akvarium1 from '../../assets/akvarium1.jpeg';
import akvarium2 from '../../assets/akvarium2.jpeg';
import akvarium3 from '../../assets/akvarium3.jpeg';

export default function Akvarium() {
  return (
    <StyledMidBanner>
      <img src={akvariumLogo} alt="Akvárium logo" style={{ maxWidth: '200px', marginBottom: 24 }} />
      <h1>Zbierka „Akvárium" <br />pre detskú pľúcnu ambulanciu ukončená</h1>
      <StatusBadge>Zbierka je ukončená. Ďakujeme <span role="img" aria-label="srdce">💛</span></StatusBadge>
      <div>
        Vďaka podpore darcov sa podarilo zabezpečiť spolufinancovanie bodypletyzmografického prístroja pre detskú pneumologickú ambulanciu v Detskej fakultnej nemocnici v Banskej Bystrici.
        <br />
        <br />
        Na pľúcnej ambulancii sa venujú diagnostike a liečbe stovkám detí – od najmenších bábätiek až po dospievajúcich. Zaoberajú sa vrodenými ochoreniami pľúc, astmou bronchiale, zápalmi pľúc, opakovanými infekciami dýchacích ciest a mnohými ďalšími diagnózami.
        <br />
        <br />
        Starajú sa aj o predčasne narodené deti s pľúcnymi komplikáciami. <span className="bold yellow">Ambulancia je zároveň jedným z troch špecializovaných centier pre liečbu cystickej fibrózy na Slovensku.</span> Pacienti sem prichádzajú nielen z okolitých miest ako Brezno či Zvolen, ale aj zo vzdialenejších regiónov stredného a južného Slovenska, kde detskí pneumológovia chýbajú.
      </div>
      <h2>Prečo bol prístroj dôležitý</h2>
      <div>
        V čase začiatku zbierky ambulancia nedisponovala bodypletyzmografom, ktorý je štandardným vybavením pre komplexnú diagnostiku pľúcnych funkcií.
        <br />
        <br />
        <span className="bold yellow">Dnes je už prístroj zakúpený, nainštalovaný a v plnej prevádzke.</span> Umožňuje presnejšie vyšetrenie, lepšie sledovanie pacientov a kvalitnejšie nastavenie liečby – najmä u detí s chronickými respiračnými ochoreniami, vrátane cystickej fibrózy.
      </div>
      <div className="padding">
        <img src={akvarium1} alt="Akvarium 1" style={{ maxWidth: 300, margin: 8 }} />
        <img src={akvarium2} alt="Akvarium 2" style={{ maxWidth: 300, margin: 8 }} />
        <img src={akvarium3} alt="Akvarium 3" style={{ maxWidth: 300, margin: 8 }} />
      </div>
      <div style={{ textAlign: 'center', color: '#888', fontSize: '0.95em', marginBottom: 16, fontStyle: 'italic' }}>
        Zverejnenie so súhlasom zákonného zástupcu
      </div>
      <h2>Ako sa to podarilo</h2>
      <div>
        Zabezpečenie prístroja bolo možné najmä vďaka iniciatíve Slovenskej asociácie cystickej fibrózy, ktorá pristúpila k jeho obstarávaniu formou postupného financovania a umožnila jeho včasné dodanie a uvedenie do prevádzky. Cena prístroja je 22 069 eur.
        <br />
        <br />
        Na financovaní prístroja sa podieľajú:
        <ul style={{ textAlign: 'left', margin: '16px 0 16px 32px' }}>
          <li>Slovenská asociácia cystickej fibrózy</li>
          <li>Neónka Banská Bystrica – verejná zbierka „Akvárium"</li>
          <li>Klub cystickej fibrózy</li>
        </ul>
        <span style={{ color: '#666', fontSize: '0.95em' }}>
          Slovenská asociácia cystickej fibrózy uhradila 7 069 eur a Klub cystickej fibrózy 4 000 eur. Prostriedky z verejnej zbierky vo výške 7 000 eur boli použité na spolufinancovanie prístroja. Zostávajúca časť bude dofinancovaná na základe dohody – Klub cystickej fibrózy prispeje ešte 3 000 eur a Slovenská asociácia cystickej fibrózy uhradí zvyšok.
        </span>
        <br />
        <br />
        <span className="bold">Proste sme sa poskladali... ako sme vedeli.</span>
        <br />
        <br />
        Vďaka tejto spolupráci sa podarilo zabezpečiť prístroj, ktorý by inak nebolo možné v takom čase obstarať.
      </div>
      <h2>Príbeh Aničky a kabíny, ktorá počúva pľúca</h2>
      <div>
        Anička má 10 rokov. Miluje jazdu na kolobežke, spieva v zbore a doma má škrečka menom Hopsík. V posledných mesiacoch ju však pri behu začalo pichať v hrudníku, v noci ju budil kašeľ a rýchlo sa zadýchala. Jej pani doktorka ju poslala na špeciálne vyšetrenie do Detskej fakultnej nemocnice v Banskej Bystrici.
        <br />
        <br />
        Trochu sa bála, ale v ambulancii ju privítali s úsmevom a povedali:
        <br />
        „Anička, dnes pôjdeš do kabíny, ktorá vie počúvať, ako dýchaš!"
        <br />
        <br />
        Kabína sa volala bodypletyzmograf – vyzerala ako veľká priehľadná búdka. Sadla si, zavreli sa dvere a dýchala ako obyčajne. Občas jej sestrička povedala, aby zadržala dych, alebo fúkala „ako sopka". Pripomenulo jej to spev v zbore – len bez melódie.
        <br />
        <br />
        Lekári zistili, že Anička má detskú astmu. Do liečby jej nasadili inhalátor a už o mesiac sa cítila oveľa lepšie. Nemusela ísť na vyšetrenie pre dospelých a všetko prebehlo bez stresu, v priateľskom prostredí.
        <br />
        <br />
        Dnes znovu jazdí na kolobežke bez prestávky a Hopsík sa už nebudí jej kašľom.
      </div>
      <h2>Ďakujeme</h2>
      <div>
        Ďakujeme všetkým darcom, partnerom a podporovateľom, ktorí pomohli zabezpečiť tento prístroj.
        <br />
        <br />
        Vďaka nim sa podarilo odstrániť významný prístrojový deficit a zlepšiť starostlivosť o detských pacientov v regióne.
      </div>
      <h2>Informácie o zbierke</h2>
      <div>
        Ide o verejnú zbierku registrovanú Ministerstvom vnútra Slovenskej republiky pod názvom:
        <br />
        <span className="bold yellow">„Akvárium – zakúpenie bodypletyzmografického prístroja pre detskú pneumologickú ambulanciu v Detskej fakultnej nemocnici v Banskej Bystrici"</span>
        <br />
        Registrovaná v registri verejných zbierok pod číslom: 000-2025-025566
      </div>
    </StyledMidBanner>
  );
}

const StatusBadge = styled.div`
  background-color: ${colors.pinkColor};
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  padding: 12px 28px;
  border-radius: 30px;
  margin-bottom: 24px;
  margin-top: 8px;
`;

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
