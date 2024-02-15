import styled from 'styled-components';
import Image from 'next/image';
import { PALETTE, notoSansKr } from 'styles';

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 72px;
  padding: 0px 48px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
  z-index: 99;

  @media (max-width: 998px) {
    font-size: 12px;
  }
`;

export const UserInteractionWrapper = styled.nav`
  width: 446px;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

export const LinkWrapper = styled.div`
  width: calc(100% - 72px);
  min-width: 374px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > a {
    width: fit-content;
    font-family: ${notoSansKr.medium.style.fontFamily};
    font-weight: ${notoSansKr.medium.style.fontWeight};
    border-radius: 12px;
    padding: 12px;
    font-size: 14px;

    &:hover {
      background-color: ${PALETTE.SUB_WHITE};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoImage = styled(Image)`
  width: auto;
  height: auto;
`;
