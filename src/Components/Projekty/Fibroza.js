import React from 'react';
import zbierka0 from '../../assets/events/zbierka/zbierka0.jpg';
import zbierka1 from '../../assets/events/zbierka/zbierka1.jpg';
import zbierka2 from '../../assets/events/zbierka/zbierka2.jpg';
import zbierka3 from '../../assets/events/zbierka/zbierka3.jpg';
import { PageWrap, PageTitle, SectionTitle, Body, ImageRow, VideoWrap, StatBox } from './ProjectLayout';

export default function Fibroza() {
  return (
    <PageWrap>
      <PageTitle>Oznam o ukončení verejnej zbierky „Čas je drahý"</PageTitle>

      <Body>
        Oznam o ukončení verejnej zbierky Čas je drahý – „Pomôžte nám zmodernizovať diagnostiku cystickej fibrózy
        na Slovensku" zapísanú do registra verejných zbierok pod registrovým číslom 000-2020-028069.
      </Body>

      <StatBox>
        Spolu s Vami sa nám{' '}
        <span className="yellow">podarilo vyzbierať 7 290 eur potrebných na kúpu hodinkového prístroja Macroduct</span>.
        Tento prístroj sme zakúpili 3.5.2021 a od polovice mája sme ním začali vyšetrovať naše deti!
      </StatBox>

      <Body>
        Vzhľadom na to, že toho času toto moderné vyšetrenie nie je hradené zdravotnou poisťovňou (naši
        pneumológovia vybavujú zaradenie výkonu k výkonom hradených zdravotnou poisťovňou) je nutné dokupovanie
        vyšetrovacích setov do prístroja.{' '}
        <span className="yellow">
          Aby táto vyšetrovacia metóda bola pre pacienta bezplatná, nakúpilo vyšetrovacie sety okrem OZ Neónka aj
          Svetielko nádeje a Klub priateľov DFN.
        </span>{' '}
        Sme radi, že takýto „zlatý štandard" v pneumologickej ambulancii máme a myšlienku modernej a finančne
        dostupnej diagnostiky cystickej fibrózy budeme naďalej podporovať! Na tomto projekte sa podieľalo množstvo
        ľudí a my vám všetkým zo srdca ďakujeme!{' '}
        <span role="img" aria-label="heart emoji">❤️</span> Vážime si jedinečnú spoluprácu s Jana Križová a Michaela
        Mimi Križová! Zvládli sme to?! Iba čas ukáže. Stále platí, že čas je drahý!{' '}
        <span role="img" aria-label="timer emoji">⏱</span>
      </Body>

      <ImageRow>
        <img src={zbierka0} alt="Použitie zakúpeného prístroja" />
        <img src={zbierka1} alt="Použitie zakúpeného prístroja" />
        <img src={zbierka2} alt="Použitie zakúpeného prístroja" />
        <img src={zbierka3} alt="Použitie zakúpeného prístroja" />
      </ImageRow>

      <SectionTitle>O zbierke</SectionTitle>

      <VideoWrap>
        <iframe
          src="https://www.youtube.com/embed/bLpMd881g-A"
          title="Video zbierky"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrap>

      <Body>
        Naším cieľom je zaviesť na našej ambulancii moderné vyšetrovanie chloridov v pote pomocou Macroduct systému,
        čím by sme nielenže zefektívnili našu prácu, ale v prvom rade dali šancu pacientom s cystickou fibrózou na
        rýchle a kvalitné stanovenie diagnózy. Pred niekoľkými rokmi sa rovnala diagnóza cystickej fibrózy nielen
        nemožnosti prežiť detstvo plnohodnotne a mimo stien nemocnice, ale bohužiaľ aj slabú nádej na dosiahnutie
        dospelosti vôbec. Avšak žijeme v dobe, kedy medicína dosiahla obrovský pokrok v podobe kauzálnej liečby.
      </Body>

      <ul>
        <li>
          Banská Bystrica je jedným z{' '}
          <span className="yellow bold">3 Centier pre liečbu pacientov s cystickou fibrózou v Slovenskej republike</span>.
          Ostatné dva sa nachádzajú v Bratislave a v Košiciach.
        </li>
        <li>
          Cystická fibróza je autozomálne recesívne ochorenie, ktoré patrí medzi zriedkavé choroby. Je celoživotné.
          Podstatou je porucha na úrovni CFTR génu, ktorá má za následok poruchu transportu sodíka a chloridov v
          orgánoch obsahujúcich žľazy s vonkajším vylučovaním. Postihuje takmer všetky orgány, no najviac dýchací
          a tráviaci trakt.
        </li>
        <li>Trpí ním cca 150 detských pacientov na Slovensku.</li>
        <li>
          Od roku 2013 je toto ochorenie súčasťou tzv. novorodeneckého skríningu. U každého novorodenca detekujeme
          na 4. deň života prítomnosť imunorektívneho trypsinogénu metódou suchej kvapky získanej z pätičky. Hladina
          sa potom vyšetruje v Národnom skríningovom centre v Banskej Bystrici.
        </li>
        <li>
          Pri vyššej hodnote sú deti predvolané na pokračovanie v diagnostike vyšetrením chloridov v pote. Mesačne
          vyšetríme okolo 15 pacientov.
        </li>
        <li>
          Väčšina pochádza zo skríningu, niektorí pacienti sú vyšetrovaní pre tzv. „podozrivú anamnézu". Na našej
          ambulancii sa vykonáva metódou pilokarpínovej ionoforézy a trvá približne 60 minút. Výsledok vyšetrenia
          máme k dispozícii na druhý deň. Treba podotknúť, že táto metóda je v celosvetovom meradle považovaná už
          za zastaralú. Momentálne sa preferuje stanovenie chloridov v pote pomocou Macroduct systému (zber potu je
          pomocou hodiniek). Výhodou je jednoduchosť, kratšia doba samotnej procedúry (20 minút), väčší komfort pre
          pacienta, ako aj možnosť mať k dispozícii výsledok už v deň vyšetrenia, nižší počet chýb
          v predanalytickej a analytickej fáze.
        </li>
      </ul>
    </PageWrap>
  );
}
