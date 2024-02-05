'use client';

import styled from 'styled-components';
import { BaseButton } from 'components';
import { PALETTE, notoSansKr } from 'styles';

export const StyledMain = styled.main`
  width: 100vw  ;
  height: 2000px;
  background-color: white;
`;

export const NicknameWrapper = styled.div`
  display: grid;
  width: 25vw;
  height: 31px;
  align-items: center;
  grid-template-columns: 1fr 3fr 2fr;
`;

export const NicknameHead = styled.span`
  font-size: 0.8vw;
  display: flex;
  align-items: center;
`;

export const NicknameSpan = styled.span`
  font-size: 0.8vw;
  display: flex;
  align-items: center;
`;

export const NicknameInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.8vw;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(4px, 0.3vw, 7px) clamp(9px, 0.8vw, 15px);
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  color: ${PALETTE.LIGHT_BLACK};
  font-size: clamp(11px, 0.8vw, 14px);
  font-weight: ${notoSansKr.medium.style.fontWeight};
`;
