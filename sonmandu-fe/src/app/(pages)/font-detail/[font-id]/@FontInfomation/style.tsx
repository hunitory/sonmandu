'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 24px;
    font-weight: ${notoSansKr.bold.style.fontWeight};
    padding-bottom: 10px;
  }

  .hash-tags-wrapper {
    width: fit-content;
  }
`;

export const DefaultIconWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  img {
    padding: 4px;
  }
  span {
    display: inline-block;
    width: 52px;
    font-size: 12px;
  }
`;

export const DefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OtherUserInteractionInfo = styled(DefaultIconWithText)`
  justify-content: space-between;
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
  span {
    color: ${PALETTE.MAIN_ORANGE};
    width: fit-content;
    font-size: 14px;
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const OrangeIconWithTextsWrapper = styled(DefaultWrapper)`
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
