'use client';

import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const StoryWrapper = styled.div`
  width: 100vw;
  height: 600px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 6% 0 8%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  padding: 0px 5% 0px 3%;
`;

export const TitleTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleText = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
`;

export const MoreStoryWrapper = styled.div`
  display: flex;
  align-items: center;
  > a {
    height: 37px;
    display: flex;
    align-items: center;
    padding-top: 4px;
  }
`;

export const MoreStoryText = styled.div`
  color: ${PALETTE.LIGHT_ORANGE};
  font-size: 18px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
`;

export const StoryCardsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2%;
`;

export const CarouselWrapper = styled.section`
  width: 100%;
  position: relative;
  z-index: 5;
  .slick-slider {
    > div {
      padding: 5px;
    }
  }
`;

export const ArrowRightButton = styled(BaseButton)`
  position: absolute;
  padding: 5px;
  right: 0%;
  top: 45%;
  box-shadow: 0px 0px 4px ${PALETTE.MAIN_BLACK};
  &:hover {
    transform: translate(-1px, -1px);
    transition: transform 0.25s ease-in;
  }
`;
