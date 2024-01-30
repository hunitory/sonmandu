import styled from 'styled-components';
import { PaletteType, PALETTE, ValueOfPalette } from 'styles/palette';

export const ButtonWrapper = styled.button<{
  $bgColor: ValueOfPalette<PaletteType>;
}>`
  width: 120px;
  height: 42px;
  border: 0;
  display: flex;
  background-color: ${({ $bgColor }) => $bgColor};

  &:hover {
  }
`;
