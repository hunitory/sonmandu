import React from 'react';
import * as S from './style';
import { BaseHashTags } from 'components';
import { WHOLE_HASH_TAGES } from '@/constants';

interface FilterListProps {
  hashTagListState: number[];
  sortOptionState: string;
  className?: string;
}

export default function FilterList({
  className,
  hashTagListState,
  sortOptionState,
}: FilterListProps) {
  return (
    <S.FilterListsWrapper className={className}>
      <span>정렬</span>
      {sortOptions.map((option) => (
        <BaseHashTags.OneTag
          type="button"
          disabled={false}
          key={option.value}
          onClick={() => console.log(`option.id :`, option.value)}
        >
          {option.text}
        </BaseHashTags.OneTag>
      ))}
      <span>종류</span>
      {WHOLE_HASH_TAGES.map((hashTag) => (
        <BaseHashTags.OneTag
          type="button"
          disabled={false}
          key={hashTag.id}
          onClick={() => console.log(`hashTag.id :`, hashTag.id)}
        >
          {hashTag.text}
        </BaseHashTags.OneTag>
      ))}
    </S.FilterListsWrapper>
  );
}

const sortOptions = [
  { value: 'desc', text: '가장 최근순' },
  { value: 'popular', text: '인기 많은순' },
  { value: 'hit', text: '조회수 많은순' },
  { value: 'likes', text: '좋아요 많은순' },
  { value: 'download', text: '다운로드 많은순' },
];
