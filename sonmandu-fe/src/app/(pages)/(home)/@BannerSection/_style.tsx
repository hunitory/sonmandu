'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 1300px;
`;

export const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  img  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0.8;
  }
`;

export const ToneUpBanner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${PALETTE.MAIN_BLACK};
  z-index: 2;
  opacity: 0.72;
`;

export const MainTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
`;

export const MainTitle = styled.div`
  width: fit-content;
  white-space: nowrap;
  color: ${PALETTE.SUB_WHITE};
  font-size: 50px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  text-align: center;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    width: fit-content;
    white-space: nowrap;
    color: ${PALETTE.SUB_WHITE};
    font-size: 22px;
    font-family: ${notoSansKr.medium.style.fontFamily};
    font-weight: ${notoSansKr.medium.style.fontWeight};
    text-align: center;
    margin: 5px 0px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  min-width: 725px;
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


export const CardsGridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 52px;
  transition: padding 0.5s ease;
  padding-bottom: 48px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1128px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 2vw 48px 2vw;
    justify-items: center;
  }
`;