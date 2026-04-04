import React from 'react';
import styled from 'styled-components';

import { pinkColor } from '../../style/colors';
import { useReveal } from '../../hooks/useReveal';

const GOALS = [
  'Zlepšovanie kvality nemedicínskej starostlivosti pediatrickým pacientom hospitalizovaných na lôžkovom oddelení II. DK SZU DFNsP BB',
  'Pomoc pri zabezpečení liečebného režimu — preplácanie liekov, sociálna a materiálna podpora u chronicky chorých pacientov',
  'Zabezpečovanie nového prístrojového a materiálneho vybavenia na oddelení, ambulanciách a zdravotných pomôcok pre domácu liečbu',
  'Zlepšovanie prostredia na oddelení a ambulanciách, komfort sprevádzajúcich osôb, skrášlovanie okolia nemocnice',
  'Poradenské služby pre rodičov a laikov formou verbálnej komunikácie a publikačných materiálov',
  'Edukačné kurzy pre laikov aj odbornú verejnosť — semináre, kurzy, školenia, skupinové sedenia a letné tábory pre chronicky choré deti',
  'Organizácia benefičných zbierok',
  'Publikácie informačných materiálov a sprístupňovanie informácií',
  'Zakúpenie odbornej literatúry pre lekárov, sestry a pacientov',
  'Podpora vzdelávania lekárov a sestier',
  'Pomoc pri zabezpečení potrebnej životnej úrovne v rámci liečebného režimu',
  'Zabezpečenie nutričného programu na detskom oddelení',
  'Zavedenie canisterapie 🐶',
  'Vytváranie zahraničnej spolupráce a výmenné odborné pobyty na zahraničných pracoviskách',
  'Vytváranie možností na zlepšenie medicínskej starostlivosti komunikáciou so zahraničím',
];

export default function Ciele() {
  const ref = useReveal();

  return (
    <Section id="ciele">
      <Inner ref={ref} className="reveal">
        <Heading>Naše ciele</Heading>
        <List>
          {GOALS.map((goal, i) => (
            <GoalItem key={i}>
              <Num>{i + 1}</Num>
              <span>{goal}</span>
            </GoalItem>
          ))}
        </List>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 12vw;

  @media (max-width: 1500px) { padding: 0 8vw; }
  @media (max-width: 800px)  { padding: 0 6vw; }
  @media (max-width: 400px)  { padding: 0 5vw; }
`;

const Inner = styled.div`
  padding: 5rem 0;
`;

const Heading = styled.h3`
  color: ${pinkColor};
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;

  @media (max-width: 500px) { font-size: 2rem; }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const GoalItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #2a2a2a;

  @media (max-width: 600px) { font-size: 0.93rem; }
`;

const Num = styled.span`
  flex-shrink: 0;
  min-width: 26px;
  height: 26px;
  background: ${pinkColor};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1;
`;
