'use client';

import { PALETTE, notoSansKr } from 'styles';
import styled from 'styled-components';

export const FontCreateMainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 0px;
`;


export const FontCreateStepWrapper = styled.div`
  width: 1200px;
  height: 80px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1224px) {
    // 화면 너비가 1224px 이하일 때 네 번째 요소를 숨깁니다.
    > div:nth-child(4) {
      display: none;
    }
  }
`;


export const FontCreateStep = styled.div`
  width: 25%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  > p {
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-size: 17px;
    text-align: center;
    padding-bottom: 10px;
  }
  @media (max-width: 1224px) {
    width: 33.3333%; // 화면을 3등분하기 위해 100%를 3으로 나눈 값
  }
`;

export const FontCreateStepSign = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
`

export const FontCreateStepLineWrapper = styled.div`
  width: 290px;
  display: flex;
  align-items: center;
`;

export const FontCreateStepLine = styled.div`
  width: 290px;
  height: 10px;
  background-color: ${PALETTE.MAIN_ORANGE};
`;

export const FontCreateStepCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  border-radius: 50px;
  position: relative; /* 상대 위치 설정 */
  right: 10px;
`;
