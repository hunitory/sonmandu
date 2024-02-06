import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { PALETTE } from 'styles';
import { BaseLabelWithInput } from 'components';
import { FilterList } from './Subs';
import { useDebouncing } from 'customhook';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface CreateQueryStringArgs {
  name: 'sort' | 'tagId' | 'name';
  value: string;
}

function SearchOptions() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchInputValue, setSearchInputValue] = useState('');

  const createQueryString = useCallback(
    ({ name, value }: CreateQueryStringArgs) => {
      if (name === 'tagId') {
        let newTags;
        const currentTags =
          searchParams
            .get('tagId')
            ?.split(',')
            .filter((tag) => tag && tag !== ',') || [];

        if (currentTags?.includes(value)) {
          newTags = currentTags?.filter((tag) => tag !== value).join(',');
        } else {
          newTags = [...currentTags, value].join(',');
        }
        const params = new URLSearchParams(searchParams.toString());
        params.set('tagId', newTags);

        return router.push(`${pathname}?${params.toString()}`);
      }

      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  useDebouncing({
    delay: 1000,
    value: searchInputValue,
    callback: () => createQueryString({ name: 'name', value: searchInputValue }),
  });

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleFocusInput = () => {
    ref.current?.focus();
  };

  return (
    <S.UserInteractionWrapper onClick={handleFocusInput} id="search-font">
      <S.SearchOptionsContainer>
        <BaseLabelWithInput.Label id="search-font" className="search-font-label">
          <BaseLabelWithInput.Input
            ref={ref}
            id="search-font"
            type="text"
            value={searchInputValue}
            onChange={handleTitleOnChange}
            placeholder="폰트명으로 검색해보세요!"
          />
          <S.StyledButton type="button" disabled={false} bgColor={PALETTE.MAIN_ORANGE}>
            <Image src={'/image/search-icon.svg'} alt="검색" width={16} height={16} />
          </S.StyledButton>
        </BaseLabelWithInput.Label>
        <S.StyledButton type="button" disabled={false} bgColor="white">
          <Image src={'/image/filter-icon.svg'} alt="필터" width={20} height={20} />
        </S.StyledButton>
      </S.SearchOptionsContainer>
      <FilterList createQueryString={createQueryString} className="filter-list" />
    </S.UserInteractionWrapper>
  );
}

export default SearchOptions;
