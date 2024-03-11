import styled from 'styled-components';
import { PALETTE } from 'styles/palette';

export const ButtonWrapper = styled.button`
  border: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  color: ${PALETTE.MAIN_BLACK};
  padding: 0px 8px;
  cursor: pointer;

  &:disabled {
    background-color: ${PALETTE.SUB_WHITE};
    color: ${PALETTE.LIGHT_BLACK};
    border: 0;
  }
`;
