import { PALETTE, notoSansKr } from 'styles';
import { BaseLabelWithInput, BaseButton } from 'components';
import styled from 'styled-components';

interface PlaceholderGuideProps {
  $failLogin?: boolean;
  $isempty?: boolean;
  $isvisible?: boolean;
}

export const ModalWrapper = styled.div`
  height: 100%;
  padding: 30px 57px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const UnRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    display: flex;
    justify-content: center;
  }
`;

export const UnRegisterTitle = styled.div`
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

export const FailLogin = styled.div<PlaceholderGuideProps>`
  visibility: ${(props) => (props.$failLogin ? 'visible' : 'hidden')};
  text-align: center;
  font-size: 12px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  width: 100%;
`;

export const ModalFormWrapper = styled.form`
  width: 100%;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const UnRegisterContentWrapper = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UnRegisterContent = styled.div`
  text-align: center;
  color: ${PALETTE.MAIN_BLACK};
  font-size: 16px;
  font-weight: ${notoSansKr.regular.style.fontWeight};
  font-family: ${notoSansKr.regular.style.fontFamily};
  p {
    font-size: 16px;
    font-weight: ${notoSansKr.regular.style.fontWeight};
    font-family: ${notoSansKr.regular.style.fontFamily};
  }
`;

export const ButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const UnRegisterButton = styled(BaseButton)`
  width: 122px;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnRegisterButtonText = styled.p`
  font-size: 14px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
