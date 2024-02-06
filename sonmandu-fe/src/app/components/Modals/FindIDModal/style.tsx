import { PALETTE, notoSansKr } from 'styles';
import { BaseLabelWithInput, BaseButton } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  $failLogin?: boolean;
  $isempty?: boolean;
  $isvisible?: boolean;
}

export const ModalWapper = styled.div`
  height: 100%;
  padding: 30px 57px;
  display: flex;
  flex-direction: column;
  justify-content: start;
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

export const WelcomeContent = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FindIDForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const FindIDWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

// export const LoginTitle = styled.div`
//   color: ${PALETTE.MAIN_BLACK};
//   font-size: 24px;
//   font-family: ${notoSansKr.bold.style.fontFamily};
//   font-weight: ${notoSansKr.bold.style.fontWeight};
//   margin-bottom: 10px;
// `;

// export const LoginContent = styled.div`
//   color: ${PALETTE.LIGHT_BLACK};
//   font-size: 15px;
//   font-family: ${notoSansKr.regular.style.fontFamily};
//   font-weight: ${notoSansKr.regular.style.fontWeight};
//   span {
//     font-family: ${notoSansKr.bold.style.fontFamily};
//     font-weight: ${notoSansKr.bold.style.fontWeight};
//   }
// `;

export const FailLogin = styled.div<PlaceholderGuideProps>`
  margin: 10px 0px;
  visibility: ${(props) => (props.$failLogin ? 'visible' : 'hidden')};
  text-align: center;
  font-size: 12px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  width: 100%;
`;

export const FindIDInputWrapper = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FindIDInput = styled(BaseLabelWithInput.Input)`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  width: 100%;
`;

export const FindIDInputPlaceholder = styled.div<PlaceholderGuideProps>`
  position: absolute;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  pointer-events: none;
  display: ${(props) => (props.$isempty ? 'block' : 'none')};
  span {
    color: ${PALETTE.LIGHT_BLACK};
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const ButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const FindIDButton = styled(BaseButton)`
  width: 168px;
  height: 32px;
  background-color: ${PALETTE.SUB_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FindIDButtonText = styled.p`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
`;
