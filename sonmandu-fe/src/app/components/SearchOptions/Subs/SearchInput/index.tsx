import React, { ChangeEvent, FormEvent, MouseEvent, Ref, forwardRef } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import { BaseLabelWithInput } from 'components';
import Image from 'next/image';
import { PALETTE } from 'styles';

interface SearchInputProps {
  id: string;
  placeholder: string;
  value: string;
  ref: Ref<HTMLInputElement>;
  flexible: { able: false; width: string } | { able: true };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => void;
}

const SearchInput = forwardRef(
  ({ id, placeholder, onChange, onClick, value, flexible }: SearchInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <S.CustomLabel id={id} className="search-input-label" flexible={{ ...flexible }}>
        <BaseLabelWithInput.Input
          ref={ref}
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <S.StyledButton type="button" disabled={false} bgColor={PALETTE.MAIN_ORANGE} onClick={onClick}>
          <Comp.CustomImage src={'/image/search-icon.svg'} alt="검색" width={16} height={16} />
        </S.StyledButton>
      </S.CustomLabel>
    );
  },
);

export default SearchInput;
