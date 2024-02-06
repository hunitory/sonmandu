import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

interface BadgeWrapperProps {
  fontSize: string | undefined;
}

interface ProfileImageWrapperProps {
  size: string;
}

export const ProfileBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 12px;
  align-items: center;
  justify-content: center;
  color: ${PALETTE.MAIN_BLACK};
  flex-direction: row;
  &.vertical {
    flex-direction: column;
  }
`;

// export const ProfileImageWrapper = styled.div.withConfig({
//   shouldForwardProp: (prop, defaultValidatorFn) => !['imgSize'].includes(prop),
// })<ProfileImageWrapperProps>`
export const ProfileImageWrapper = styled.div<ProfileImageWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
  & .vertical {
    padding: 15% 15% 5% 15%;
    @media screen and (max-width: 1150px) {
      padding: 15% 15% 3% 15%;
    }
  }
  div {
    width: ${({ size }) => size};
    height: ${({ size }) => size};;
    @media screen and (max-width: 1150px) {
      width: calc(${({ size }) => size} * 1.5);
      height: calc(${({ size }) => size} * 1.5);
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
font-weight: ${notoSansKr.semiBold.style.fontWeight};
font-family: ${notoSansKr.semiBold.style.fontFamily};
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