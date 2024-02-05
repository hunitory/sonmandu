'use client'

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

export const BackgroundWrapper = styled.div`
	transform: rotate(90deg);
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

	background: conic-gradient(
		from 0deg,
		#ead6ee,
		#a0f1ea,
		#eae5c9,
		#6cc6cb,
		#ead6ee

	);
`

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
	gap: 20px;
`;

export const WriteIndexSpan = styled.span`
	font-size: 24px;
	font-weight: ${notoSansKr.black.style.fontWeight};
	font-family: ${notoSansKr.black.style.fontFamily};
	color: ${PALETTE.MAIN_BLACK};
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
	width: 60%;
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

export const TagWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	padding: 15px 2vw;
	gap: 2vw;
`

export const TagInputWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 10px);
	border: 1px solid ${PALETTE.LIGHT_BLACK};
	border-radius: 20px;
	color: ${PALETTE.LIGHT_BLACK};
`

export const TagButton = styled(BaseButton)`
	font-size: 14px;
`

export const WriteTextWrapper = styled.div`
	width: 100%;
	height: fit-content;
`

export const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const TextInputAreaWrapper = styled.div`
	width: 100%;
	height: fit-content;
	padding: 12px 0 0 0;
`

export const TextInputPlaceholder = styled.div<PlaceholderTextProps>`
	position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
	padding: 2vh 2vw;
  pointer-events: none;
  display: ${(props) => (props.$isempty2 ? 'block' : 'none')};
`

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
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
	border-radius: 18px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(12px, 1vw, 16px);
  font-weight: ${notoSansKr.bold.style.fontWeight};
	font-family: ${notoSansKr.bold.style.fontFamily};
`