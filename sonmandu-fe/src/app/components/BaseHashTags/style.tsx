import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const HashTagsWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: fit-content;
`;

export const HashTag = styled.p`
  width: fit-content;
  height: 30px;
  padding: 0px 8px;
  line-height: 30px;
  font-size: 12px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  border-radius: 24px;
`;
