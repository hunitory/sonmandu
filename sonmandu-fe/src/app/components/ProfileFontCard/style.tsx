import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const ProfileFontCardWrapper = styled.div`
	width: 300px;
	height: 432px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 45px 16px;
	box-shadow: 0 4px 4px rgba(0 , 0, 0, 0.25);
	box-shadow: 0 4px 4px rgba(0 , 0, 0, 0.25);
	border-radius: 30px;
`

export const UpperWrapper = styled.div`
	width: 100%;
	height: 229px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px 0;
`

export const LowerWrapper = styled.div`
	width: 100%;
	height: 187px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
`

export const LowerSpan = styled.span`
	font-size: 26px;
`

export const LowerContentsWrapper = styled.div`
	width: 100%;
	height: 104px;
`

export const LowerContentsUp = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	gap: 16px;
	padding: 8px 0;
	justify-content: center;
	align-items: center;
`

export const LikeDiv = styled.div`
	font-size: 14px;
	width: fit-content;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 7px;
`

export const DownloadDiv = styled.div`
	font-size: 14px;
	width: fit-content;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 7px;
`

export const DownloadButton = styled(BaseButton)`
width: fit-content;
height: fit-content;
color: white;
font-size: 11px;
font-weight: ${notoSansKr.bold.style.fontWeight};
border-radius: 20px;
padding: 7px 10px;
box-shadow: 0 4px 4px rgba(0 , 0, 0, 0.25);
background-color: ${PALETTE.MAIN_ORANGE};
`

export const LowerContentsDown = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	gap: 4px;
	padding: 8px 0;
	justify-content: center;
	align-items: center;
`


