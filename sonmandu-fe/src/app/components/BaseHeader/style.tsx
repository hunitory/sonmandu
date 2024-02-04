import styled from 'styled-components';
import Image from 'next/image';
import { PALETTE, notoSansKr } from 'styles';

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 56px;
  padding: 0px 48px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 8px 0px ${PALETTE.MAIN_BLACK};
  position: relative;
  z-index: 99;

  @media (max-width: 998px) {
    font-size: 12px;
  }
`;

export const UserInteractionWrapper = styled.nav`
  width: clamp(304px, 30%, 386px);
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
  width: 234px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    width: fit-content;
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
    border-radius: 12px;
    padding: 12px;
    font-size: 12px;

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
