'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainWrapper = styled.main`
  width: 100%;
  height: fit-content;
  padding: 48px 10rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;

  transition: padding 0.5s ease;

  @media (max-width: 1640px) {
    padding: 48px 12rem;
  }

  @media (max-width: 1400px) {
    padding: 48px 14rem;
  }

  @media (max-width: 1200px) {
    padding: 48px 16rem;
  }
`;

export const PageTitleWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;

  div {
    h1 {
      font-size: 28px;
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
    p {
      font-size: 14px;
      color: ${PALETTE.LIGHT_BLACK};
    }
  }
`;

export const UserInteractionWrapper = styled.div`
  width: calc(52px * 2);
  height: 52px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  box-shadow: 0px 0px 8px 1px ${PALETTE.SUB_WHITE};
  border-radius: 50px;
`;

export const CardsGridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 52px;

  @media (max-width: 1640px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 998px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 538px;
  }
`;
