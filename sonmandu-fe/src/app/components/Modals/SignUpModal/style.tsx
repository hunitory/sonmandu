import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 35%;
  height: 100%;
  padding: 0px 12px;

  span {
    text-align: center;
    color: ${PALETTE.LIGHT_BLACK};
  }

  img {
    margin: 20px 0px;
  }

  span:nth-of-type(1) {
    color: ${PALETTE.MAIN_BLACK};
    font-size: 18px;
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
  }
`;

export const HrLine = styled.hr`
  width: 1px;
  height: 100%;
  background-color: ${PALETTE.SUB_WHITE};
`;

export const FormWrapper = styled.form`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 0px 18px;
`;

export const InputsWrapper = styled.div<{ $sendCodeHidden: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  div:nth-last-of-type(1) {
    visibility: ${({ $sendCodeHidden }) => ($sendCodeHidden ? 'hidden' : 'visible')};
  }
`;

export const CustomButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  padding: 6px 12px;
  background-color: ${PALETTE.MAIN_ORANGE};
  color: white;
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
