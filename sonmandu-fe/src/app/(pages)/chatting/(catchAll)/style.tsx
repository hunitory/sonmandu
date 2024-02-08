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
  border-left: 1px solid darkviolet;

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
  height: ${({ $isOpen }) => ($isOpen ? 'calc(100vh - 56px - 24px)' : '24px')};
  text-align: center;
  cursor: pointer;
  color: ${PALETTE.MAIN_BLACK};
  background-color: ${PALETTE.SUB_WHITE};
  font-family: ${notoSansKr.semiBold.style.fontFamily};
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
  border-bottom: 1px solid ${PALETTE.MAIN_BLACK};
  border-bottom: 1px solid ${PALETTE.MAIN_BLACK};
  overflow: hidden;
  transition: height 0.3s ease-in;
`;

export const FontsContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 12px;

  div {
    width: 80%;
    height: 200px;
    border: 1px solid blue;
  }
`;
