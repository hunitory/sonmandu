'use client';

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
  img {
    border: 1px solid ${PALETTE.SUB_WHITE};
    border-radius: 50%;
    margin-top: 8px;
  }
`;

export const NicknameAndMessgeWrapper = styled.div`
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
    color: ${PALETTE.MAIN_BLACK};
    background-color: ${PALETTE.SUB_WHITE};
  }
`;

export const MessageTypingArea = styled.textarea`
  width: 100%;
  height: 120px;
  border-top: 1px solid ${PALETTE.LIGHT_BLACK};
  padding: 24px;
`;
