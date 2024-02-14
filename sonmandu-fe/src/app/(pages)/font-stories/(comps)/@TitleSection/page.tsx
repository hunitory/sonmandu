'use client';

import React, { ChangeEvent, FormEvent, MouseEvent, useCallback, useLayoutEffect, useRef, useState } from 'react';
import * as S from './style';
import { SearchOptions } from 'components';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface CreateQueryStringArgs {
  name: 'sort' | 'title';
  value: string;
}

export default function TitleSection() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [options, setOptions] = useState(searchParams.get('sort') || '');
  const [searchInputValue, setSearchInputValue] = useState(searchParams.get('title') || '');

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
    setOptions((prev) => value);
  };

  const handleSearchValueSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createQueryString({ name: 'title', value: searchInputValue });
  };

  // 로그인 여부 판단
  const [isLogin, setIsLogin] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsLogin(true);
    } else if (localStorage.getItem('access_token') === null) {
      setIsLogin(false);
    }
  }, []);

  return (
    <S.PageTitleLinkWrapper>
      <S.StoryDetailLinkWrapper>
        <span onClick={isLogin ? () => router.push('/font-story-write') : () => alert('로그인을 해주세요')}>
          이야기 작성하기
        </span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </S.StoryDetailLinkWrapper>
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
            onClick={handleSearchValueSubmit}
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
    </S.PageTitleLinkWrapper>
  );
}
const SORT_OPTIONS = [
  { value: 'desc', text: '가장 최근순' },
  { value: 'popular', text: '인기 많은순' },
  { value: 'hit', text: '조회수 많은순' },
  { value: 'likes', text: '좋아요 많은순' },
];
