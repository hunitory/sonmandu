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
  @media (max-width: 1474px) {
    :nth-child(4) {
      display: none;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  min-height: 70vh;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 48px 68px;
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;

  @media (max-width: 1254px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
/*----------- Title -----------*/
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;

export const Title = styled.p`
  font-size: 28px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

/*----------- Content -----------*/

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  gap: 50px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  p {
    font-size: 15px;
    font-family: ${notoSansKr.medium.style.fontFamily};
    font-weight: ${notoSansKr.medium.style.fontWeight};
    color: ${PALETTE.LIGHT_BLACK};
    text-align: center;
    span {
      font-family: ${notoSansKr.bold.style.fontFamily};
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
  }
`;

export const ContentTitle = styled.div`
  font-size: 27px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
`;

export const MaterialContent = styled.div`
  font-size: 15px;
  font-family: ${notoSansKr.medium.style.fontFamily};
  font-weight: ${notoSansKr.medium.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
  text-align: center;
  span {
    font-family: ${notoSansKr.bold.style.fontFamily};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const MaterialWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-around;
`;

export const MaterialImgWrapper = styled.div`
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0px 18px;
`;

export const DownloadButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const DownloadButton = styled(BaseButton)`
  width: 200px;
  height: 45px;
  box-shadow: 0px 1px 2px ${PALETTE.MAIN_BLACK};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DownloadButtonText = styled.div`
  font-size: 16px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
`;

export const CautionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const CautionWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-around;
`;

export const CautionContentText = styled.p`
  width: 95px;
  font-size: 15px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
  margin-top: 12px;
`;

export const CautionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

/*----------- Button -----------*/
export const ButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const NextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButtonText = styled.p`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
