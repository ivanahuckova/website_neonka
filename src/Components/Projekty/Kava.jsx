import React from 'react';
import kava from '../../assets/kava.png';
import kavaPhoto from '../../assets/kava_photo.jpeg';
import { PageWrap, PageTitle, Body, ProjectImg, IllustrationImg } from './ProjectLayout';

export default function Kava() {
  return (
    <PageWrap>
      <IllustrationImg src={kava} alt="Káva je dobrý nápad logo" />
      <PageTitle>Káva je vždy dobrý nápad</PageTitle>

      <Body>
        Projekt <span className="yellow">Káva je vždy dobrý nápad</span> zabezpečuje pre rodičov pacientov teplú
        kávu (dobrú 🙂) a čaj. Lebo aj malé gesto dokáže spríjemniť náročné chvíle strávené pri lôžku dieťaťa.
      </Body>

      <ProjectImg src={kavaPhoto} alt="Káva pre rodičov" style={{ maxWidth: '480px', margin: '0 auto' }} />
    </PageWrap>
  );
}
