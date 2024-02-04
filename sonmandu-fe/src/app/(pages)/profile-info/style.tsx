'use client';

import styled from 'styled-components';
import { BaseButton } from 'components';
import { PALETTE, notoSansKr } from 'styles';
import { Modal } from 'components';

export const StyledMain = styled.main`
  width: 100vw;
  height: 2000px;
  background-color: white;
`;

export const ProfileInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileInfoHeadWrapper = styled.div`
  span {
    font-size: 1.5vw;
    font-weight: ${notoSansKr.black.style.fontWeight};
    font-family: ${notoSansKr.black.style.fontFamily};
  }
`

export const ProfileInfoInputWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
`

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${PALETTE.SUB_WHITE};
`;
