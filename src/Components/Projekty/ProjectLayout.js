/**
 * Shared styled components used across all project pages.
 * Import what you need and compose the page layout.
 */
import styled from 'styled-components';
import { pinkColor, yellowColor } from '../../style/colors';

export const PageWrap = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  @media (max-width: 600px) {
    padding: 2.5rem 1.25rem 4rem;
  }

  /* Yellow highlight spans */
  .yellow {
    background-color: ${yellowColor};
    padding: 1px 5px;
    border-radius: 3px;
    font-weight: 700;
  }

  /* Pink highlight spans */
  .pink {
    background-color: ${pinkColor};
    color: white;
    padding: 1px 5px;
    border-radius: 3px;
    font-weight: 700;
  }

  .bold {
    font-weight: 700;
  }

  /* Used as inline sub-heading */
  .padding {
    display: block;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
  }

  a {
    color: ${pinkColor};
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: opacity 0.2s ease;

    &:hover { opacity: 0.7; }
  }

  ul, ol {
    padding-left: 1.5rem;
    margin: 1rem 0;

    li {
      margin-bottom: 0.6rem;
      line-height: 1.7;
      font-size: 1rem;
    }
  }
`;

export const PageTitle = styled.h1`
  color: ${pinkColor};
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 1.75rem;

  @media (max-width: 600px) { font-size: 1.75rem; }
`;

export const SectionTitle = styled.h2`
  color: ${pinkColor};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 2.5rem 0 1rem;

  @media (max-width: 600px) { font-size: 1.3rem; }
`;

export const Body = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2a2a2a;
  margin: 0 0 1.1rem;

  @media (max-width: 600px) { font-size: 0.97rem; }
`;

/* Full-width photo image */
export const ProjectImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 14px;
  margin: 1.75rem 0;
`;

/* Small centered logo / character illustration */
export const IllustrationImg = styled.img`
  display: block;
  width: 220px;
  height: 220px;
  object-fit: contain;
  margin: 0 auto 2rem;
`;

export const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
  margin: 1.75rem 0;

  img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 12px;
  }
`;

/* Responsive 16:9 video container */
export const VideoWrap = styled.div`
  width: 100%;
  margin: 2rem 0;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 14px;
    display: block;
  }
`;

/* Divider between multi-year / multi-section pages */
export const SectionDivider = styled.hr`
  border: none;
  border-top: 2px solid rgba(0, 0, 0, 0.07);
  margin: 3rem 0;
`;

export const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${pinkColor};
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  margin-bottom: 1.75rem;
`;

export const StatBox = styled.div`
  background: ${yellowColor};
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.6;
`;
