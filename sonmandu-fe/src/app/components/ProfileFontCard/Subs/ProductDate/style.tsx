import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const ProductDateWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 5px 15px;
  font-size: 16px;
  color: ${PALETTE.LIGHT_BLACK};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
