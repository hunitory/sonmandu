import styled from 'styled-components';
import { PALETTE } from 'styles';

interface ProfileBoxWrapperProps {
  vertical: boolean;
}

interface BadgeWrapperProps {
  fontSize: string;
}

export const ProfileBoxWrapper = styled.div<ProfileBoxWrapperProps>`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${({ vertical }) => (vertical ? '17' : '12')};
  align-items: center;
  color: ${PALETTE.MAIN_BLACK};
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10% 10% 0 10%;
  @media screen and (max-width: 1150px) {
    padding: 20% 20% 0 20%;
  }
  div {
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
  position: relative;
  width: ${({ fontSize }) => fontSize};
  height: ${({ fontSize }) => fontSize};
  @media screen and (max-width: 1150px) {
    width: clamp(17px, 3vw, 24px);
    height: clamp(17px, 3vw, 24px);
  }
`;

export const BadgeNameDiv = styled.div<BadgeWrapperProps>`
  display: flex;
  width: 100%;
  height: 40px;
  gap: 3px;
  font-size: ${({ fontSize }) => fontSize};
  @media screen and (max-width: 1150px) {
    font-size: clamp(17px, 3vw, 24px);
  }

  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
