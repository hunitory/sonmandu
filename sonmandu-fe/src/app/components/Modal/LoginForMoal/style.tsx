import { PALETTE, notoSansKr } from 'styles';
import { BaseLabelWithInput, BaseButton, BaseHashTags } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  isEmpty: boolean;
}

export const ModalWapper = styled.div`
  padding: 20px 57px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    display: flex;
    justify-content: center;
  }
`;

export const WelcomeTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentFontNameWrapper = styled.div`
  width: 100%;
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

export const ContentFontNameInputPlaceholder = styled.div.attrs(
  (props) => ({}),
)<PlaceholderGuideProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  pointer-events: none;
  display: ${(props) => (props.isEmpty ? 'block' : 'none')};
  span {
    color: ${PALETTE.LIGHT_BLACK};
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;
