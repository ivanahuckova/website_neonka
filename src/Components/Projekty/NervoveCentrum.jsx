import React from 'react';
import otvorenie from '../../assets/otvorenie.jpg';
import { PageWrap, PageTitle, Body, ProjectImg, VideoWrap, StatBox } from './ProjectLayout';

export default function Centrum() {
  return (
    <PageWrap>
      <PageTitle>Stredoslovenské centrum pre nervovo-svalové ochorenia</PageTitle>

      <Body>
        Najmä vďaka vašej podpore sme v Banskej Bystrici otvorili moderné{' '}
        <span className="yellow">
          Stredoslovenské centrum pre diagnostiku a liečbu nervovo-svalových ochorení v detskom veku
        </span>
        . Takmer 11 000 eur sa nám podarilo vyzbierať za pomoci „neobyčajne obyčajných" ľudí 💛. Prispeli aj
        samotní rodičia pacientov so svalovými ochoreniami. Pri oficiálnom otvorení bol 12.6.2020 prítomný aj pán
        minister Marek Krajčí, ktorému sa na návšteve nášho centra páčilo. Sibylka, 9-ročná pacientka so spinálnou
        muskulárnou atrofiou, si pre neho pripravila fitnes bábovku, s ktorou sa s nami podelil.
      </Body>

      <VideoWrap>
        <iframe
          src="https://www.ta3.com/embed/20200613-hw-444f2aeb-4dbe-4ef5-a765-d4cb991ba778.html"
          frameBorder="0"
          scrolling="no"
          title="Reportáž o centre"
        />
      </VideoWrap>

      <StatBox>
        <strong>Slávnostné otvorenie</strong>
        <br />
        Centrum pokrstil <a href="https://www.instagram.com/fero_joke/">Fero Joke</a> s pani primárkou u nás v
        Detskej fakultnej nemocnici v Banskej Bystrici. Prišiel nás podporiť aj hlavný sponzor{' '}
        <a href="https://www.instagram.com/nataliapazicka/">Natália Pažická</a> s jej{' '}
        <a href="https://www.instagram.com/everyindividualmatters/">OZ every individual matters</a>. Kultúrnu
        zložku – Minuet od Bacha – zahrala naša známa pacientka a kamarátka. Za výborný catering ďakujeme{' '}
        <a href="https://www.instagram.com/sympl.food/">symplfood</a>. Hlavne ďakujeme všetkým Vám, ktorí ste
        prišli a boli ste s nami.
      </StatBox>

      <ProjectImg src={otvorenie} alt="Otvorenie centra" />

      <Body>
        <strong>Prečo sme centrum vytvorili?</strong>
      </Body>

      <Body>
        Svalové ochorenia v detskom veku nie sú veľmi časté, ale takmer vždy sa jedná o závažné stavy. Medzi
        svalové ochorenia vyskytujúce sa v detskom veku patrí napríklad aj spinálna muskulárna atrofia (SMA). Toto
        ochorenie je sprevádzané postupným úbytkom nervových buniek riadiacich svaly (motoneuróny), ktoré sa prejaví
        poruchou funkcie svalov a vedie k postupnému zlyhaniu všetkých svalov vrátane tých dýchacích.
      </Body>

      <Body>
        Kedysi toto ochorenie bolo neliečiteľné, aktuálne existuje vysoko špecifická liečba, ktorá zlepšuje týmto
        pacientom kvalitu života. Okrem SMA existujú mnohé ďalšie nervovosvalové ochorenia kam patria aj svalové
        dystrofie. V Slovenskej republike sú 2 centrá pre diagnostiku a liečbu detských nervovo-svalových ochorení,
        v <strong>Bratislave</strong> a v <strong>Košiciach</strong>. Liečba nami diagnostikovaných pacientov je
        niekedy obmedzená a môže byť podávaná len v centre, čo pre rodiny môže znamenať dochádzanie niekoľko stoviek
        kilometrov. Práve preto sme v <strong>Banskej Bystrici</strong> otvorili Stredoslovenské centrum pre
        diagnostiku a liečbu nervovo-svalových ochorení v detskom veku.
      </Body>

      <VideoWrap>
        <iframe
          src="https://www.youtube.com/embed/Hs2bO7_3uvo"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Sibylka o ochorení"
        />
      </VideoWrap>
    </PageWrap>
  );
}
