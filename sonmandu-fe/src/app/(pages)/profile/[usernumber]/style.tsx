'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

export const ProfilePageWapper = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  padding: 4vw 0 0 12vw;
  `;
  // justify-content: center;
  
export const ProfileWrapper = styled.div`
  width: 70vw;
  height: fit-content;
  gap: 13%;
  display: grid;
  grid-template-columns: clamp(100px, 20vw, 380px) 1fr;
  @media only screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 676px) {
    width: 80vw;
  }
`;

export const ProfileLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
`;

export const ProfileLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7vw;

  @media only screen and (max-width: 1150px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  `;
  // padding-bottom: 10px;
  // border-bottom: 2px solid ${PALETTE.SUB_WHITE};
  
export const ProfileBoxDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 12px 14px;
  font-weight: ${notoSansKr.black.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};

  @media screen and (max-width: 1150px) {
    width: 60%;
  }

  @media screen and (max-width: 676px) {
    width: 289px;
  }
`;

export const ProfileIndexWrapper = styled.div`
  position: sticky;
  top: 150px;
  width: 100%;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const ProfileIndexDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: flex-end;
  padding-right: 30px;
`;

export const ProfileIndexSpan = styled.span`
  font-size: 1.5vw;
`;

// --------------------좌우 구분----------------------

export const ProfileRightWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 40px;
`;

export const ProfileIntroDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const ProfileIntroDivUp = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const ProfileIntroSpan = styled.span`
  width: 100%;
  height: fit-content;
  color: ${PALETTE.MAIN_BLACK};
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-size: clamp(28px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(28px, 3vw, 33px);
  }
`;

export const ProfileIntroContents = styled.p`
  width: 100%;
  height: fit-content;
  font-size: clamp(18px, 1vw, 21px);
  color: ${PALETTE.MAIN_BLACK};
  font-weight: ${notoSansKr.regular.style.fontWeight};
`;

export const BaseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3vw 1vw;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  color: ${PALETTE.LIGHT_BLACK};
  font-size: clamp(8px, 1vw, 20px);
  font-weight: ${notoSansKr.medium.style.fontWeight};
`;

export const ProfileIntroDivDown = styled.div``;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${PALETTE.SUB_WHITE};
`;

// 제작한 글씨-------------

export const ProfileHandwritingsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ProfileHandwritingsSpanDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 3px;
`;

export const ProfileHandwritingsSpan1 = styled.span`
  font-weight: ${notoSansKr.black.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
  font-size: clamp(28px, 1.5vw, 33px);
    @media screen and (max-width: 1150px) {
      font-size: clamp(28px, 3vw, 33px);
    }
`;

export const ProfileHandwritingsSpan2 = styled.span`
  font-weight: ${notoSansKr.black.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(28px, 1.5vw, 33px);
    @media screen and (max-width: 1150px) {
      font-size: clamp(28px, 3vw, 33px);
    }
`;

export const ProfileHandwritingsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2vw;
  column-gap: 0.5vw;
  margin: 26px 0 56px 0;
  place-items: center;
  @media screen and (min-width: 1500px) {
    place-items: initial;
  }
`;

// --------------------손글씨 이야기-------------------------

export const ProfileHandwritingStoriesWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const ProfileHandwritingStoriesSpanDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 3px;
`;

export const ProfileHandwritingStoriesSpan1 = styled.span`
  font-weight: ${notoSansKr.black.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
  font-size: clamp(28px, 1.5vw, 33px);
    @media screen and (max-width: 1150px) {
      font-size: clamp(28px, 3vw, 33px);
    }
`;

export const ProfileHandwritingStoriesSpan2 = styled.span`
font-weight: ${notoSansKr.black.style.fontWeight};
color: ${PALETTE.MAIN_ORANGE};
font-size: clamp(28px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(28px, 3vw, 33px);
  }
`;

export const ProfileHandwritingStoriesDiv = styled.div``;
