import { PALETTE, notoSansKr } from 'styles';
import BaseButton from 'components/BaseButton';
import styled from 'styled-components';

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
