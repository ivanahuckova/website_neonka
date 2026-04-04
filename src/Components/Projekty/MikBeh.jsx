import React from 'react';
import mik2019_1 from '../../assets/events/mik2019_1.jpg';
import mik2020_1 from '../../assets/events/mik2020_1.jpg';
import mik2020_2 from '../../assets/events/mik2020_2.jpg';
import mik2021_1 from '../../assets/events/mik2021_1.png';
import mik2021_2 from '../../assets/events/mik2021_2.png';
import mik2022_1 from '../../assets/events/mik2022_1.jpg';
import mik2022_2 from '../../assets/events/mik2022_2.png';
import mik2022_3 from '../../assets/events/mik2022_3.jpeg';
import mik2023_1 from '../../assets/events/mik2023_1.jpg';
import mik2023_2 from '../../assets/events/mik2023_2.jpg';
import { PageWrap, PageTitle, SectionTitle, Body, ProjectImg, SectionDivider, StatBox, ImageRow } from './ProjectLayout';

export default function MikBeh() {
  return (
    <PageWrap id="novinky">
      <PageTitle>Charitatívny Mikulášsky beh</PageTitle>

      {/* ── 2023 ── */}
      <SectionTitle id="mikbeh2023">Rebrina – Mikulášsky beh 2023</SectionTitle>

      <Body>
        Rebrina je pomôcka na cvičenie. Pri jej pravidelnom cvičení si vybudujete väčšiu silu, a tak sa dokážete
        zodvihnúť o stupienok vyššie. Ale potrebujete na to ČAS, TRPEZLIVOSŤ A PEVNÚ VÔĽU. Takýmito superschopnosťami
        disponujú rodičia našich PREDČASNE narodených detských pacientov. 10. ročník Mikulášskeho behu pod názvom
        Rebrina bol venovaný <span className="yellow">predčasne narodenému Tomášovi</span>, ktorý sa narodil o 4
        mesiace skôr (v 25. týždni tehotenstva).
      </Body>

      <ProjectImg src={mik2023_1} alt="Tomáš" />

      <Body>
        Predčasne narodené deti majú mnoho komplikácií, ktoré súvisia s nezrelosťou všetkých orgánov v tele.
        Fyzické a mentálne znevýhodnenie veľmi závisí od poškodenia mozgu – od najťažších foriem detskej mozgovej
        obrny až po ľahšie formy, ktoré sú schopné CHÔDZE a iných pre nás úplne samozrejmých činností. Rodičia
        takýchto detí sú neustále na BEHU. Jeden z ich hlavných cieľov je zabezpečiť dieťaťu primeraný svalový
        pohyb. Rehabilitácie sú často hradené z rodinného rozpočtu a sú finančne náročné.
      </Body>

      <ProjectImg src={mik2023_2} alt="Mikulášsky beh 2023" />

      <StatBox>
        <span className="yellow">
          2.12.2023 sa 70 Mikulášov postavilo na štart a zabehli pre Tomáša. K výťažku 1 000 eur sme pridali
          Neonkovských 500 a celková suma venovaná Tomáškovi tak dosiahla 1 500 eur
        </span>
        , čo mu vystačí na 3 mesiace neurorehabilitácií pod vedením skúsených fyzioterapeutov z Neurogymu.
      </StatBox>

      <SectionDivider />

      {/* ── 2022 ── */}
      <SectionTitle id="mikbeh2022">„Mikuláš na baterky" – Mikulášsky beh 2022</SectionTitle>

      <Body>
        <strong>Prečo „Mikuláš na baterky" alebo, kto je to Zara?</strong>
      </Body>

      <Body>
        Zara má teraz 4 roky, je typické, veľmi zvedavé batoľa, ktoré prehltlo pred vyše rokom baterku. Prehltnutá
        baterka (vo veľkosti 1 €) sa prilepila na stenu jej pažeráka. Spôsobila drobné prederavenie pažeráka a aj
        najväčšej tepny priamo za pažerákom – aorty. Z tejto „dierky" následne Zara niekoľkokrát skoro vykrvácala
        a bolo ju treba oživovať. Zaru sa vďaka odborníkom podarilo zachrániť... Závažné krvácanie však spôsobilo
        stav podobný mŕtvici a tak Zarina pravá ruka a noha nefungujú na 100%.{' '}
        <span className="yellow">
          Výťažok z 9. ročníka Mikulášskeho behu je určený na kúpu špeciálneho bicykla – typ MOTOmed gracile
        </span>
        , ktorý slúži na posilňovanie a udržanie svalovej sily (cena bicykla 2 650 eur).
      </Body>

      <ProjectImg src={mik2022_2} alt="Zara" />

      <StatBox>
        <strong>Bilancia 2022</strong>
        <br />
        9. ročníka Mikulášskeho behu „Mikuláš na baterky" sa aktívne zúčastnilo{' '}
        <span className="yellow">98 červených mikulášov a výťažok zo štartovného dosiahol 1 205 eur!</span> Bicykel
        sme zakúpili 11.12.2022. Prostriedky naň sa nám podarilo dať dokopy aj za pomoci Starej tržnice, Luna
        studio – jogový kurz JOGA pre ZARU, Telovýchovná jednota Magura Zborov (futbalový zápas), 1. ročník
        Nemčianskej cyklomotanice.
      </StatBox>

      <ImageRow>
        <img src={mik2022_1} alt="Mikulášsky beh 2022" />
        <img src={mik2022_3} alt="Zara 2022" />
      </ImageRow>

      <SectionDivider />

      {/* ── 2021 ── */}
      <SectionTitle id="mikbeh2021">#Šnúrka – Mikulášsky beh 2021</SectionTitle>

      <Body>
        Mikulášsky Beh je srdcovka. S{' '}
        <a href="https://www.activeplanet.sk/">Active Planet Outdoor Centrum</a> sme počas 3 rokov vytvorili silný
        organizačný tím. Tento rok odštartoval Mikulášsky beh náš nový Neónka projekt{' '}
        <span className="yellow">#Šnúrka</span>, ktorý je venovaný pacientom s poruchami príjmu potravy. Detským
        pacientom s mentálnou anorexiou sme sa rozhodli pomôcť uhradením nutričnej terapie, v spolupráci s OZ Chuť
        žiť.
      </Body>

      <Body>
        Keďže základným liekom u týchto porúch je potrava, správna diagnostika stravovacích návykov a nastavenie
        vhodného jedálnička šitého na mieru konkrétnemu pacientovi je kľúčová. Nutričné poradenstvo by malo byť
        pevnou súčasťou liečby porúch príjmu potravy, ale bohužiaľ nie je. Pre mnohé rodiny je takáto konzultácia
        finančne nedostupná.
      </Body>

      <ProjectImg src={mik2021_1} alt="Mikulášsky beh 2021" />

      <Body>
        <strong>Ako to prebiehalo?</strong>
        <br />
        Pre Covid situáciu bol prvý termín Mikulášskeho presunutý na 18.12.2021. Bežala sa typická 1 km dlhá trasa
        od ESC po Námestie SNP. Bežalo sa na celom Slovensku distančne.
      </Body>

      <StatBox>
        <strong>Bilancia za rok 2021</strong>
        <br />
        Dokopy <span className="yellow">57 bežcov, 3 kočíky, 3 psy</span>. Sčítali sme, odpočítali sme a
        vyzbierali sme <span className="yellow">750 eur</span>, čím sa nám podarilo pomôcť 4 pacientom. A teraz
        obuť tenisky, zaviazať šnúrky a bežíme ďalej. Na dlhej trati, do kopca s novým projektom Šnúrka.
      </StatBox>

      <ProjectImg src={mik2021_2} alt="Mikulášsky beh 2021" />

      <SectionDivider />

      {/* ── 2020 ── */}
      <SectionTitle id="mikbeh2020">„Čas je drahý!" – Mikulášsky beh 2020</SectionTitle>

      <Body>
        OZ Neónka spojilo sily s OZ Crazy Women Active Planet. Keď sa spojí 5 žien, tak to má zmysel a veľkú silu
        pomôcť.
      </Body>

      <Body>
        <strong>VÝNIMOČNE – CELOSVETOVO – DIŠTANČNE</strong>
        <br />
        7. ročník Mikulášskeho behu „Čas je drahý" bol určený pre deti s cystickou fibrózou. Od októbra 2020 beží
        verejná zbierka s cieľom vyzbierať{' '}
        <span className="yellow">7 000 Eur na diagnostický prístroj</span>, ktorý umožní rýchlejšiu diagnostiku.
        Diagnostika cystickej fibrózy je postavená na stanovení chloridov v pote. V okolitých krajinách je možné
        diagnostikovať cystickú fibrózu jednoducho do 1 hodiny pomocou moderného hodinkového prístroja Macroduct.
        Na Slovensku vyšetrujeme chloridy v pote zastaralou metódou, kedy výsledok vyšetrenia máme k dispozícii za
        24 hodín od odobratia vzorky.
      </Body>

      <ProjectImg src={mik2020_1} alt="Mikulášsky beh 2020" />

      <Body>
        <strong>Ako náš charitatívny Mikulášsky beh vyzeral?</strong>
        <br />
        Vytvorili sme skupinky po 6 bežcov a tých sme štartovali každých 10 minút. V cieli na bežcov čakala
        skupina pánov z <span className="yellow">Lions klubu</span> s teplým čajom, jedna z rodín doniesla
        perníky, podarilo sa spraviť pekné fotografie, podujatie prišli podporiť aj samotní pacienti s cystickou
        fibrózou a tohtoročná 1. Vicemiss SR pochádzajúca z Banskej Bystrice Viktória Podmanická. Vďaka ochote a
        podpore firmy <span className="yellow">BB EXPO</span> sme mali darom 2 bilboardy.{' '}
        <span className="yellow">
          Firmy LIDL, Urpiner, Nebalené, Modrá púpava, Galvex, Active Planet
        </span>{' '}
        venovali krásnu tombolu a za to im ďakujeme.
      </Body>

      <StatBox>
        Distančnou formou sme vyzbierali <span className="yellow">320 eur</span>, cez registráciu účastníkov sa nám
        podarilo vyzbierať <span className="yellow">622 eur</span>. Všetkým veľmi pekne ďakujeme!
      </StatBox>

      <ProjectImg src={mik2020_2} alt="Mikulášsky beh 2020" />

      <Body>
        <strong>Čo je to cystická fibróza?</strong>
        <br />
        Cystická fibróza je genetické celoživotné ochorenie, ktorým trpí približne 150 detí na Slovensku. Postihuje
        najmä dýchací a tráviaci trakt (pľúca a črevo). Prejavuje sa opakovanými zápalmi dýchacích ciest,
        vykašliavaním hustého hlienu a podvýživou. V okolitých krajinách je možné diagnostikovať toto ochorenie
        jednoducho do 1 hodiny pomocou moderného hodinkového prístroja Macroduct. Na Slovensku vyšetrujeme chloridy
        v pote zastaralou metódou, kedy výsledok vyšetrenia máme k dispozícii o 24 hodín.
      </Body>

      <SectionDivider />

      {/* ── 2019 ── */}
      <SectionTitle id="mikbeh2019">„Dýchaj z hlboka!" – Mikulášsky beh 2019</SectionTitle>

      <Body>
        Občianske združenie Crazy WoMen Active Planet v spolupráci s občianskym združením Neónka Banská Bystrica
        zorganizovali na začiatku decembra už 6. ročník charitatívneho Mikulášskeho behu. Tento rok sa stretlo
        250 mikulášov, ktorý spoločne odštartovali a všetci bežali za jeden spoločný cieľ.
      </Body>

      <ProjectImg src={mik2019_1} alt="Mikulášsky beh 2019" />

      <Body>
        <strong>Za deti s cystickou fibrózou</strong>
        <br />
        Za výťažok z Mikulášskeho behu a za pomoci študentov z Gymnázia Jozefa Gregora Tajovského, ktorí venovali
        finančný výťažok z Tajáckeho adventného punču, sa nám podarilo nakúpiť 5 najmodernejších inhalátorov,
        ktoré sme venovali detským pacientom do 2 rokov z nášho centra pre liečbu cystickej fibrózy.
      </Body>

      <Body>
        <strong>Čo je to cystická fibróza?</strong>
      </Body>
      <ul>
        <li>Cystická fibróza je genetické metabolické ochorenie, ktoré vedie k tomu, že sa vo všetkých žľazách hromadí hustý sekrét.</li>
        <li>Toto ochorenie postihuje predovšetkým pľúca, tráviaci trakt a pohlavné orgány.</li>
        <li>V súčasnej dobe nedokážeme týchto pacientov vyliečiť, ale vďaka zlepšeniu liečebných možností neustále rastie očakávaná dĺžka života pacientov s CF.</li>
        <li>Pokročilé ochorenie obmedzuje to najzakladanejšie – pocit nadýchnuť sa z plných pľúc.</li>
        <li>Inhalačné prístroje pacientom uľahčujú vykašliavanie hustého hlienu a zlepšujú im pocit pri dýchaní.</li>
      </ul>
    </PageWrap>
  );
}
