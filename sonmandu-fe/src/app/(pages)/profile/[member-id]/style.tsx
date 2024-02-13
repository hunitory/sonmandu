'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

interface PlaceholderTextProps {
  $failLogin?: boolean;
  $isempty?: boolean;
}

interface CommentInputDivProps {
  $isExpanded: boolean;
}

export const ProfilePageWapper = styled.div`
  width: 100vw;
  height: fit-content;
`;

export const WholeWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 4vw 0 0 11vw;
`;

export const ProfileWrapper = styled.div`
  width: 68vw;
  height: fit-content;
  gap: 10%;
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

export const ProfileInfoModalWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  position: absolute;
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
  width: fit-content;
  height: fit-content;
  display: flex;
  padding: 12px 14px;
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
  color: ${PALETTE.MAIN_BLACK};
  & .vertical {
    padding: 0;
  }
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
  gap: 0.5vw;
  align-items: flex-end;
  padding-right: 30px;
  span {
    font-size: clamp(18px, 1.2vw, 21px);
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-family: ${notoSansKr.bold.style.fontFamily};
    cursor: pointer;
  }
`;

export const ProfileBoxInfoDiv = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
`;

export const ProfileInfoLink = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  cursor: pointer;
`;

export const ProfileBoxInfoLink = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    div {
      width: fit-content;
      height: fit-content;
      padding: 3px 13px;
      border: 1px solid ${PALETTE.LIGHT_BLACK};
      border-radius: 20px;
    }
    display: block;
    font-size: 15px;
    color: ${PALETTE.MAIN_BLACK};
    cursor: pointer;
  }
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
  font-family: ${notoSansKr.black.style.fontFamily};
  font-size: clamp(24px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(24px, 3vw, 33px);
  }
`;

export const CommentInputAreaWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  /* div {
    display: none;
  }

  &:focus-within {
    div { 
      display: flex;
      flex-direction: row-reverse;
      gap: 15px;
    }
    textarea {
      border: 2px solid ${PALETTE.MAIN_ORANGE};
      height: 16vh;
    }
  } */
`;

export const CommentInputPlaceholder = styled.span<PlaceholderTextProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  padding: 2vh 2vw;
  pointer-events: none;
  display: ${(props) => (props.$isempty ? 'block' : 'none')};
`;

export const CommentInputArea = styled.textarea<CommentInputDivProps>`
  width: 100%;
  font-size: max(14px, 0.8vw);
  padding: 2vh 2vw;
  border-radius: 20px;
  transition: height 0.3s ease;

  border: ${({ $isExpanded }) =>
    $isExpanded ? `2px solid ${PALETTE.MAIN_ORANGE}` : `1px solid ${PALETTE.LIGHT_BLACK}`};
  height: ${({ $isExpanded }) => ($isExpanded ? '16vh' : '12vh')};
`;

export const CommentButtonDiv = styled.div<CommentInputDivProps>`
  display: ${({ $isExpanded }) => ($isExpanded ? 'flex' : 'none')};
  flex-direction: row-reverse;
  gap: 15px;
`;

export const CommentWriteBackButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: clamp(4px, 0.3vw, 10px) clamp(30px, 2vw, 37px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(14px, 1vw, 18px);
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
`;

export const CommentWriteButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: white;
  background-color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(14px, 1vw, 18px);
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
`;

export const ProfileIntroContents = styled.div`
  width: 100%;
  height: fit-content;
  font-size: max(16px, 1vw);
  white-space: pre-line;
  @media screen and (max-width: 676) {
    font-size: 14px;
  }
  color: ${PALETTE.MAIN_BLACK};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  font-family: ${notoSansKr.regular.style.fontFamily};
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
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  color: ${PALETTE.LIGHT_BLACK};
  font-size: clamp(12px, 1vw, 20px);
  font-weight: ${notoSansKr.medium.style.fontWeight};
  font-family: ${notoSansKr.medium.style.fontFamily};
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
  font-family: ${notoSansKr.black.style.fontFamily};
  color: ${PALETTE.MAIN_BLACK};
  font-size: clamp(24px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(24px, 3vw, 33px);
  }
`;

export const ProfileHandwritingsSpan2 = styled.span`
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(24px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(24px, 3vw, 33px);
  }
`;

export const ProfileHandwritingsDiv = styled.div`
  padding: 0 1vw;
  @media screen and (max-width: 1700px) {
    padding: 0;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  row-gap: 2vw;
  margin: 26px 0 56px 0;
  place-items: center;
`;

// --------------------손글씨 이야기-------------------------

export const ProfileHandwritingStoriesWrapper = styled.div`
  padding: 0 1vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2vw;
  margin: 26px 0 56px 0;
  place-items: center;
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
  font-family: ${notoSansKr.black.style.fontFamily};
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(28px, 1.5vw, 33px);
  @media screen and (max-width: 1150px) {
    font-size: clamp(28px, 3vw, 33px);
  }
`;

export const ProfileHandwritingStoriesDiv = styled.div`
  padding: 0 1vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2vw;
  margin: 26px 0 56px 0;
  place-items: center;
`;

export const BaseStoryCardWrapper = styled.div`
  width: 300px;
  height: 497px;
`;
