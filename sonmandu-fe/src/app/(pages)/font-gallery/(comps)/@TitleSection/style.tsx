'use client';

import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const PageTitleWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;

  div {
    h1 {
      font-size: 36px;
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
    p {
      font-size: 18px;
      font-weight: ${notoSansKr.extraLight.style.fontWeight};
      color: ${PALETTE.LIGHT_BLACK};
    }
  }

  @media (max-width: 1024px) {
    div {
      h1 {
        font-size: 32px;
        font-weight: ${notoSansKr.bold.style.fontWeight};
      }
      p {
        font-size: 16px;
        color: ${PALETTE.LIGHT_BLACK};
      }
    }
  }
`;
