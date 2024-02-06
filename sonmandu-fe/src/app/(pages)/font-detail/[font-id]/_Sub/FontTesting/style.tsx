'use client';

import styled from 'styled-components';
import * as Comp from '@/components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButtonProps } from 'types';

export const TestingWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-top: 36px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

export const TestingLetterArea = styled.article<{ $fontName: string; $show: boolean }>`
  width: calc(60% - 8px);
  border-radius: 12px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;

  textarea {
    font-family: ${(props) => (props.$fontName ? props.$fontName : notoSansKr.regular.style.fontFamily)};
  }

  background-color: ${(props) => !props.$show && PALETTE.SUB_WHITE};

  @media (max-width: 1024px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    align-items: start;
    & > button:nth-last-of-type(1) {
      align-self: flex-end;
    }
  }

  @media (max-width: 694px) {
    height: 100%;
  }

  p {
    width: 100%;
    text-align: start;
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const SideBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  row-gap: 16px;
  width: 286px;
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  @media (max-width: 694px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const LatterContainerButton = styled((props: Omit<BaseButtonProps, 'disabled'>) =>
  Comp.BaseButton({ ...props, disabled: false }),
)<{
  selected: boolean;
}>`
  border: 2px solid ${({ selected }) => (selected ? PALETTE.MAIN_ORANGE : 'white')};
  border-radius: 0px;
  padding: 0;
`;

export const CustomButton = styled((props: Omit<BaseButtonProps, 'disabled'>) =>
  Comp.BaseButton({ ...props, disabled: false }),
)`
  width: fit-content;
  padding: 8px 12px;
  color: white;
  background-color: ${PALETTE.MAIN_ORANGE};
  font-size: 12px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;
