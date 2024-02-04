'use client';

import React from 'react';
import * as API from '@/apis';
import * as S from './style';
import { SearchOptions } from 'components';
import { useQuery } from '@tanstack/react-query';

interface TitleSectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function TitleSection({ searchParams }: TitleSectionProps) {
  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['font-gallery-search'],
    queryFn: () =>
      API.handwriting.fontListInGallery({
        startIdx: 0,
        takeCount: 4,
        name: searchParams?.name || '',
        sort: searchParams?.sort || '',
        tagId: searchParams?.tagId || '',
      }),
  });

  return (
    <S.PageTitleWrapper>
      <div>
        <h1>손글씨 전시관</h1>
        <p>여러 손글씨들을 구경하고 사용도 해보세요!</p>
      </div>
      <SearchOptions></SearchOptions>
    </S.PageTitleWrapper>
  );
}
