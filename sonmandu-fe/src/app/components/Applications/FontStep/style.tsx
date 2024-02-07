import { PALETTE, notoSansKr } from 'styles';
import styled, { keyframes, css } from 'styled-components';

interface FontStepProps {
  $isactive: string;
  $animation?: string;
}

const colorChange = keyframes`
  from {
    background-color: ${PALETTE.LIGHT_ORANGE};
  }
  to {
    background-color: ${PALETTE.MAIN_ORANGE};
  }
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
`;

export const Step = styled.div<FontStepProps>`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  > p {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-size: 19px;
    color: ${PALETTE.MAIN_BLACK};
    text-align: center;
    padding-bottom: 10px;
    padding-right: 22px;
    opacity: ${(props) => (props.$isactive === 'true' ? 1 : 0.5)};
  }
`;

export const StepSign = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  > *:not(:last-child) {
    margin-right: -10px;
  }
`;

export const StepLineWrapper = styled.div`
  width: fit-content;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const StepLine = styled.div<FontStepProps>`
  width: calc(20vw);
  max-width: 270px;
  min-width: 200px;
  height: 10px;
  background-color: ${(props) => (props.$isactive === 'true' ? PALETTE.MAIN_ORANGE : PALETTE.LIGHT_ORANGE)};
  z-index: 1;
  

  @media (min-width: 1500px) {
    width: 290px;
  }
`;

export const StepCircle = styled.div<FontStepProps>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => (props.$isactive === 'true' ? PALETTE.MAIN_ORANGE : PALETTE.LIGHT_ORANGE)};
  border-radius: 50px;
  z-index: 2;
  
`;
