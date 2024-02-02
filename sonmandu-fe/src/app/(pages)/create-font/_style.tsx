'use client';

import { PALETTE, notoSansKr } from 'styles';
import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  @media (max-width: 1200px) {
    height: 120vh;
  }
`;

export const MainContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

/*------------ 손글씨 만들기 순서도 --------------*/
export const StepWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  > *:not(:last-child) {
    margin-right: -5px;
  }
  @media (max-width: 1474px) {
    :nth-child(4) {
      display: none;
    }
  }
`;

export const Step = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;

  > p {
    font-weight: ${notoSansKr.extraBold.style.fontWeight};
    font-size: 19px;
    color: ${PALETTE.MAIN_BLACK};
    text-align: center;
    padding-bottom: 10px;
    padding-right: 22px;
  }
`;

export const StepSign = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  > *:not(:last-child) {
    margin-right: -10px;
  }
`;

export const StepLineWrapper = styled.div`
  width: fit-content;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const StepLine = styled.div`
  width: calc(20vw);
  max-width: 270px;
  min-width: 200px;
  height: 10px;
  background-color: ${PALETTE.MAIN_ORANGE};

  @media (min-width: 1500px) {
    width: 290px;
  }
`;

export const StepCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  border-radius: 50px;
`;

/*---------손글씨 만들기 카드---------*/

export const Card = styled.div`
  width: 100%;
  height: auto;
  min-height: 70vh; // 화면 높이의 80%를 넘지 않도록 설정
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 48px 68px;

  @media (max-width: 1200px) {
    width: 100%;
    box-shadow: none;
  }
`;
