'use client';

import React, { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import * as S from './style';
import { SearchOptions } from 'components';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface CreateQueryStringArgs {
  name: 'sort' | 'name';
  value: string;
}

export default function TitleSection() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [options, setOptions] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');

  const createQueryString = useCallback(
    ({ name, value }: CreateQueryStringArgs) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleOptionsClick = ({ name, value }: CreateQueryStringArgs) => {
    createQueryString({ name: name, value: value });
    setOptions((prev) => (prev = value));
  };

  const handleSearchValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQueryString({ name: 'name', value: searchInputValue });
  };

  return (
    <S.PageTitleWrapper>
      <div>
        <h1>손글씨 이야기들</h1>
        <p>손글씨에 대한 이야기들을 구경해보세요!</p>
      </div>
      <S.FormWrapper onSubmit={handleSearchValueSubmit}>
        <SearchOptions.Input
          ref={ref}
          id="search-story"
          placeholder="폰트명이나 제목으로 검색해보세요!"
          value={searchInputValue}
          onChange={handleTitleOnChange}
          flexible={{ able: false, width: '100%' }}
        />
        <S.HashTagsWrapper>
          {SORT_OPTIONS.map((option) => (
            <S.CustomHashTag
              type="button"
              disabled={false}
              key={option.value}
              selected={options === option.value}
              onClick={() => handleOptionsClick({ name: 'sort', value: option.value })}
            >
              {option.text}
            </S.CustomHashTag>
          ))}
        </S.HashTagsWrapper>
      </S.FormWrapper>
    </S.PageTitleWrapper>
  );
}
const SORT_OPTIONS = [
  { value: 'desc', text: '가장 최근순' },
  { value: 'popular', text: '인기 많은순' },
  { value: 'hit', text: '조회수 많은순' },
  { value: 'likes', text: '좋아요 많은순' },
];