'use client';

import styled from 'styled-components';
import { BaseButton, BaseLabelWithInput } from 'components';
import { PALETTE, notoSansKr } from 'styles';



export const InfoWrapper = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 1vw 0.5vw;
  grid-template-columns: 1fr 2.7fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 3.5fr;
  }
`;

export const InfoHead = styled.span`
  font-size: max(14px, 0.8vw);
  font-weight: ${notoSansKr.medium.style.fontStyle};
  font-family: ${notoSansKr.medium.style.fontFamily};
`;

export const InfoSpan = styled.span`
  font-size: max(14px, 0.8vw);
  font-weight: ${notoSansKr.regular.style.fontStyle};
  font-family: ${notoSansKr.regular.style.fontFamily};
`;

export const InfoInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: max(14px, 0.8vw);
  display: grid;
  grid-template-columns: 6fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 4fr 1fr;
  }
  `;
  

export const EditInputWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 0.5fr;
  gap: 0.5vw;
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  height: max(40px, 2vw);
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
`;

export const EditHeadSpan = styled.span`
  
`;

export const PasswordDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
`;

export const CurrentPasswordInput = styled(BaseLabelWithInput.Input)`
  font-size: max(14px, 0.8vw);
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  padding: 1px 2px;
  border-radius: 8px;
`;

export const CurrentPasswordMessage = styled.span`
  font-size: max(13px, 0.7vw);
  color: ${PALETTE.MAIN_ORANGE};
`
export const NewPasswordMessage1 = styled.span`
  font-size: max(13px, 0.7vw);
  color: ${PALETTE.MAIN_ORANGE};
`
export const NewPasswordMessage2 = styled.span`
  font-size: max(13px, 0.7vw);
  color: ${PALETTE.MAIN_ORANGE};
`

export const EditLink = styled.div`
  display: flex;
  flex-direction: row-reverse;
  a {
    font-size: max(12px, 0.6vw);
    text-decoration: underline;
    font-weight: ${notoSansKr.bold.style.fontStyle};
    font-family: ${notoSansKr.bold.style.fontFamily};
  }
`;


export const NewPassword1Wrapper = styled.div`
  
`

export const NewPassword2Wrapper = styled.div`
  
`

export const StyledButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(4px, 0.5vw, 7px) clamp(9px, 0.7vw, 15px);
  color: ${PALETTE.SUB_WHITE};
  background-color: ${PALETTE.MAIN_BLACK};
  font-size: clamp(10px, 0.6vw, 12px);
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
  font-family: ${notoSansKr.semiBold.style.fontFamily};
`;


export const EditContentsWrapper = styled.div`
  font-size: max(12px, 0.6vw);
  color: ${PALETTE.LIGHT_BLACK};
`