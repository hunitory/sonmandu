'use client';

import styled from 'styled-components';
import * as C from '@/components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButtonProps, BaseHasTagsProps } from 'types';

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FontInfoWrapper = styled.div`
  width: 80%;
  height: fit-content;
  min-height: 126px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1<{ name: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  font-size: 52px;
  font-family: ${(props) => (props.name ? props.name : notoSansKr.extraBold.style.fontFamily)};
  font-weight: ${notoSansKr.extraBold.style.fontWeight};
`;

export const HashTagsWrapper = styled((props: BaseHasTagsProps) => C.BaseHashTags({ ...props }))`
  width: 50%;
  height: 30px;
  justify-content: start;
`;

export const DefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const DefaultIconWithText = styled((props: Omit<BaseButtonProps, 'disabled'>) =>
  C.BaseButton({ ...props, disabled: false }),
)`
  img {
    padding: 4px;
  }
  span {
    display: flex;
    align-items: start;
    width: 52px;
    font-size: clamp(12px, 1vw, 14px);
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
  }
`;

export const OtherUserInteractionInfo = styled(DefaultIconWithText)`
  justify-content: space-between;
  gap: 4px;
  cursor: default;
`;
export const OtherUserInteractionsWrapper = styled(DefaultWrapper)`
  ${OtherUserInteractionInfo}:nth-of-type(3) {
    padding: 3px 0px;
    img {
      border: 2px solid ${PALETTE.MAIN_BLACK};
      border-radius: 50%;
      padding: 4px;
      margin-right: 6px;
    }
  }
  ${OtherUserInteractionInfo}:nth-of-type(1) {
    img {
      cursor: pointer;
    }
  }
`;

export const OrangeIconWiText = styled(DefaultIconWithText)`
  width: 100%;
  gap: 8px;

  span {
    color: ${PALETTE.MAIN_ORANGE};
    width: fit-content;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;
export const OrangeIconWithTextsWrapper = styled(DefaultWrapper)`
  min-width: 142px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const CustomProfileBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 128px;
  margin: 12px 0px;
  padding: 12px 0px;

  img,
  span,
  p {
    cursor: pointer;
  }

  img {
    align-self: center;
    border-radius: 50%;
  }

  span {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: ${PALETTE.MAIN_BLACK};
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p:nth-of-type(1) {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-size: 20px;
  }

  p:nth-of-type(2) {
    font-size: 16px;
    color: ${PALETTE.LIGHT_BLACK};
  }

  border-top: 1px solid ${PALETTE.LIGHT_BLACK};
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
`;

export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  gap: 4px;
`;

export const SkeletonTitle = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  * {
    background-color: ${PALETTE.SUB_WHITE};
  }
  h1 {
    width: 100%;
    min-height: 56px;
  }
  div {
    width: 50%;
    height: 30px;
  }
`;
export const SkeletonProfileBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 78px;
  margin: 12px 0px;
  padding: 12px 0px;

  span,
  div {
    background-color: ${PALETTE.SUB_WHITE};
  }
  & > span:nth-of-type(1) {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    width: 136px;
    height: 54px;
  }
`;
