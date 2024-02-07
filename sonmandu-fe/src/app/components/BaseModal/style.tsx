import { PALETTE } from 'styles';
import BaseButton from '../BaseButton';
import styled from 'styled-components';

export const modalSizes = {
  small: { width: 580, height: 464 },
  medium: { width: 580, height: 574 },
  large: { width: 820, height: 560 },
};

interface BaseModalProps {
  size: 'large' | 'medium' | 'small';
}

export const Modal = styled.div<BaseModalProps>`
  width: ${(props) => modalSizes[props.size].width}px;
  height: ${(props) => modalSizes[props.size].height}px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 10px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 101;

  @media (max-width: 768px) {
    width: 100vw;
    bottom: ${(props) => modalSizes[props.size].height / 2}px;
    left: 0;
    transform: translate(0, 50%);
    border-radius: 10px 10px 0px 0px;
  }
`;

// export const ModalWapper = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `;

export const BackLayOutModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(160, 160, 160, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const CloseButton = styled(BaseButton)`
  width: 26px;
  height: 26px;
  background-color: ${PALETTE.SUB_WHITE};
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
