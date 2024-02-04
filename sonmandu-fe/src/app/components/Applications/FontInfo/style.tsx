import { PALETTE, notoSansKr } from 'styles';

import { BaseLabelWithInput, BaseButton, BaseHashTags } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  FontName: boolean;
}

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

export const ContentWrapper = styled.div`
  width: 768px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContentFontNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ContentFontNametTitle = styled.div`
  color: ${PALETTE.MAIN_BLACK};
  font-size: 24px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  margin-bottom: 10px;
`;

export const ContentFontNametContent = styled.div`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 15px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  span {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const ContentFontNameInputWrapper = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
`;

export const ContentFontNameInput = styled(BaseLabelWithInput.Input)`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  width: 100%;
`;

export const ContentFontNameInputPlaceholder = styled.div<PlaceholderGuideProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  pointer-events: none;
  display: ${({ FontName }) => (FontName ? 'block' : 'none')};
  span {
    color: ${PALETTE.LIGHT_BLACK};
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const ContentFontTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
`;

export const ContentFontTagTitle = styled.div`
  color: ${PALETTE.MAIN_BLACK};
  font-size: 24px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const ContentFontTagtContent = styled.div`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 15px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
`;

export const ContentFontTagListWrapper = styled.div``;

export const ContentFontTags = styled(BaseHashTags)`
  flex-wrap: wrap;
  justify-content: start;
`;
export const ContentFontTag = styled(BaseHashTags.OneTag)``;

/*---------- button ---------- */
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
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

export const NextButtonText = styled.p`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
