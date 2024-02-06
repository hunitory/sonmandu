'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton, BaseLabelWithInput } from 'components';

interface PlaceholderTitleProps {
  $failLogin?: boolean;
  $isempty?: boolean;
}

interface PlaceholderTextProps {
  $failLogin?: boolean;
  $isempty2?: boolean;
}

interface TagButtonProps {
  handwriting?: number | null;
  currentIndex?: number;
  index?: number;
}

export const BackgroundWrapper = styled.div`
  /* transform: rotate(90deg); */
  position: absolute;
  z-index: -9999;
  width: calc(100vh - 56px);
  height: 100vw;
  /* background: linear-gradient(to right, ${PALETTE.MAIN_ORANGE}, ${PALETTE.WHITE_ORANGE}, #FF69B4); */
  /* background: conic-gradient(
		from 0deg,
		${PALETTE.MAIN_ORANGE},
		${PALETTE.WHITE_ORANGE},
		#FF69B4,
		${PALETTE.MAIN_ORANGE}
	); */

  /* background: conic-gradient(
    from 0deg,
    ${PALETTE.LIGHT_ORANGE},
    #f5bcf3,
    ${PALETTE.LIGHT_ORANGE},
    #ffe2b9,
    #ffb59d,
    ${PALETTE.LIGHT_ORANGE}
  ); */
  width: 100vw;
  height: calc(100vh - 56px);
  background: linear-gradient(#ff5f6d, #ffc371);
`;

export const FontStoryWriteWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 56px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WriteWrapper = styled.div`
  width: 38vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  border-radius: 18px;
  padding: 3vh 0;
  background-color: white;
`;

export const WriteDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UpperWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const WriteIndexSpan = styled.span`
  font-size: 24px;
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
  color: ${PALETTE.MAIN_BLACK};
`;

export const LeftWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WriteTitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const WriteTitleRequest = styled.span`
  font-size: 16px;
  font-weight: ${notoSansKr.regular.style.fontWeight};
  font-family: ${notoSansKr.regular.style.fontFamily};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
  padding: 8px 10px;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
`;

export const TitleInputPlaceholder = styled.div<PlaceholderTitleProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  pointer-events: none;
  display: ${(props) => (props.$isempty ? 'block' : 'none')};
`;

export const TitleInput = styled(BaseLabelWithInput.Input)`
  font-size: max(16px, 0.8vw);
  width: 100%;
`;

export const WriteTagWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const RightWrapper = styled.div``;

export const TagWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 8px 3vw;
  gap: 1vw;
`;

export const CarouselBackButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  button {
    height: fit-content;
    background-color: white;
    border: 0;
    transform: scaleX(-1);
    cursor: pointer;
  }
`;

export const CarouselNextButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  button {
    height: fit-content;
    background-color: white;
    border: 0;
    cursor: pointer;
  }
`;

export const TagInputWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagButton = styled(BaseButton)<TagButtonProps>`
  font-size: 14px;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 10px);
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 20px;
  color: ${PALETTE.LIGHT_BLACK};

  display: ${(props) =>
    props.currentIndex !== undefined ? (props.currentIndex === props.index ? 'block' : 'none') : 'block'};

  &:not(.true):hover {
    transform: translate(-2px, -2px);
    box-shadow: 0px 2px 2px 2px ${PALETTE.SUB_WHITE};
    transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  }

  &.true {
    color: ${PALETTE.MAIN_ORANGE};
    font-family: ${notoSansKr.bold.style.fontFamily};
    border: 3px solid ${PALETTE.MAIN_ORANGE};
  }
`;

export const WriteTextWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextInputAreaWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 12px 0 0 0;
`;

export const TextInputPlaceholder = styled.div<PlaceholderTextProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  padding: 2vh 2vw;
  pointer-events: none;
  display: ${(props) => (props.$isempty2 ? 'block' : 'none')};
`;

export const TextInputArea = styled.textarea`
  width: 100%;
  height: 28vh;
  font-size: max(14px, 0.8vw);
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  padding: 2vh 2vw;
  border-radius: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const SubmitButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 18px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(12px, 1vw, 16px);
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
`;
