'use client';

import styled from 'styled-components';
import { PALETTE } from "styles";

export const ProfilePageWapper = styled.div`
	width: 1920px;
	height: fit-content;
	padding: 222px 327px 128px 432px;
`

export const ProfileWrapper = styled.div`
  width: 100%;
	height: 100%;
	display: flex;
	gap: 15%;
`

export const ProfileLeftWrapper = styled.div`
	width: 280px;
	height: 2941px;
	display: flex;
`

export const ProfileLeftDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 156px;
`

export const ProfileBoxDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 12px 14px;
	font-size: 32px;
	font-weight: bolder;
	color: ${PALETTE.MAIN_BLACK};
`

export const ProfileIndexDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: flex-end;
	padding-right: 40px;
`

export const ProfileIndexSpan = styled.span`
	font-size: 28px;
`

// --------------------좌우 구분----------------------

export const ProfileRightWrapper = styled.div`
	width: 700px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 60px;
`

export const ProfileIntroDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 33px;
`

export const ProfileIntroDivUp = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 33px;
`

export const ProfileIntroSpan = styled.span`
	width: 100%;
	height: fit-content;
	font-size: 30px;
	color: ${PALETTE.MAIN_BLACK};
	font-weight: bolder;
`

export const ProfileIntroContents = styled.p`
	width: 100%;
	height: fit-content;
	font-size: 20px;
	color: ${PALETTE.MAIN_BLACK};
`

export const BaseButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`

export const BaseButtonDiv = styled.div`
	width: fit-content;
	height: fit-content;
`


export const ProfileIntroDivDown = styled.div`

`

export const Line = styled.hr`
	width: 100%;
	color: ${PALETTE.MAIN_BLACK};
`

// 제작한 글씨-------------

export const ProfileHandwritingsWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`	

export const ProfileHandwritingsSpanDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 13px 3px;
`

export const ProfileHandwritingsSpan1 = styled.span`
font-size: 30px;
font-weight: bolder;
color: ${PALETTE.MAIN_BLACK};
`

export const ProfileHandwritingsSpan2 = styled.span`
	font-size: 30px;
	font-weight: bolder;
	color: ${PALETTE.MAIN_ORANGE};
`

export const ProfileHandwritingsDiv = styled.div`

`

// --------------------손글씨 이야기-------------------------

export const ProfileHandwritingStoriesWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
`

export const ProfileHandwritingStoriesSpanDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 13px 3px;
`

export const ProfileHandwritingStoriesSpan1 = styled.span`
font-size: 30px;
font-weight: bolder;
color: ${PALETTE.MAIN_BLACK};
`

export const ProfileHandwritingStoriesSpan2 = styled.span`
	font-size: 30px;
	font-weight: bolder;
	color: ${PALETTE.MAIN_ORANGE};
`

export const ProfileHandwritingStoriesDiv = styled.div`

`
