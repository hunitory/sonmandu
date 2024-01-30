'use client';

import React, { Ref } from 'react';
import * as S from './style';

type BaseButtonProps =
  | {
      ref?: Ref<HTMLButtonElement>;
      children: React.ReactNode;
      type: 'submit' | 'button' | 'reset';
      onClick?: () => void;
      onFocuse?: () => void;
      onBlur: () => void;
      disabled: false;
      className?: string;
    }
  | {
      ref?: Ref<HTMLButtonElement>;
      children: React.ReactNode;
      type: 'submit' | 'button' | 'reset';
      onClick?: () => void;
      onFocuse?: () => void;
      onBlur: () => void;
      disabled: true;
      className?: string;
    };

/**
 * @param
 * @param children: 버튼 내부에 들어갈 요소
 * @param type: 버튼 종류
 * @param onClick: 클릭 시 할 행동 (disable true일 시 undefined)
 * @param disabled: 버튼 활성 상태
 * @param className: 추가 스타일링 (기본은 하얀색에 검정 글자)
 * @param  children들 사이에 공간이 필요한 경우
 */
export default function BaseButton(props: BaseButtonProps) {
  const { children, type, onClick, onFocuse, onBlur, className, disabled } =
    props;

  return (
    <S.ButtonWrapper
      type={type}
      onClick={onClick}
      onFocus={onFocuse}
      onBlur={onBlur}
      disabled={disabled}
      className={className}
    >
      {children}
    </S.ButtonWrapper>
  );
}

BaseButton.Styled = S.ButtonWrapper;
