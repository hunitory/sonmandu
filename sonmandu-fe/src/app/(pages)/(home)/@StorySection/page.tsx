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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1208,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickRef = useRef<CustomSlider>(null);
  const [currentItemCount, setCurrentItemCount] = useState(0);

  const goNext = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  const queryKey = ['font-gallery-search', searchParams.name, searchParams.sort];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwritingStory.handwritingStoryList({
        startIdx: currentItemCount,
        takeCount: 4,
        name: searchParams?.name || '',
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
        {response?.data.map((res: BaseStoryCard) => (
          <Comp.MainStoryCard key={res.handwritingStoryId} {...res} />
        ))}
      </Styled.StoryCardsWrapper>
    </Styled.StoryWrapper>
  );
}
