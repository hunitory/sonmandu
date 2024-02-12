'use client';

import * as API from '@/apis';
import * as Styled from './_style';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useModal from 'customhook/useModal';
import { useQuery } from '@tanstack/react-query';
import { BaseStoryCard } from 'types';

interface StorySectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function BannerSection({ searchParams }: StorySectionProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemCount, setCurrentItemCount] = useState(0);

  const goNext = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  };

  const queryKey = ['font-gallery-search', searchParams.name, searchParams.sort];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.handwritingStory.handwritingStoryList({
        startIdx: currentItemCount,
        takeCount: 10,
        name: searchParams?.name || '',
        sort: 'popular',
      }),
  });

  useEffect(() => {
    setCurrentItemCount((prev) => prev + response?.data.length);
    console.log(response?.data)
  }, [response]);

  const router = useRouter();

  const mainbanner = '/image/banner.png';
  const loginModal = useModal('login');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Styled.MainWrapper>
      {response?.data.map((res: BaseStoryCard) => (
        <Comp.BaseStoryCard key={res.handwritingStoryId} {...res} />
      ))}
    </Styled.MainWrapper>
  );
}
