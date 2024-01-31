import styled from "styled-components";
import { PALETTE } from "styles";

type ProfileBoxWrapperProps = {
	vertical: boolean;
}

export const ProfileBoxWrapper = styled.div<ProfileBoxWrapperProps>`
  display: flex;
	width: 100%;
	height: 100%;
	gap: ${({ vertical }) => (vertical ? '17' : '12')};
	align-items: center;
	color: ${PALETTE.MAIN_BLACK};
	flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
`

export const BadgeNameWrapper = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	gap: 5px;
	justify-content: center;
`