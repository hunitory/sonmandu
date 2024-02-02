import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media (max-width: 900px) {
    gap: 80px;
  }
`;

export const ContentFontNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ContentFontNametTitle = styled.div`
  color: ${PALETTE.MAIN_BLACK};
  font-size: 24px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const ContentFontNametContent = styled.div`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 15px;
  font-weight: ${notoSansKr.regular.style.fontWeight};
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.MAIN_ORANGE};
`;

export const NextButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.SUB_WHITE};
`;
