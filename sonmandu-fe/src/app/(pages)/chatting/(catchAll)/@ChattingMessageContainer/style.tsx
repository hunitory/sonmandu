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
  height: calc(100vh - 57px - 148px);
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
  flex-direction: column-reverse;
  gap: 18px;
  height: fit-content;
`;

export const MessageElement = styled.div`
  display: flex;
  gap: 10px;
  width: 90%;
  /* max-width: 100%; */
  height: fit-content;
  padding: 0px 12px;
  will-change: scroll-position;

  img,
  span {
    min-width: 42px;
    min-height: 42px;
    border: 1px solid ${PALETTE.SUB_WHITE};
    border-radius: 50%;
    margin-top: 8px;
  }
  & > p {
    width: 60px;
    font-size: 12px;
    align-self: self-end;
  }
`;

export const NicknameAndMessgeWrapper = styled.div<{ $fontName: string }>`
  width: fit-content;
  max-width: calc(100% - 42px - 60px - (2 * 10px));
  & > p:nth-of-type(1) {
    font-family: ${notoSansKr.regular.style.fontFamily};
    font-weight: ${notoSansKr.regular.style.fontWeight};
    font-family: ${({ $fontName }) => $fontName};
    margin-bottom: 4px;
  }

  & > p:nth-of-type(2) {
    width: fit-content;
    height: fit-content;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 18px;
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
`;

export const MessageTypingArea = styled.textarea<{ $fontName: string }>`
  width: calc(100% - 72px);
  height: 148px;
  padding: 24px;
  font-family: ${({ $fontName }) => $fontName};
  background-color: ${PALETTE.SUB_WHITE};

  &,
  &::placeholder {
    font-size: 18px;
  }
`;

export const SubmitButton = styled(BaseButton)`
  width: 72px;
  justify-content: center;
  color: white;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  background-color: ${PALETTE.WHITE_ORANGE};
  border-radius: 4px;
  img {
    transform: rotate(-90deg);
  }
`;
