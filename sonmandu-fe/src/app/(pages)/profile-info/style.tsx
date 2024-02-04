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

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    gap: 40px;
  }
`

export const ProfileInfoHeadWrapper = styled.div`
  span {
    font-size: 28px;
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

  @media screen and (max-width: 768px) {
    gap: 14px;
  }
`

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${PALETTE.SUB_WHITE};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {

    position: relative;
    width: 25%;
    height: 50%;
  }
`