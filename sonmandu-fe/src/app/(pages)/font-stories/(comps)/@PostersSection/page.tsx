'use client';

import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';

interface PosterSectionProps {
  searchParams: { name: string; sort: string };
}

export default function PosterSection({ searchParams }: PosterSectionProps) {
  const [currentItemCount, setCurrentItemCount] = useState(0);

  const queryKey = ['font-gallery-search', searchParams.name, searchParams.sort];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwritingStory.handwritingStoryList({
        startIdx: currentItemCount,
        takeCount: 5,
        name: searchParams?.name || '',
        sort: searchParams?.sort || '',
      }),
  });

  useEffect(() => {
    setCurrentItemCount((prev) => prev + response?.data.length);
  }, [response]);

  return (
    <S.CardsGridWrapper>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
      <Comp.BaseStoryCard></Comp.BaseStoryCard>
    </S.CardsGridWrapper>
  );
}
