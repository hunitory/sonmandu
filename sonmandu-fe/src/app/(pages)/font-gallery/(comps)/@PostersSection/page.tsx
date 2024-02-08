'use client';

import React, { useEffect, useState } from 'react';
import * as API from '@/apis';
import * as S from './style';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { FontCard } from 'types';

interface PosterSectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}
export default function PostersSection({ searchParams }: PosterSectionProps) {
  const [currentItemCount, setCurrentItemCount] = useState(0);

  const queryKey = ['font-gallery-search', searchParams.name, searchParams.tagId, searchParams.sort];
  // const queryKey = ['font-gallery-search', searchParams];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwriting.fontListInGallery({
        startIdx: currentItemCount,
        takeCount: 5,
        name: searchParams?.name || '',
        sort: searchParams?.sort || '',
        tagId: searchParams?.tagId || '',
      }),
  });

  useEffect(() => {
    setCurrentItemCount((prev) => prev + response?.data.length);
  }, [response]);

  return (
    <S.CardsGridWrapper>
      {response?.data.map((res: FontCard) => (
        <Comp.BaseFontCard key={res.handwritingId} {...res} removeLetter={false} />
      ))}
    </S.CardsGridWrapper>
  );
}
