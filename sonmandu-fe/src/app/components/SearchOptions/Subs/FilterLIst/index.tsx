import React, { useState } from 'react';
import * as S from './style';
import { BaseHashTags } from 'components';
import { WHOLE_HASH_TAGES } from '@/constants';

interface CreateQueryStringArgs {
  name: 'sort' | 'tagId' | 'name';
  value: string;
}

interface Options {
  sort: string;
  tagId: number[];
}

interface FilterListProps {
  className?: string;
  createQueryString: ({ name, value }: CreateQueryStringArgs) => void;
}

export default function FilterList({ className, createQueryString }: FilterListProps) {
  const [options, setOptions] = useState<Options>({ sort: '', tagId: [] });

  const handleOptionsClick = ({ name, value }: CreateQueryStringArgs) => {
    createQueryString({ name: name, value: value });
    setOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <S.FilterListsWrapper className={className}>
      <span>정렬</span>
      {sortOptions.map((option) => (
        <BaseHashTags.OneTag
          type="button"
          disabled={false}
          key={option.value}
          onClick={() => createQueryString({ name: 'sort', value: option.value })}
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
          onClick={() => createQueryString({ name: 'tagId', value: String(hashTag.id) })}
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
