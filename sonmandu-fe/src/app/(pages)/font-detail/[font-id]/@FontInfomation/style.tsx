'use client';

import styled from 'styled-components';
import * as C from '@/components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButtonProps } from 'types';

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 24px;
    font-family: ${notoSansKr.extraBold.style.fontFamily};
    font-weight: ${notoSansKr.extraBold.style.fontWeight};
    padding-bottom: 10px;
  }

  .hash-tags-wrapper {
    width: fit-content;
  }
`;

export const DefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const DefaultIconWithText = styled(
  (props: Omit<BaseButtonProps, 'disabled'>) =>
    C.BaseButton({ ...props, disabled: false }),
)`
  img {
    padding: 4px;
  }
  span {
    display: inline-block;
    width: 52px;
    font-size: clamp(12px, 1vw, 14px);
  }
`;

export const OtherUserInteractionInfo = styled(DefaultIconWithText)`
  justify-content: space-between;
  gap: 4px;
`;
export const OtherUserInteractionsWrapper = styled(DefaultWrapper)`
  padding-top: 20px;

  ${OtherUserInteractionInfo}:nth-of-type(3) > img {
    border: 2px solid ${PALETTE.MAIN_BLACK};
    border-radius: 50%;
    padding: 4px;
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
  height: 78px;
  margin: 12px 0px;
  padding: 12px 0px;

  img {
    border-radius: 50%;
  }

  p:nth-of-type(1) {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-size: 14px;
    padding-bottom: 4px;
  }

  p:nth-of-type(2) {
    font-size: 12px;
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
`;
