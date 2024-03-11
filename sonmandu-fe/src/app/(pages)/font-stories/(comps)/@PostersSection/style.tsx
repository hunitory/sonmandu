'use client';

import styled from 'styled-components';

export const CardsGridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 52px;
  transition: padding 0.5s ease;
  padding-bottom: 48px;

  @media (max-width: 1720px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1128px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 2vw 48px 2vw;
    justify-items: center;
  }
`;
