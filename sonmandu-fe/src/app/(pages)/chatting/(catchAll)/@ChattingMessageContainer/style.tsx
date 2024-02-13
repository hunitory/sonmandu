'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 57px);
  overflow: hidden;
`;

export const HiddenWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 57px - 120px);
  overflow: hidden;
`;

export const ScrollAbleContainer = styled.div`
  height: 100%;
  overflow-y: overlay;
  overflow-anchor: none;
  overscroll-behavior: none;
  padding: 16px 0px;
`;

export const AllMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: fit-content;
`;

export const MessageElement = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  padding: 0px 12px;
  will-change: scroll-position;
  img,
  span {
    border: 1px solid ${PALETTE.SUB_WHITE};
    border-radius: 50%;
    margin-top: 8px;
  }
`;

export const NicknameAndMessgeWrapper = styled.div<{ $fontName: string }>`
  & > p:nth-of-type(1) {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    margin-bottom: 4px;
  }

  & > p:nth-of-type(2) {
    width: fit-content;
    height: fit-content;
    padding: 10px 12px;
    border-radius: 12px;
    font-family: ${({ $fontName }) => $fontName};
    color: ${PALETTE.MAIN_BLACK};
    background-color: ${PALETTE.SUB_WHITE};
  }
`;

export const FormFiled = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-top: 1px solid ${PALETTE.LIGHT_BLACK};
`;

export const MessageTypingArea = styled.textarea`
  width: calc(100% - 72px);
  height: 120px;
  padding: 24px;
`;

export const SubmitButton = styled(BaseButton)`
  width: 72px;
  justify-content: center;
  color: white;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  background-color: ${PALETTE.MAIN_ORANGE};
  border-radius: 8px;
`;
