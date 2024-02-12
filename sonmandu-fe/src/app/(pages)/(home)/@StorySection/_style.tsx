'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 1300px;
  position: relative;
`;


export const CarouselWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  bottom: 15%;
  overflow: hidden;
  position: relative;
  z-index: 5;
`;

export const CarouselContainer = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease;
  gap: 5%;
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 27}%)`};
`;

export const ArrowRightButton = styled(BaseButton)`
  padding: 5px;
  position: absolute;
  right: 1%;
  top: 50%;
  box-shadow: 0px 0px 4px ${PALETTE.MAIN_BLACK};
  &:hover {
    transform: translate(-1px, -1px);
    transition: transform 0.25s ease-in;
  }
`;
