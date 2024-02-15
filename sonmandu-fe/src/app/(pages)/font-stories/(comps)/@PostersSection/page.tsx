'use client';

import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as T from '@/types';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from 'customhook';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchParams {
  title: string;
  sort: string;
  [key: string]: string;
}

export default function PosterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [curItemList, setCurItemList] = useState<T.BaseStoryCard[]>([]);
  const [endOfList, setEndOfList] = useState(false);
  const [prevSearchParams, setPrevSearchParams] = useState<SearchParams>({
    title: searchParams.get('title') || '',
    sort: searchParams.get('sort') || '',
  });

  const isQueryChanged = useCallback(() => {
    for (const [key, value] of searchParams.entries()) {
      if (!['title', 'sort'].includes(key)) continue;
      if (prevSearchParams[key] !== value) return true;
    }
    return false;
  }, [searchParams.get('title'), searchParams.get('sort')]);

  const queryStringChangeQueryKey = ['font-stories-search', searchParams.get('title'), searchParams.get('sort')];
  const {
    isLoading: queryStringChangeLoading,
    isFetched: queryStringChangeResponseFetched,
    refetch: requestQueryChange,
  } = useQuery({
    queryKey: queryStringChangeQueryKey,
    queryFn: async () => {
      setEndOfList(false);
      if (isQueryChanged()) {
        setCurItemList([]);
        setPrevSearchParams((prev) => ({
          ...prev,
          title: searchParams.get('title') || '',
          sort: searchParams.get('sort') || '',
        }));
      }
      const requestArgs = {
        startIdx: 0,
        takeCount: 5,
        title: searchParams.get('title') || '',
        sort: searchParams.get('sort') || '',
      };
      const serverRes = await API.handwritingStory.handwritingStoryList(requestArgs);
      setCurItemList(() => [...serverRes.data]);
      return serverRes;
    },
    refetchInterval: false,
    refetchOnMount: true,
    retry: 1,
  });

  const infiniteScrollQueryKey = ['font-stories-search'];
  const { isLoading: infiniteScrollLoading, refetch: requesetInfiniteScroll } = useQuery({
    queryKey: infiniteScrollQueryKey,
    queryFn: async () => {
      const requestArgs = {
        startIdx: curItemList.length,
        takeCount: 5,
        title: searchParams.get('title') || '',
        sort: searchParams.get('sort') || '',
      };

      const serverRes = await API.handwritingStory.handwritingStoryList(requestArgs);
      setCurItemList((previous) => {
        const filteredListBasket = [...previous];
        const prevStoryIds = previous.map((prev) => prev.handwritingStoryId);
        serverRes.data.forEach(
          (res: T.BaseStoryCard, i: number) =>
            !prevStoryIds.includes(res.handwritingStoryId) && filteredListBasket.push(serverRes.data[i]),
        );
        return filteredListBasket;
      });

      return serverRes.data;
    },
    refetchInterval: false,
    refetchOnMount: true,
    enabled: queryStringChangeResponseFetched && curItemList.length > 0,
  });

  const infiniteScrollRequest: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
    if (endOfList) return;

    if (isIntersecting && curItemList.length > 0) {
      const res = await requesetInfiniteScroll();

      if (res.data.length === 0) setEndOfList(true);
      return res;
    }
    return isIntersecting;
  };
  const { setTarget } = useIntersectionObserver({ onIntersect: infiniteScrollRequest });

  useEffect(() => {
    return () => {
      setCurItemList(() => []);
      setEndOfList(false);
    };
  }, []);

  const createScrollTarget = useCallback(() => {
    if (!endOfList) {
      if (!infiniteScrollLoading && !queryStringChangeLoading) {
        return <div ref={setTarget}></div>;
      }
    }
  }, [endOfList, infiniteScrollLoading, queryStringChangeLoading]);

  return (
    <S.CardsGridWrapper>
      {curItemList.length > 0 &&
        curItemList.map((res: T.BaseStoryCard, i: number) => (
          <Comp.BaseStoryCard
            key={`${res.handwritingStoryId}-${i}`}
            {...res}
            onClick={() => router.push(`/font-story-detail/${res.handwritingStoryId}`)}
          />
        ))}
      {createScrollTarget()}
    </S.CardsGridWrapper>
  );
}
