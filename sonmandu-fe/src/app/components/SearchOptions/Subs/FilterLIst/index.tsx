'use client';

import React, { useState } from 'react';
import * as S from './style';
import { WHOLE_HASH_TAGES } from '@/constants';
import { useSearchParams } from 'next/navigation';
import { useDebouncing } from 'customhook';

interface CreateQueryStringArgs {
  name: 'sort' | 'tagId' | 'name';
  value: string | string[];
}

interface FilterListProps {
  className?: string;
  createQueryString: ({ name, value }: CreateQueryStringArgs) => void;
}

export default function FilterList({ className, createQueryString }: FilterListProps) {
  let timer: NodeJS.Timeout;
  const searchParams = useSearchParams();
  const [options, setOptions] = useState<string[]>(
    !!searchParams.get('tagId') ? (searchParams.get('tagId')?.split(',') as string[]) : [],
  );

  const handleOptionsClick = ({ name, value }: CreateQueryStringArgs) => {
    if (name === 'sort') createQueryString({ name: name, value: value });
    else if (name === 'tagId') {
      if (options.includes(value as string)) {
        setOptions((prev) => prev.filter((tag) => tag !== value));
      } else {
        setOptions((prev) => [...prev, value as string]);
      }
    }
  };

  useDebouncing({
    value: options,
    callback: () => createQueryString({ name: 'tagId', value: options }),
    delay: 200,
  });

  return (
    <S.FilterListsWrapper className={className}>
      <span>정렬</span>
      {SORT_OPTIONS.map((option) => (
        <S.CustomHashTag
          type="button"
          disabled={false}
          key={option.value}
          selected={searchParams.get('sort') === option.value}
          onClick={() => handleOptionsClick({ name: 'sort', value: option.value })}
        >
          {option.text}
        </S.CustomHashTag>
      ))}
      <span>종류</span>
      {WHOLE_HASH_TAGES.map((hashTag) => (
        <S.CustomHashTag
          type="button"
          disabled={false}
          key={hashTag.id}
          selected={options.includes(String(hashTag.id)) || false}
          onClick={() => handleOptionsClick({ name: 'tagId', value: String(hashTag.id) })}
        >
          {hashTag.text}
        </S.CustomHashTag>
      ))}
    </S.FilterListsWrapper>
  );
}

const SORT_OPTIONS = [
  { value: 'desc', text: '가장 최근순' },
  { value: 'popular', text: '인기 많은순' },
  { value: 'hit', text: '조회수 많은순' },
  { value: 'likes', text: '좋아요 많은순' },
  { value: 'download', text: '다운로드 많은순' },
];
