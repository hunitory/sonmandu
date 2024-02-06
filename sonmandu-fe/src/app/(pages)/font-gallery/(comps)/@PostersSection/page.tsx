'use client';

import React from 'react';
import * as API from '@/apis';
import * as S from './style';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { FontCard } from 'types';

interface TitleSectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function PostersSection({ searchParams }: TitleSectionProps) {
  const queryKey = ['font-gallery-search', searchParams.name, searchParams.tagId, searchParams.sort];

  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwriting.fontListInGallery({
        startIdx: 0,
        takeCount: 6,
        name: searchParams?.name || '',
        sort: searchParams?.sort || '',
        tagId: searchParams?.tagId || '',
      }),
  });
  return (
    <S.CardsGridWrapper>
      {response?.data.map((res: FontCard) => (
        <Comp.BaseFontCard key={res.handwritingId} {...res} />
      ))}
    </S.CardsGridWrapper>
  );
}
