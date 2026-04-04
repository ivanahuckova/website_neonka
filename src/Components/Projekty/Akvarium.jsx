import React from 'react';
import akvariumLogo from '../../assets/akvarium-logo.png';
import akvarium1 from '../../assets/akvarium1.jpeg';
import akvarium2 from '../../assets/akvarium2.jpeg';
import akvarium3 from '../../assets/akvarium3.jpeg';
import { PageWrap, PageTitle, SectionTitle, Body, ImageRow, IllustrationImg, StatusPill, StatBox } from './ProjectLayout';

export default function Akvarium() {
  return (
    <PageWrap>
      <IllustrationImg src={akvariumLogo} alt="Akvárium logo" />

      <StatusPill>
        <span role="img" aria-label="srdce">💛</span> Zbierka je ukončená. Ďakujeme!
      </StatusPill>

      <PageTitle>Zbierka „Akvárium" pre detskú pľúcnu ambulanciu</PageTitle>

      <Body>
        Vďaka podpore darcov sa podarilo zabezpečiť spolufinancovanie bodypletyzmografického prístroja pre detskú
        pneumologickú ambulanciu v Detskej fakultnej nemocnici v Banskej Bystrici.
      </Body>

      <Body>
        Na pľúcnej ambulancii sa venujú diagnostike a liečbe stovkám detí – od najmenších bábätiek až po
        dospievajúcich. Zaoberajú sa vrodenými ochoreniami pľúc, astmou bronchiale, zápalmi pľúc, opakovanými
        infekciami dýchacích ciest a mnohými ďalšími diagnózami. Starajú sa aj o predčasne narodené deti s pľúcnymi
        komplikáciami.{' '}
        <span className="yellow">
          Ambulancia je zároveň jedným z troch špecializovaných centier pre liečbu cystickej fibrózy na Slovensku.
        </span>{' '}
        Pacienti sem prichádzajú nielen z okolitých miest ako Brezno či Zvolen, ale aj zo vzdialenejších regiónov
        stredného a južného Slovenska, kde detskí pneumológovia chýbajú.
      </Body>

      <SectionTitle>Prečo bol prístroj dôležitý</SectionTitle>

      <Body>
        V čase začiatku zbierky ambulancia nedisponovala bodypletyzmografom, ktorý je štandardným vybavením pre
        komplexnú diagnostiku pľúcnych funkcií.
      </Body>

      <StatBox>
        <span className="yellow">Dnes je už prístroj zakúpený, nainštalovaný a v plnej prevádzke.</span> Umožňuje
        presnejšie vyšetrenie, lepšie sledovanie pacientov a kvalitnejšie nastavenie liečby – najmä u detí
        s chronickými respiračnými ochoreniami, vrátane cystickej fibrózy.
      </StatBox>

      <ImageRow>
        <img src={akvarium1} alt="Akvarium 1" />
        <img src={akvarium2} alt="Akvarium 2" />
        <img src={akvarium3} alt="Akvarium 3" />
      </ImageRow>
      <p style={{ fontSize: '0.88rem', color: '#888', fontStyle: 'italic', margin: '0 0 2rem' }}>
        Zverejnenie so súhlasom zákonného zástupcu
      </p>

      <SectionTitle>Ako sa to podarilo</SectionTitle>

      <Body>
        Zabezpečenie prístroja bolo možné najmä vďaka iniciatíve Slovenskej asociácie cystickej fibrózy, ktorá
        pristúpila k jeho obstarávaniu formou postupného financovania a umožnila jeho včasné dodanie a uvedenie do
        prevádzky. Cena prístroja je <strong>22 069 eur</strong>.
      </Body>

      <Body>Na financovaní prístroja sa podieľajú:</Body>
      <ul>
        <li>Slovenská asociácia cystickej fibrózy</li>
        <li>Neónka Banská Bystrica – verejná zbierka „Akvárium"</li>
        <li>Klub cystickej fibrózy</li>
      </ul>

      <Body style={{ color: '#666', fontSize: '0.95rem' }}>
        Slovenská asociácia cystickej fibrózy uhradila 7 069 eur a Klub cystickej fibrózy 4 000 eur. Prostriedky
        z verejnej zbierky vo výške 7 000 eur boli použité na spolufinancovanie prístroja. Zostávajúca časť bude
        dofinancovaná na základe dohody – Klub cystickej fibrózy prispeje ešte 3 000 eur a Slovenská asociácia
        cystickej fibrózy uhradí zvyšok.
      </Body>

      <StatBox>Proste sme sa poskladali... ako sme vedeli.</StatBox>

      <Body>
        Vďaka tejto spolupráci sa podarilo zabezpečiť prístroj, ktorý by inak nebolo možné v takom čase obstarať.
      </Body>

      <SectionTitle>Príbeh Aničky a kabíny, ktorá počúva pľúca</SectionTitle>

      <Body>
        Anička má 10 rokov. Miluje jazdu na kolobežke, spieva v zbore a doma má škrečka menom Hopsík. V posledných
        mesiacoch ju však pri behu začalo pichať v hrudníku, v noci ju budil kašeľ a rýchlo sa zadýchala. Jej pani
        doktorka ju poslala na špeciálne vyšetrenie do Detskej fakultnej nemocnice v Banskej Bystrici.
      </Body>

      <Body>
        Trochu sa bála, ale v ambulancii ju privítali s úsmevom a povedali:
        <br />
        <em>„Anička, dnes pôjdeš do kabíny, ktorá vie počúvať, ako dýchaš!"</em>
      </Body>

      <Body>
        Kabína sa volala bodypletyzmograf – vyzerala ako veľká priehľadná búdka. Sadla si, zavreli sa dvere a dýchala
        ako obyčajne. Občas jej sestrička povedala, aby zadržala dych, alebo fúkala „ako sopka". Pripomenulo jej to
        spev v zbore – len bez melódie.
      </Body>

      <Body>
        Lekári zistili, že Anička má detskú astmu. Do liečby jej nasadili inhalátor a už o mesiac sa cítila oveľa
        lepšie. Nemusela ísť na vyšetrenie pre dospelých a všetko prebehlo bez stresu, v priateľskom prostredí.
      </Body>

      <Body>
        Dnes znovu jazdí na kolobežke bez prestávky a Hopsík sa už nebudí jej kašľom.
      </Body>

      <SectionTitle>Ďakujeme</SectionTitle>

      <Body>
        Ďakujeme všetkým darcom, partnerom a podporovateľom, ktorí pomohli zabezpečiť tento prístroj. Vďaka nim sa
        podarilo odstrániť významný prístrojový deficit a zlepšiť starostlivosť o detských pacientov v regióne.
      </Body>

      <SectionTitle>Informácie o zbierke</SectionTitle>

      <Body>
        Ide o verejnú zbierku registrovanú Ministerstvom vnútra Slovenskej republiky pod názvom:
      </Body>
      <StatBox>
        „Akvárium – zakúpenie bodypletyzmografického prístroja pre detskú pneumologickú ambulanciu v Detskej
        fakultnej nemocnici v Banskej Bystrici"
        <br />
        <span style={{ fontWeight: 400, fontSize: '0.95rem' }}>
          Registrovaná v registri verejných zbierok pod číslom: 000-2025-025566
        </span>
      </StatBox>
    </PageWrap>
  );
}
