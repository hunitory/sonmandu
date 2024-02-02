import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import BaseLabelWithInput from '../../BaseInput';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 900px) {
    gap: 80px;
  }
`;
/*----------- Content -----------*/
export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentFileUploadInput = styled(BaseLabelWithInput.Input)`
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const ContentFileUploadLabel = styled(BaseLabelWithInput.Label)<{ isDragging?: boolean; }>`
  width: 600px;
  height: 220px;
  border-radius: 15px;
  border: 5px dashed
    ${(props) =>
      props.isDragging ? PALETTE.MAIN_ORANGE : PALETTE.LIGHT_ORANGE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > * {
    opacity: ${(props) => (props.isDragging ? 0.7 : 1)};
  }
`;

export const ContentFileUploadTextbold = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
`;

export const ContentFileUploadText = styled.div`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: 14px;
  font-family: ${notoSansKr.medium.style.fontFamily};
  font-weight: ${notoSansKr.medium.style.fontWeight};
  span {
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const ContentUploadedFilesWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const ContentUploadedFileTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentUploadedFileTitle = styled.div`
  font-size: 20px;
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
  padding-bottom: 10px;
`;

export const ContentUploadedFileList = styled.div`
  width: 100%;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 15px;
  padding: 20px 20px;
`;

export const ContentUploadedFile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;
  font-family: ${notoSansKr.regular.style.fontFamily};
  font-weight: ${notoSansKr.regular.style.fontWeight};
`;

export const ContentUploadedFileCancelButton = styled(BaseButton)`
  width: 26px;
  height: 26px;
  background-color: ${PALETTE.SUB_WHITE};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 2px;
`;
/*----------- Button -----------*/
export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
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
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.MAIN_ORANGE};
`;

export const NextButtonText = styled.p`
  font-size: 20px;
  font-family: ${notoSansKr.bold.style.fontFamily};
  font-weight: ${notoSansKr.bold.style.fontWeight};
  color: ${PALETTE.SUB_WHITE};
`;
