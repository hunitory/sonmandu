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

export const FontStoryDetailWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 6vh;
`;

export const DetailWrapper = styled.div`
  width: 54vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vw;
  @media screen and (max-width: 1150px) {
    width: 80vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UpperHeadWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBoxDiv = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const DetailInfoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const TitleSpan = styled.span`
  font-size: 1.6vw;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
`;

export const FontDateWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const FontLinkWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: max(14px, 0.8vw);
  text-decoration: underline;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

export const FontStoryDateWrapper = styled.span`
  font-size: max(14px, 0.8vw);
`;

export const TagsWrapper = styled.div`
  width: fit-content;
`;

export const FontStoryText = styled.div`
  width: 95%;
  height: fit-content;
  font-size: max(14px, 1vw);
  line-height: 1.5;
  white-space: pre-line;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
  margin-top: 3vw;
`;

export const VerticalProfileBoxDiv = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteSquare = styled.div`
  width: 180px;
  height: 96px;
  background-color: white;
  top: 0%;
  position: absolute;
`;

export const Line = styled.hr`
  top: 30.37%;
  width: 100%;
  height: 0.8px;
  border: 0;
  position: absolute;
  z-index: -9999;
  background-color: #cfcfcf;
`;

export const ProfileIntroduction = styled.div`
  width: 100%;
  height: fit-content;
  font-size: max(14px, 0.8vw);
  line-height: 1.5;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
`;

export const LinkButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(14px, 1vw, 18px);
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
`;
// 색깔 채운 버튼
// padding: clamp(4px, 0.5vw, 10px) clamp(9px, 1.2vw, 20px);
//   border: 2px solid ${PALETTE.MAIN_ORANGE};
//   border-radius: 20px;
//   /* color: ${PALETTE.MAIN_ORANGE}; */
// 	background-color: ${PALETTE.MAIN_ORANGE};
// 	color: white;

export const LowerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

export const LowerHeadWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const CommentReportSpan = styled.span`
  font-size: max(14px, 1.3vw);
  font-weight: ${notoSansKr.medium.style.fontWeight};
  font-family: ${notoSansKr.medium.style.fontFamily};
`;

export const CommentHeadLine = styled.hr`
  width: 100%;
  height: 0.8px;
  border: 0;
  background-color: #cfcfcf;
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

export const CommentsListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const CommentWrapperDiv = styled.div``;
