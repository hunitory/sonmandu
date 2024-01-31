import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { PALETTE } from 'styles';

function SearchOptions() {
  return (
    <S.UserInteractionWrapper>
      <S.StyledButton
        type="button"
        disabled={false}
        bgColor={PALETTE.MAIN_ORANGE}
      >
        <Image
          src={'/image/search-icon.svg'}
          alt="검색"
          width={16}
          height={16}
        />
      </S.StyledButton>
      <S.StyledButton type="button" disabled={false} bgColor="white">
        <Image
          src={'/image/filter-icon.svg'}
          alt="필터"
          width={20}
          height={20}
        />
      </S.StyledButton>
    </S.UserInteractionWrapper>
  );
}

export default SearchOptions;
