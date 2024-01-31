import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const HashTagsWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 8px;
  width: 100%;
  height: fit-content;
`;

export const HashTag = styled.p`
  width: fit-content;
  height: 20px;
  padding: 0px 8px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 24px;
`;
