import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

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
  width: 45%;
  padding: 0px 12px;

  span {
    text-align: center;
    color: ${PALETTE.LIGHT_BLACK};
  }

  span:nth-of-type(1) {
    color: ${PALETTE.MAIN_BLACK};
    font-size: 16px;
    font-family: ${notoSansKr.semiBold.style.fontFamily};
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
  }

  span:nth-of-type(2) {
    display: inline-block;
    height: 34px;
    font-size: 12px;
  }
`;

export const CarouselWrapper = styled.div`
  width: fit-content;
  max-width: 420px;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const CarouselContainer = styled.div<{ $curIdx: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${({ $curIdx }) => -420 + 420 * $curIdx}px);
  transition: transform 0.3s ease;
`;

export const CarouselFormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-width: 420px;
  height: 100%;
  position: relative;
  padding: 0px 52px;

  input {
    min-width: 0px;
  }
`;

export const HrLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${PALETTE.MAIN_BLACK};
`;

export const OptionsWrapper = styled.div`
  &,
  p {
    display: flex;
    justify-content: center;
  }
  width: 100%;
  min-width: 420px;
  height: 100%;
  flex-direction: column;
  p {
    text-align: center;
    align-items: center;
    padding: 36px 0px;
    color: ${PALETTE.MAIN_BLACK};
    font-family: ${notoSansKr.regular.style.fontFamily};
    font-weight: ${notoSansKr.regular.style.fontWeight};
    cursor: pointer;
    span {
      font-family: ${notoSansKr.bold.style.fontFamily};
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
  }
`;

export const ArrowButton = styled(BaseButton)<{ rotate: boolean; position: string }>`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 47%;
  transform: rotate(${({ rotate }) => (rotate ? 180 : 0)}deg);
  ${({ position }) => position}: 12px;
  padding: 0px 0px 0px 5px;
`;

export const SubmitButton = styled(BaseButton)`
  width: fit-content;
  height: 32px;
  background-color: ${PALETTE.MAIN_ORANGE};
  color: white;
  justify-content: center;
  font-size: 12px;
  font-family: ${notoSansKr.semiBold.style.fontFamily};
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
  margin-top: 24px;
  padding: 0px 12px;
`;
