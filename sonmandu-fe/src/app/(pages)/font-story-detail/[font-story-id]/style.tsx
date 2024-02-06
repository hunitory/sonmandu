'use client'

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

export const FontStoryDetailWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	padding: 10vh;
`;

export const DetailWrapper = styled.div`
	width: 54vw;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3vw;
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
	height: 60px;
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
	font-size: 48px;
	font-weight: ${notoSansKr.regular.style.fontWeight};
	font-family: ${notoSansKr.regular.style.fontFamily};
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
	font-size: 20px;
	text-decoration: underline;
	display: flex;
	align-items: center;
	gap: 0.5vw;
`;

export const FontStoryDateWrapper = styled.span`
	font-size: max(16px, 1vw);
`;

export const TagsWrapper = styled.div`
	width: fit-content;
`;

export const FontStoryText = styled.div`
	width: 95%;
  height: fit-content;
  font-size: 20px;
	line-height: 1.5;
  white-space: pre-line;
	margin-bottom: 10vh;
`;

export const ProfileWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 2vh;
	align-items: center;
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
	background-color: #CFCFCF;
`;

export const ProfileIntroduction = styled.div`
	width: 100%;
  height: fit-content;
  font-size: 20px;
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
  font-size: clamp(14px, 1.3vw, 18px);
  font-weight: ${notoSansKr.black.style.fontWeight};
  font-family: ${notoSansKr.black.style.fontFamily};
`
// 색깔 채운 버튼
// padding: clamp(4px, 0.5vw, 10px) clamp(9px, 1.2vw, 20px);
//   border: 2px solid ${PALETTE.MAIN_ORANGE};
//   border-radius: 20px;
//   /* color: ${PALETTE.MAIN_ORANGE}; */
// 	background-color: ${PALETTE.MAIN_ORANGE};
// 	color: white;

export const LowerWrapper = styled.div``;
