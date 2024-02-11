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
  min-width: 308px;
  max-width: 436px;
  height: calc(100vh - 56px);
  border-left: 1px solid ${PALETTE.LIGHT_BLACK};
  overflow-y: scroll;

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
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: height 0.3s ease-in;

  p {
    width: 100%;
    height: 28px;
    line-height: 24px;

    /* color: ${PALETTE.MAIN_BLACK}; */
    color: white;
    /* background-color: ${PALETTE.SUB_WHITE}; */
    background-color: ${PALETTE.LIGHT_ORANGE};
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
    /* border-bottom: 1px solid ${PALETTE.MAIN_BLACK}; */
    /* border-bottom: 1px solid ${PALETTE.MAIN_BLACK}; */
    border-bottom: 1px solid ${PALETTE.SUB_WHITE};
    border-bottom: 1px solid ${PALETTE.SUB_WHITE};
  }
`;

export const FontsContainer = styled.div`
  width: 100%;
  height: calc(100% - 28px);
  margin-top: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  div {
    width: 80%;
    height: 200px;
    border: 1px solid blue;
  }
`;
