import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 35%;
  padding: 0px 12px;

  span {
    text-align: center;
    color: ${PALETTE.LIGHT_BLACK};
  }

  span:nth-of-type(1) {
    color: ${PALETTE.MAIN_BLACK};
    font-size: 18px;
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
  }

  span:nth-of-type(2) {
    display: inline-block;
    height: 34px;
  }
`;

export const FormWrapper = styled.form`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 18px;
`;

export const SubmitButton = styled(BaseButton)`
  width: 122px;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  color: white;
  justify-content: center;
  font-size: 16px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  margin-top: 24px;
`;

export const FindInfomation = styled.p`
  width: 100%;
  text-align: end;
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 13px;
  font-family: ${notoSansKr.thin.style.fontFamily};
  font-weight: ${notoSansKr.thin.style.fontWeight};

  span {
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
    padding: 0px 2px;
  }
`;
