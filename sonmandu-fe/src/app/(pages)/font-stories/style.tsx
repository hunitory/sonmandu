'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainWrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 0px;
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  width: 80%;
  height: fit-content;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
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
      font-weight: ${notoSansKr.extraLight.style.fontWeight};
      color: ${PALETTE.LIGHT_BLACK};
    }
  }

  @media (max-width: 1024px) {
    div {
      h1 {
        font-size: 24px;
        font-weight: ${notoSansKr.bold.style.fontWeight};
      }
      p {
        font-size: 12px;
        color: ${PALETTE.LIGHT_BLACK};
      }
    }
  }
`;

export const UserInteractionWrapper = styled.div`
  width: calc(36px * 2);
  height: 36px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  box-shadow: 0px 0px 8px 1px ${PALETTE.SUB_WHITE};
  border-radius: 50px;
`;

export const CardsGridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
