'use client';

import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as T from '@/types';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from 'customhook';
import { useSearchParams } from 'next/navigation';

interface SearchParams {
  title: string;
  sort: string;
  [key: string]: string;
}

export default function PosterSection() {
  const searchParams = useSearchParams();
  const [curItemList, setCurItemList] = useState<T.BaseStoryCard[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState({ curRequestLoading: false, endOfList: false });
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
      if (isQueryChanged()) {
        setCurItemList([]);
        setIsLoadingMore((prev) => ({ ...prev, endOfList: false }));
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
      return await API.handwritingStory.handwritingStoryList(requestArgs).then((res) => {
        setCurItemList((prev) => [...res.data]);
        return res.data;
      });
    },
    refetchInterval: false,
    refetchOnMount: true,
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

      return await API.handwritingStory.handwritingStoryList(requestArgs).then((res) => {
        setCurItemList((prev) => [...prev, ...res.data]);
        return res.data;
      });
    },
    refetchInterval: false,
    refetchOnMount: true,
    enabled: queryStringChangeResponseFetched,
  });

  const infiniteScrollRequest: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isLoadingMore.endOfList) return;

    if (isIntersecting) {
      setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: true }));
      requesetInfiniteScroll()
        .then((res) => {
          if (res.data.length === 0) setIsLoadingMore((prev) => ({ ...prev, endOfList: true }));
          return res;
        })
        .finally(() => setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: false })));
    }
    return isIntersecting;
  };
  const { setTarget } = useIntersectionObserver({ onIntersect: infiniteScrollRequest });

  useEffect(() => {
    return () => {
      setCurItemList((prev) => []);
      setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: false, endOfList: false }));
    };
  }, []);

  return (
    <S.CardsGridWrapper>
      {curItemList.length > 0 &&
        curItemList.map((res: T.BaseStoryCard, i: number) => (
          <Comp.BaseStoryCard key={`${res.handwritingStoryId}-${i}`} {...res} />
        ))}
      {isLoadingMore.curRequestLoading &&
        Array.from({ length: 5 }).map((_, i) => <Comp.SkeletonCard key={`skeleton-${i}`} ratio="4 / 12" />)}
      {!infiniteScrollLoading && !queryStringChangeLoading && <div ref={setTarget}></div>}
    </S.CardsGridWrapper>
  );
}
