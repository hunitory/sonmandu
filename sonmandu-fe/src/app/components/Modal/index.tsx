import React from 'react';
import * as Styled from './style';
import { ModalProps } from 'types';

function Modal(props: ModalProps) {
  const { children, size, onClose } = props;

  return (
    <Styled.BackLayOutModal>
      <Styled.Modal size={size} onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton onClick={onClose} disabled={false} type="button">
          X
        </Styled.CloseButton>
        {children}
      </Styled.Modal>
    </Styled.BackLayOutModal>
  );
}

export default Modal;
