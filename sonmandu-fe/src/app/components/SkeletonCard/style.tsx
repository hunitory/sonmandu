import styled from 'styled-components';
import { PALETTE } from 'styles';

export const SkeletonCard = styled.li<{ $ratio: string }>`
  width: 100%;
  max-width: 440px;
  max-height: 446px;
  aspect-ratio: ${({ $ratio }) => $ratio};
  border-radius: 20px;
  background-color: ${PALETTE.SUB_WHITE};
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;
  cursor: pointer;
`;

// 4 / 5.5
// 4 / 12
