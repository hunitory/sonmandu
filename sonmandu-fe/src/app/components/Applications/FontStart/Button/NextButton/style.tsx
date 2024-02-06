import { PALETTE, notoSansKr } from 'styles';
import BaseButton from 'components/BaseButton';
import styled from 'styled-components';



export const NextButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const NextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButtonText = styled.div`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;