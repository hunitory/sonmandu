import styled from 'styled-components';
import { PALETTE } from 'styles';

export const HamburgerWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;

  div:nth-of-type(1) {
    width: 16px;
    height: 16px;
    background-color: ${PALETTE.LIGHT_BLACK};
  }

  div:nth-of-type(2) {
    width: 28px;
    height: 28px;
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
`;

export const DropBoxList = styled.li`
  width: 100%;
  height: fit-content;
  padding: 12px;
  text-align: center;
  cursor: pointer;
`;
