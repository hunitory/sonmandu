'use client';

import styled from 'styled-components';
import * as Comp from '@/components';
import { PALETTE, notoSansKr } from 'styles';

export const TestingWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-top: 36px;
`;

export const TestingLetterArea = styled.article`
  width: calc(60% - 8px);
  border-radius: 12px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;
`;

export const SideBoxWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: fit-content;
  padding: 12px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  border-radius: 12px;
  gap: 12px;

  p {
    width: 100%;
    text-align: start;
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const SideBoxContainer = styled.div<{ selectedIdx: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  row-gap: 16px;
  width: 286px;
  height: fit-content;
  button:nth-of-type(${({ selectedIdx }) => selectedIdx}) {
    border: 2px solid ${PALETTE.MAIN_ORANGE};
  }
`;

export const LatterContainerButton = styled(Comp.BaseButton)``;

export const CustomButton = styled(Comp.BaseButton)`
  width: fit-content;
  padding: 8px 12px;
  color: white;
  background-color: ${PALETTE.MAIN_ORANGE};
  font-size: 12px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;
