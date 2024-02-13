'use client';

import React, { useCallback, useEffect, useState } from 'react';
import * as API from '@/apis';
import * as S from './style';
import * as T from '@/types';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from 'customhook';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchParams {
  tagId: string;
  name: string;
  sort: string;
  [key: string]: string;
}
export default function PostersSection() {
  const route = useRouter();
  const searchParams = useSearchParams();
  const [curItemList, setCurItemList] = useState<T.FontCard[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState({ curRequestLoading: false, endOfList: false });
  const [prevSearchParams, setPrevSearchParams] = useState<SearchParams>({
    tagId: searchParams.get('tagId') || '',
    name: searchParams.get('name') || '',
    sort: searchParams.get('sort') || '',
  });

  const isQueryChanged = useCallback(() => {
    for (const [key, value] of searchParams.entries()) {
      if (!['name', 'tagId', 'sort'].includes(key)) continue;
      if (prevSearchParams[key] !== value) {
        return true;
      }
    }

    return false;
  }, [searchParams.get('tagId'), searchParams.get('name'), searchParams.get('sort')]);

  const infiniteScrollQueryKey = [
    'font-gallery-search',
    searchParams.get('name'),
    searchParams.get('tagId'),
    searchParams.get('sort'),
  ];
  const { isLoading: infiniteScrollLoading, refetch: requestGetListByScroll } = useQuery({
    queryKey: infiniteScrollQueryKey,
    queryFn: async () => {
      if (isQueryChanged()) {
        setCurItemList([]);
        setIsLoadingMore((prev) => ({ ...prev, endOfList: false }));
        setPrevSearchParams((prev) => ({
          ...prev,
          tagId: searchParams.get('tagId') || '',
          name: searchParams.get('name') || '',
          sort: searchParams.get('sort') || '',
        }));
      }

      const requestArgs = {
        startIdx: curItemList.length,
        takeCount: 5,
        tagId: searchParams.get('tagId') || '',
        name: searchParams.get('name') || '',
        sort: searchParams.get('sort') || '',
      };

      return await API.handwriting.fontListInGallery(requestArgs).then((res) => {
        setCurItemList((prev) => [...prev, ...res.data]);
        return res.data;
      });
    },
    refetchInterval: false,
    refetchOnMount: true,
  });

  const infiniteScrollRequest: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isLoadingMore.endOfList) return;

    if (isIntersecting) {
      setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: true }));
      requestGetListByScroll()
        .then((res) => {
          if (res.data.length === 0) setIsLoadingMore((prev) => ({ ...prev, endOfList: true }));
          return res;
        })
        .finally(() => setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: false })));
    }
    return isIntersecting;
  };
  const { setTarget } = useIntersectionObserver({ onIntersect: infiniteScrollRequest });

  return (
    <S.CardsGridWrapper>
      {curItemList.length > 0 &&
        curItemList.map((res: T.FontCard, i: number) => (
          <Comp.BaseFontCard
            key={`${res.handwritingId}-${i}`}
            {...res}
            letter={{ isShow: true, idx: i }}
            onClick={() => route.push(`/font-detail/${res.handwritingId}`)}
          />
        ))}
      {isLoadingMore.curRequestLoading &&
        Array.from({ length: 5 }).map((_, i) => <Comp.SkeletonCard key={`skeleton-${i}`} ratio="4 / 5.5" />)}
      {!infiniteScrollLoading && <div ref={setTarget}></div>}
    </S.CardsGridWrapper>
  );
}
