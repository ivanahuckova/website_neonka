import React from 'react';
import kniha from '../../assets/logo_kniha.png';
import { PageWrap, PageTitle, Body, IllustrationImg, StatBox } from './ProjectLayout';

export default function Vzdelavanie() {
  return (
    <PageWrap>
      <IllustrationImg src={kniha} alt="Vzdelávanie logo" />
      <PageTitle>Vzdelávanie lekárov a sestier</PageTitle>

      <Body>
        Od roku 2024 podporujeme vzdelávanie lekárov a sestier. Veríme, že kontinuálne vzdelávanie zdravotníckeho
        personálu priamo prispieva k lepšej starostlivosti o detských pacientov.
      </Body>

      <StatBox>
        Projekt <strong>Vzdelávanie</strong> je aktívny od roku 2024 a financuje odborné kurzy, konferencie
        a vzdelávacie materiály pre lekárov a sestry z Detskej fakultnej nemocnice v Banskej Bystrici.
      </StatBox>
    </PageWrap>
  );
}
