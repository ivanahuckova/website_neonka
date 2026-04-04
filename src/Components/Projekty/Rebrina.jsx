import React from 'react';
import rebrina from '../../assets/rebrina.jpg';
import { PageWrap, PageTitle, Body, IllustrationImg, StatBox } from './ProjectLayout';

export default function Rebrina() {
  return (
    <PageWrap>
      <IllustrationImg src={rebrina} alt="Rebrina" />
      <PageTitle>O čom je projekt Rebrina?</PageTitle>

      <Body>
        Rebrina je pomôcka na cvičenie. Pri jej pravidelnom cvičení si vybudujete väčšiu silu, a tak sa dokážete
        zodvihnúť o stupienok vyššie. Ale potrebujete na to ČAS, TRPEZLIVOSŤ A PEVNÚ VÔĽU. A dobrého fyzioterapeuta!
      </Body>

      <StatBox>
        Projekt REBRINA vznikol pre potreby lepšieho prístupu ku kvalitným detským rehabilitáciám.
      </StatBox>

      <Body>
        Našim cieľom sú rýchlo dostupné a kvalitne prevedené cvičenia nielen pre detských neurologických pacientov. V
        tomto projekte spolupracujeme s{' '}
        <a href="https://bbfyzioterapia.sk">fyzioterapeutkou Mgr. Zlaticou Žigmundovou</a>, ktorá má skúsenosti s
        detskými pacientami. Cvičenia sú uhrádzané plne.
      </Body>

      <Body>
        Spolupracujeme s neurorehabilitačným zariadením{' '}
        <a href="https://turehabilitujem.sk">NEUROGYM</a>, ktorý navštevujú hlavne predčasne narodené deti z našich
        ambulancií. Čiastočne uhrádzame rehabilitácie po traumách mozgu a miechy.
      </Body>

      <StatBox>
        Za rok 2024 sme uhradili rehabilitácie v sume <strong>3 203,50 EUR</strong>. Projekt od začiatku fungovania
        od 1/25 pomohol <strong>10 pacientom</strong> k prístupnejším rehabilitáciám.
      </StatBox>
    </PageWrap>
  );
}
