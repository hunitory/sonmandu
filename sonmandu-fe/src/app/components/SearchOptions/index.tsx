import React, { ChangeEvent, useRef, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { PALETTE } from 'styles';
import { BaseLabelWithInput } from 'components';
import { FilterList } from './Subs';

interface SearchOptions {
  title: string;
  sort: string;
  hashTags: number[];
}

function SearchOptions() {
  const ref = useRef<HTMLInputElement>(null);
  const [searchOptions, setSearchOption] = useState<SearchOptions>({
    title: '',
    sort: '',
    hashTags: [],
  });

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchOption((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleFocusInput = () => {
    ref.current?.focus();
  };

  return (
    <S.UserInteractionWrapper onClick={handleFocusInput}>
      <S.SearchOptionsContainer>
        <BaseLabelWithInput.Label
          id="search-font"
          className="search-font-label"
        >
          <BaseLabelWithInput.Input
            ref={ref}
            id="search-font"
            type="text"
            value={searchOptions.title}
            onChange={handleTitleOnChange}
            placeholder="폰트명으로 검색해보세요!"
          />
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
        </BaseLabelWithInput.Label>
        <S.StyledButton type="button" disabled={false} bgColor="white">
          <Image
            src={'/image/filter-icon.svg'}
            alt="필터"
            width={20}
            height={20}
          />
        </S.StyledButton>
      </S.SearchOptionsContainer>
      <FilterList
        hashTagListState={searchOptions.hashTags}
        sortOptionState={searchOptions.sort}
        className="filter-list"
      />
    </S.UserInteractionWrapper>
  );
}

export default SearchOptions;
