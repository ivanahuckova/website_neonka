import React from 'react';
import nemcianska2021 from '../../assets/nemcianska_2021.png';
import nemcianska2022 from '../../assets/nemcianska_2022.png';
import { PageWrap, PageTitle, SectionTitle, Body, ProjectImg, SectionDivider, StatBox } from './ProjectLayout';

export default function NemcianskaCyklomotanica() {
  return (
    <PageWrap>
      <PageTitle>Nemčianska cyklomotanica</PageTitle>

      <Body>
        Neónka sa zoznámila s <span className="yellow">Jurajom Žembom a jeho kamarátmi</span>, ktorí sú riadne do
        bicyklovania. Rozhodli sa cez nás pomôcť našim pacientom. Sme rady, že sme boli pri zrode tejto akcie.
      </Body>

      <Body>
        Viac info o preteku na stránke{' '}
        <a
          href="https://www.mtbliga.sk/?fbclid=IwAR1MAdlMUkMGHVCQ4SSfCCRy6MpOzmJIepfZrEr6jVO6DE381MqHxRHTms8"
          rel="noopener noreferrer"
          target="_blank"
        >
          Nemčianskej cyklomotanice
        </a>
        .
      </Body>

      <SectionDivider />

      <SectionTitle>Nemčianska cyklomotanica 2022</SectionTitle>

      <Body>
        Tento ročník bol lepší, bolo cítiť rodinnú atmosféru a my sme sa cítili veľmi príjemne, hoci bola riadna
        zima – i keď to bolo 18. septembra 2022.{' '}
        <span className="yellow">Zvýšil sa počet pretekárov na 62.</span>
      </Body>

      <Body>
        Táto cyklomotanica bola pre nás v znamení príbehu o gombíkovej baterke. Prehltnutej gombíkovej baterke,
        ktorá dokáže v čreve narobiť veľkú pohromu. Gombíková prehltnutá baterka sa prilepila na stenu pažeráka
        malej Zary. Popálila pažerák a za istý čas vytvorila drobnú dierku až do najväčšej tepny, priamo za
        pažerákom – aorty. Z tejto „dierky" následne Zara niekoľkokrát skoro vykrvácala a bolo ju treba oživovať.
        Vďaka odborníkom v detskom kardiocentre sa podarilo dieru v tepne úspešne uzatvoriť. Závažné krvácanie
        však spôsobilo stav podobný mŕtvici a tak Zarina pravá ruka a pravá noha nefungujú na 100%. Šibalský pohľad
        sa však nezmenil.
      </Body>

      <StatBox>
        <span className="yellow">Dobrovoľný výťažok z 1. ročníka bol 155 eur.</span> A my ideme do konca roka
        opätovne zháňať, aby sme{' '}
        <span className="yellow">
          Zare mohli kúpiť pohybový liečebný bicykel – typ MOTOmed viva 2, ktorý slúži na posilňovanie a udržanie
          svalovej sily.
        </span>
      </StatBox>

      <ProjectImg src={nemcianska2022} alt="Cyklomotanica 2022" />

      <SectionDivider />

      <SectionTitle>Nemčianska cyklomotanica 2021</SectionTitle>

      <Body>
        0. ročník Nemčianskej cyklomotanice (bicyklových pretekov) sa konal 12. septembra 2021 v obci Nemce. V tento
        deň súťažilo{' '}
        <span className="yellow">48 pretekárov a 1 euro zo štartovného sa zbieralo pre nášho 14-ročného pacienta
        Olivera</span>{' '}
        s vrodenou vývojovou chybou mozgu, s ňou súvisiacou mentálnou zaostalosťou, epilepsiou, autizmom,
        obezitou... Papier zvládne veľa. Rodičia musia zvládnuť oveľa-oveľa viac.
      </Body>

      <StatBox>
        <span className="yellow">Pre Olivera sme chceli kúpiť špeciálny elektrobicykel</span> – rikšu, značky
        BABBOE, prispôsobený práve pre jeho vysokú hmotnosť. Jeho váha už presiahla vyše 100 kíl a jeho matka ho
        nevládze voziť v obyčajnom bicykli.{' '}
        <span className="yellow">Výťažok z nultej cyklomotanice bol takmer 212 eur.</span> Do konca roka 2021 sa
        nám podarilo dať dokopy 2 000 eur, a to za pomoci mnohých ďalších (Babboe, obyvatelia obce Divín, koliba
        Ožďany).
      </StatBox>

      <Body>A Oliver dnes:</Body>
      <ProjectImg src={nemcianska2021} alt="Oliver" />
    </PageWrap>
  );
}
