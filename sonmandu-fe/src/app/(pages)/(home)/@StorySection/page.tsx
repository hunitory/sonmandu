'use client';

import * as API from '@/apis';
import * as Styled from './_style';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';
import useModal from 'customhook/useModal';
import { useQuery } from '@tanstack/react-query';
import { BaseStoryCard } from 'types';
import Image from 'next/image';
import Slider from 'react-slick';
import CustomSlider from 'react-slick';
import Link from 'next/link';

interface StorySectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function StorySection({ searchParams }: StorySectionProps) {
  const [currentItemCount, setCurrentItemCount] = useState(0);

  const queryKey = ['font-gallery-search', searchParams.name, searchParams.sort];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwritingStory.handwritingStoryList({
        startIdx: currentItemCount,
        takeCount: 4,
        title: searchParams?.name || '',
        sort: 'popular',
      }),
  });

  useEffect(() => {
    setCurrentItemCount((prev) => prev + response?.data.length);
    console.log(response?.data);
  }, [response]);

  return (
    <Styled.StoryWrapper>
      <Styled.TitleWrapper>
        <Styled.TitleTextWrapper>
          <Styled.TitleText>인기있는 손글씨 이야기</Styled.TitleText>
        </Styled.TitleTextWrapper>
        <Styled.MoreStoryWrapper>
          <Link href="/font-stories" passHref>
            <Styled.MoreStoryText>더보기</Styled.MoreStoryText>
            <Image src="/image/orange-arrow-right.svg" alt="이야기 더보기" width={50} height={20} />
          </Link>
        </Styled.MoreStoryWrapper>
      </Styled.TitleWrapper>
      <Styled.StoryCardsWrapper>
        {response?.data.map((res: BaseStoryCard) => <Comp.MainStoryCard key={res.handwritingStoryId} {...res} />)}
      </Styled.StoryCardsWrapper>
    </Styled.StoryWrapper>
  );
}
