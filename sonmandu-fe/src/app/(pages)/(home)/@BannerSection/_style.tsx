'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainBanner = styled.div`
  position: relative;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.LIGHT_BLACK};
  opacity: 0.8;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;

export const MainTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const MainTitle = styled.div`
  width: 725px;
  color: ${PALETTE.SUB_WHITE};
  font-size: 38px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  text-align: center;
`;

export const Maincontent = styled.div`
  p {
    width: 725px;
    color: ${PALETTE.SUB_WHITE};
    font-size: 18px;
    font-family: ${notoSansKr.medium.style.fontFamily};
    font-weight: ${notoSansKr.medium.style.fontWeight};
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 725px;
  display: flex;
  justify-content: center;
  gap: 8%;
`;

export const ApplicationButton = styled(BaseButton)`
  width: 212px;
  height: 52px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApplicationButtonText = styled.div`
  font-size: 22px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;

export const LoginButton = styled(BaseButton)`
  width: 110px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${PALETTE.SUB_WHITE};
  background-color: transparent;
`;

export const LoginButtonText = styled.div`
  font-size: 22px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
