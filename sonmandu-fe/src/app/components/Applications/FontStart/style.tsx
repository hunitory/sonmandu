import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;

/*----------- Title -----------*/
export const TitleWrapper = styled.div`
  /* width: 70vw; */
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

/*----------- Content -----------*/

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  gap: 40px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  p {
    font-size: 15px;
    font-weight: ${notoSansKr.medium.style.fontWeight};
    color: ${PALETTE.LIGHT_BLACK};
    text-align: center;
    span {
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
  }
`;

export const ContentTitle = styled.div`
  font-size: 27px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
`;

export const MaterialContent = styled.div`
  font-size: 15px;
  font-weight: ${notoSansKr.medium.style.fontWeight};
  color: ${PALETTE.LIGHT_BLACK};
  text-align: center;
  span {
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const MaterialWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 15%;
  justify-content: space-around;
`;

export const MaterialImgWrapper = styled.div`
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
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
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 16px;
  color: ${PALETTE.MAIN_BLACK};
`;

export const CautionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const CautionWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 10%;
  justify-content: space-around;
`;

export const CautionContentText = styled.p`
  font-size: 14px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_BLACK};
`;

export const CautionContentWrapper = styled.div``;

/*----------- Button -----------*/
export const ButtonWrapper = styled.div`
  /* width: 70vw; */
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const BackButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled(BaseButton)`
  width: 240px;
  height: 48px;
  background-color: ${PALETTE.MAIN_ORANGE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.MAIN_ORANGE};
`;

export const NextButtonText = styled.p`
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-size: 20px;
  color: ${PALETTE.SUB_WHITE};
`;
