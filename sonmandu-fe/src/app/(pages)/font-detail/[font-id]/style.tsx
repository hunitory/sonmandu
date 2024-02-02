'use client';

import styled from 'styled-components';
import { notoSansKr } from 'styles';

export const FontDetailMainWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100% - 56px);
`;

export const FontDetailMainContainer = styled.div`
  width: 80%;
  height: fit-content;
  padding: 52px 0px;
`;

export const FontInfomationWrapper = styled.section`
  display: flex;
  width: 100%;

  h1 {
    font-size: 24px;
    font-weight: ${notoSansKr.bold.style.fontWeight};
    padding-bottom: 8px;
  }

  .hash-tags-wrapper {
    width: fit-content;
  }
`;

export const IconWithTextContainer = styled.div`
  span {
    display: inline-block;
    width: 52px;
  }
`;

export const IconWithTextsWrapper = styled.div`
  &,
  ${IconWithTextContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
