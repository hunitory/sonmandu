import React, { useCallback, useEffect } from 'react';
import * as S from './style';
import { BaseHashTags } from 'components';
import { WHOLE_HASH_TAGES } from '@/constants';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface FilterListProps {
  hashTagListState: number[];
  sortOptionState: string;
  className?: string;
}

interface CreateQueryStringArgs {
  name: 'sort' | 'tagId' | 'name';
  value: string;
}

export default function FilterList({
  className,
  hashTagListState,
  sortOptionState,
}: FilterListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    ({ name, value }: CreateQueryStringArgs) => {
      if (name === 'tagId') {
        let newTags;
        const currentTags = searchParams.get('tagId')?.split(',') || [];

        if (currentTags?.includes(value)) {
          newTags = currentTags?.filter((tag) => tag !== value).join(',');
        } else {
          newTags = [...currentTags, value].join(',');
        }

        const params = new URLSearchParams(searchParams.toString());
        params.set('tagId', `${newTags}`);

        return router.push(`${pathname}?${params.toString()}`);
      }

      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  useEffect(() => {
    console.log(`searchParams.get('tagId') :`, searchParams.get('tagId'));
    console.log(`searchParams.get('sort') :`, searchParams.get('sort'));
    console.log(`searchParams.get('name') :`, searchParams.get('name'));
  }, [searchParams]);

  return (
    <S.FilterListsWrapper className={className}>
      <span>정렬</span>
      {sortOptions.map((option) => (
        <BaseHashTags.OneTag
          type="button"
          disabled={false}
          key={option.value}
          onClick={() =>
            createQueryString({ name: 'sort', value: option.value })
          }
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
          onClick={() =>
            createQueryString({ name: 'tagId', value: String(hashTag.id) })
          }
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
