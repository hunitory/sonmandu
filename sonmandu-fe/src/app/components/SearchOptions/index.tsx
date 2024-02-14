import React, { ChangeEvent, FormEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FilterList, SearchInput } from './Subs';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

interface CreateQueryStringArgs {
  name: 'sort' | 'tagId' | 'name';
  value: string | string[];
}

function SearchOptions() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleFocusInput = () => {
    ref.current?.focus();
  };

  const createQueryString = useCallback(
    ({ name, value }: CreateQueryStringArgs) => {
      if (name === 'tagId') {
        const newTags = (value as string[]).join(',');
        const params = new URLSearchParams(searchParams.toString());
        params.set('tagId', newTags);

        return router.push(`${pathname}?${params.toString()}`);
      }

      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value as string);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchValueSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createQueryString({ name: 'name', value: searchInputValue });
  };

  return (
    <S.UserInteractionWrapper onClick={handleFocusInput} id="search-font" onSubmit={handleSearchValueSubmit}>
      <S.SearchOptionsContainer>
        <SearchInput
          ref={ref}
          id="search-font"
          placeholder="폰트명으로 검색해보세요!"
          flexible={{ able: true }}
          value={searchInputValue}
          onChange={handleTitleOnChange}
          onClick={handleSearchValueSubmit}
        />
        <S.StyledButton type="button" disabled={false} bgColor="white">
          <Comp.CustomImage src={'/image/filter-icon.svg'} alt="필터" width={20} height={20} />
        </S.StyledButton>
      </S.SearchOptionsContainer>
      <FilterList createQueryString={createQueryString} className="filter-list" />
    </S.UserInteractionWrapper>
  );
}

SearchOptions.Input = SearchInput;

export default SearchOptions;
