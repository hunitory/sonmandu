import styled from 'styled-components';
import { PALETTE } from 'styles';

export const SideBarWrapper = styled.div`
left: 300px;
top: 40vh;
  width: 4rem;
	height: 168px;
	border: 1px solid ${PALETTE.MAIN_BLACK};
	border-radius: 2rem;
	padding: 0.5rem;
	position: sticky;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LikeWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 50;
`;

export const LinkWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 50;
`;