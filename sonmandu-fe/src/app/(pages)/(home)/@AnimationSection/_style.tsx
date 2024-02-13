'use client';

import styled, { keyframes } from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;
export const AnimationWrapper = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  justify-content: space-around;
  padding: 100px 180px;
`;

export const LeftSideWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInOut} 9s infinite; 
`;

export const RightSideWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInOut} 9s infinite; 
  animation-delay: 4.5s; 
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  text-align: center;
  font-size: 30px;
  // 약간 여기 손글씨로 만든 폰트로 바꿔야 할듯.
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  margin-bottom: 50px;
`;
