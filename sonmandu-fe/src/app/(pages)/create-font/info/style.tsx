import { PALETTE, notoSansKr } from 'styles';

import { BaseLabelWithInput, BaseButton, BaseHashTags } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  $fontname: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const StepWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  > *:not(:last-child) {
    margin-right: -5px;
  }
  @media (max-width: 1474px) {
    .hide-first-child {
      display: none;
    }
  }
`;

export const firstnone = styled.div`
  @media (max-width: 1474px) {
    display: none;
  }
`;

export const Card = styled.form`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 48px 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1254px) {
    width: 100%;
    box-shadow: none;
  }
`;
/*----------- Content -----------*/
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
  margin-top: 15px;
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

export const ContentFontNameInputWithButtonWrapper = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ContentFontNameInputWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContentFontNameInput = styled(BaseLabelWithInput.Input)`
  width: 100%;
  display: center;
  justify-content: center;
  align-items: center;
`;

export const ContentFontNameInputPlaceholder = styled.div.attrs(() => ({}))<PlaceholderGuideProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  pointer-events: none;
  display: ${({ $fontname }) => ($fontname ? 'block' : 'none')};
  span {
    color: ${PALETTE.LIGHT_BLACK};
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const DuplicationCheckButton = styled(BaseButton)`
  padding: 0px 13px;
  height: 25px;
  color: ${PALETTE.SUB_WHITE};
  background-color: ${PALETTE.MAIN_ORANGE};
  > p {
    font-size: 13px;
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
    letter-spacing: 1px;
  }
`;

export const ContentFontTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  margin-top: 50px;
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

export const ContentFontTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  button {
    margin: 8px;
  }
`;

export const ContentFontTag = styled(BaseHashTags.OneTag)<{ selected: boolean }>`
  background-color: ${(props) => props.selected && PALETTE.LIGHT_ORANGE};
  border: 2px solid ${(props) => (props.selected ? PALETTE.MAIN_ORANGE : PALETTE.SUB_WHITE)};
`;

/*---------- button ---------- */
export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BackButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    background-color: ${PALETTE.LIGHT_BLACK};
    color: ${PALETTE.MAIN_ORANGE};
    border: 0;
    cursor: not-allowed;
    * {
      color: ${PALETTE.SUB_WHITE};
    }
  }
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
