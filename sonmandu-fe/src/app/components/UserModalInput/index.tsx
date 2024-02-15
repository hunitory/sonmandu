import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as T from '@/types';

export default function UserModalInput({
  id,
  children,
  type,
  value,
  onChange,
  withSubContent,
}: T.BaseLabelWithInputProps & { withSubContent?: React.ReactNode }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValueOnInput, setIsValueOnInput] = useState(false);

  const handleInputClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (value) setIsValueOnInput(true);
    else setIsValueOnInput(false);
  }, [value]);

  return (
    <S.UserInputContainer onClick={handleInputClick} $isValueOnInput={isValueOnInput}>
      <S.PlaceholderLabel id={id} onClick={handleInputClick}>
        {children}
      </S.PlaceholderLabel>
      <S.CustomInput id={id} value={value} type={type} ref={inputRef} onChange={onChange} />
      {withSubContent}
    </S.UserInputContainer>
  );
}
