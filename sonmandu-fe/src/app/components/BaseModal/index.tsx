'use client';

import React from 'react';
import * as Styled from './style';
import { BaseModalProps } from 'types';

/**
 * @param children: Modal 내부에 들어갈 요소
 * @param type: Modal 종류 (small: 로그인, 회원정보(아이디,비번)찾기 / medium: 파일 업로드 / large: 회원 가입)
 * @param onClick: 클릭 시 할 행동
 */

function BaseModal(props: BaseModalProps) {
  const { children, size, onClose } = props;

  return (
    <Styled.BackLayOutModal>
      <Styled.Modal size={size}>
        <Styled.CloseButton onClick={onClose} disabled={false} type="button">
          X
        </Styled.CloseButton>
        {children}
      </Styled.Modal>
    </Styled.BackLayOutModal>
  );
}

export default BaseModal;
