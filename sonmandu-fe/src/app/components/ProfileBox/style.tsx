import styled from 'styled-components';
import { PALETTE } from 'styles';

interface BadgeWrapperProps {
  fontSize: string | undefined;
}

export const ProfileBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 12;
  align-items: center;
  justify-content: center;
  color: ${PALETTE.MAIN_BLACK};
  flex-direction: row;
  &.vertical {
    flex-direction: column;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15% 15% 5% 15%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    padding: 15% 15% 3% 15%;
  }
  div {
    width: 10vw;
    height: 10vw;
    @media screen and (max-width: 1150px) {
      width: 15vw;
      height: 15vw;
    }
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const BadgeNameDiv = styled.div<BadgeWrapperProps>`
width: 100%;
height: 50px;
display: flex;
gap: 3px;
font-size: ${({ fontSize }) => fontSize};
@media screen and (max-width: 1150px) {
  font-size: clamp(17px, 2.5vw, 24px);
}

justify-content: center;
align-items: center;
white-space: nowrap;
`;

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
  position: relative;
  width: ${({ fontSize }) => fontSize};
  height: ${({ fontSize }) => fontSize};
  @media screen and (max-width: 1150px) {
    width: clamp(17px, 2.5vw, 24px);
    height: clamp(17px, 2.5vw, 24px);
  }
`;