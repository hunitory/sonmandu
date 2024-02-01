import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import styled from 'styled-components';

/*----------- Button -----------*/
export const FontCreateCardButtonWrapper = styled.div`
  /* width: 70vw; */
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const FontCreateCardBackButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FontCreateCardNextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FontCreateCardBackButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.MAIN_ORANGE};
`;

export const FontCreateCardNextButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.SUB_WHITE};
`;
