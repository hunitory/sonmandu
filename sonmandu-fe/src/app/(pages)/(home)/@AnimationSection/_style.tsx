'use client';

import styled, { keyframes } from 'styled-components';
import { notoSansKr } from 'styles';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`;
export const AnimationWrapper = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  padding: 100px 180px;
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInOut} 9s infinite;
`;

export const RightSideWrapper = styled.div`
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
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  margin-bottom: 50px;
`;
