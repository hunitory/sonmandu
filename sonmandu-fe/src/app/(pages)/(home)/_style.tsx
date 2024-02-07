'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const StyledMain = styled.main`
  width: 100px;
  height: 100px;
  background-color: white;
`;

export const MainBanner = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.LIGHT_BLACK};
  opacity: 0.8;
`;

export const MainTextContainer = styled.div`
  width: 50%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainTitle = styled.div`
  color: ${PALETTE.SUB_WHITE};
  font-size: 38px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  text-align: center;
`;

export const Maincontent = styled.div`
  p {
    color: ${PALETTE.SUB_WHITE};
    font-size: 18px;
    font-family: ${notoSansKr.medium.style.fontFamily};
    font-weight: ${notoSansKr.medium.style.fontWeight};
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
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
