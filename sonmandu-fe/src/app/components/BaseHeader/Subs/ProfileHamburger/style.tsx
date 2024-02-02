import styled from 'styled-components';
import BaseButton from '../../../BaseButton';
import { PALETTE, notoSansKr } from 'styles';

export const HamburgerWrapper = styled(BaseButton)`
  position: relative;
  width: 72px;
  height: 40px;
  border-radius: 24px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  justify-content: space-between;
  padding: 0px 8px;

  img:nth-of-type(1) {
    width: 16px;
    height: 16px;
  }

  .user-img-wrapper {
    width: 28px;
    height: 28px;
    padding: 6px;
    background-color: ${PALETTE.SUB_WHITE};
    border-radius: 50%;
  }
`;

export const DropBoxWrapper = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  width: 120px;
  height: fit-content;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  background-color: white;
  border-radius: 12px;
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
`;

export const DropBoxList = styled.li`
  width: 100%;
  height: fit-content;
  padding: 12px;
  text-align: center;
  cursor: pointer;
`;
