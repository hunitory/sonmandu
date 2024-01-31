'use client';

import React from 'react';
import * as Styled from './style'

interface ModalProps {
  children: React.ReactNode;
  size: 'large' | 'medium' | 'small';
  onClose: () => void;
}

function Modal(props: ModalProps) {
  const { children, size, onClose } = props;

  return (
    <Styled.BackLayOutModal>
      <Styled.Modal size={size} onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton
            onClick={onClose}
            disabled={false}
            type="button"
        >X</Styled.CloseButton>
        <Styled.ModalWapper>
        </Styled.ModalWapper>
      </Styled.Modal>
    </Styled.BackLayOutModal>
  );
};

export default Modal;
