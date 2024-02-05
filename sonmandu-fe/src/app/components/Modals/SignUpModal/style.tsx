import { PALETTE, notoSansKr } from 'styles';
import { BaseLabelWithInput, BaseButton, BaseHashTags } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  $failLogin?: boolean;
  $isempty?: boolean;
}

export const ModalWapper = styled.form`
  height: 100%;
  padding: 20px 57px;
  display: flex;
  flex-direction: row;
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

export const WelcomeTitle = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const WelcomeContent = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  
`;
export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const LogintTitle = styled.div`
  color: ${PALETTE.MAIN_BLACK};
  font-size: 24px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  margin-bottom: 10px;
`;

export const LogintContent = styled.div`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 15px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  span {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const FailLogin = styled.div<PlaceholderGuideProps>`
  visibility: ${(props) => (props.$failLogin ? 'visible' : 'hidden')};
  text-align: center;
  font-size: 12px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  width: 100%;
`;

export const LoginInputWrapper = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  position: relative;
`;

export const LoginInput = styled(BaseLabelWithInput.Input)`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  width: 100%;
`;

export const LoginInputPlaceholder = styled.div<PlaceholderGuideProps>`
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

export const LoginButton = styled(BaseButton)`
  width: 122px;
  height: 32px;
  background-color: ${PALETTE.SUB_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.p`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
`;

export const findIDPassword = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 14px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
  margin: 30px 0px 15px 0px;
  span {
    font-size: 14px;
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    color: ${PALETTE.LIGHT_BLACK};
    margin: 0px 10px;
    cursor: pointer;
  }
`;
