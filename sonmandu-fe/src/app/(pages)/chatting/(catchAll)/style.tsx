'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
`;

export const SideBarWrapper = styled.section`
  width: 40%;
  min-width: 384px;
  max-width: 436px;
  height: calc(100vh - 56px);
  box-shadow: 4px 4px 6px ${PALETTE.LIGHT_BLACK};
  overflow-y: scroll;

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    display: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: none;
    height: 38px;
  }
`;

export const FontListOpener = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? 'calc(100vh - 56px - 28px)' : '28px')};

  cursor: pointer;
  overflow: hidden;
  transition: height 0.3s ease-in;

  .toggle-opener {
    width: 100%;
    height: 28px;
    line-height: 24px;
    text-align: center;
    color: ${PALETTE.MAIN_BLACK};
    background-color: ${PALETTE.SUB_WHITE};
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
    border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  }
`;

export const FontsContainer = styled.div`
  width: 100%;
  height: calc(100% - 28px);
  padding: 0px 12px 24px 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow-y: auto;
`;

export const FontCardWrapper = styled.div`
  width: 100%;
  & > li {
    aspect-ratio: 3 / 1;
    article > p {
      height: fit-content;
    }
  }
`;

export const HrTitle = styled.p`
  width: 100%;
  min-height: 1px;
  background-color: ${PALETTE.LIGHT_BLACK};
  position: relative;
  margin: 24px 0px 12px 0px;

  & > span {
    display: inline-block;
    width: 48px;
    height: 18px;
    text-align: center;
    background-color: white;
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
    position: absolute;
    top: -9px;
    left: 45%;
    z-index: 1;
  }
`;
