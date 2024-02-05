import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import styled from 'styled-components';

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
`;

export const firstnone = styled.div`
  @media (max-width: 1474px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 48px 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1254px) {
    width: 100%;
    box-shadow: none;
  }
`;
/*----------- Content -----------*/
export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

export const ContentTextWrapper = styled.div`
  text-align: center;
  margin-top: 9%;
`;

export const ContentText = styled.div`
  font-size: 24px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
  padding: 10px;
  span {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;
/*----------- Button -----------*/
export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const MyPageButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPageButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPageButtonText = styled.p`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

export const MainPageButtonText = styled.p`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
