'use client';

import { PALETTE, notoSansKr } from 'styles';
import styled from 'styled-components';
import exp from 'constants';

export const FontCreateMainWrapper = styled.main`
  width: 100vw;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

export const FontCreateMainContainer = styled.div`
  width: 80%;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  gap: 10%;

  @media (max-width: 1128px) {
    width: 100%;
  }
`;

/*------------ 손글씨 만들기 순서도 --------------*/
export const FontCreateStepWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > *:not(:last-child) {
    margin-right: -5px;
  }
  @media (max-width: 1474px) {
    :nth-child(4) {
      display: none;
    }
  }
`;

export const FontCreateStep = styled.div`
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

export const FontCreateStepSign = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  > *:not(:last-child) {
    margin-right: -10px;
  }
`;

export const FontCreateStepLineWrapper = styled.div`
  width: fit-content;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const FontCreateStepLine = styled.div`
  width: calc(20vw); /* 화면 너비의 22%를 기본 값으로 설정 */
  max-width: 270px; /* 최대 너비는 290px로 제한 */
  min-width: 200px;
  height: 10px;
  background-color: ${PALETTE.MAIN_ORANGE};

  @media (min-width: 1500px) {
    width: 290px; /* 화면 너비가 1300px 이상일 때는 너비를 290px로 고정 */
  }
`;

export const FontCreateStepCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  border-radius: 50px;
`;

/*---------손글씨 만들기 카드---------*/

export const FontCreateCard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 48px 66px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1128px) {
    width: 100%;
    box-shadow: none;
  }
`;
