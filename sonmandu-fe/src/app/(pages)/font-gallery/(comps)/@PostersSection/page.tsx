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

  const requestFonts = useCallback(async (serverRes: T.FontCard[]) => {
    const downloadUrls = serverRes.map((res: T.FontCard) =>
      API.handwriting.getFontFileFromS3({ url: res.downloadUrl }),
    );
    const responseFromS3 = await Promise.allSettled(downloadUrls);

    await Promise.allSettled(
      responseFromS3.map((res, i) => {
        if (res.status === 'fulfilled')
          return API.handwriting.loadFontInService({ getFontResponse: res.value, name: serverRes[i].name });
      }),
    );
  }, []);

  const isQueryChanged = useCallback(() => {
    for (const [key, value] of searchParams.entries()) {
      if (!['name', 'tagId', 'sort'].includes(key)) continue;
      if (prevSearchParams[key] !== value) return true;
    }
    return false;
  }, [searchParams.get('tagId'), searchParams.get('name'), searchParams.get('sort')]);

  const queryStringChangeQueryKey = [
    'font-gallery-search',
    searchParams.get('name'),
    searchParams.get('tagId'),
    searchParams.get('sort'),
  ];
  const {
    isLoading: queryStringChangeLoading,
    isFetched: queryStringChangeResponseFetched,
    refetch: requestGetListByOptions,
  } = useQuery({
    queryKey: queryStringChangeQueryKey,
    queryFn: async () => {
      setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: true, endOfList: false }));
      if (isQueryChanged()) {
        setCurItemList([]);
        setPrevSearchParams((prev) => ({
          ...prev,
          tagId: searchParams.get('tagId') || '',
          name: searchParams.get('name') || '',
          sort: searchParams.get('sort') || '',
        }));
      }
      const requestArgs = {
        startIdx: 0,
        takeCount: 5,
        tagId: searchParams.get('tagId') || '',
        name: searchParams.get('name') || '',
        sort: searchParams.get('sort') || '',
      };
      return await API.handwriting
        .fontListInGallery(requestArgs)
        .then(async (serverRes) => {
          await requestFonts(serverRes.data);

          setCurItemList((prev) => [...serverRes.data]);
          return serverRes.data;
        })
        .finally(() => setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: false })));
    },
    refetchInterval: false,
    refetchOnMount: false,
  });

  const infiniteScrollQueryKey = ['font-gallery-search'];
  const { isLoading: infiniteScrollLoading, refetch: requestGetListByScroll } = useQuery({
    queryKey: infiniteScrollQueryKey,
    queryFn: async () => {
      const requestArgs = {
        startIdx: curItemList.length,
        takeCount: 5,
        tagId: searchParams.get('tagId') || '',
        name: searchParams.get('name') || '',
        sort: searchParams.get('sort') || '',
      };
      return await API.handwriting.fontListInGallery(requestArgs).then(async (serverRes) => {
        await requestFonts(serverRes.data);

        setCurItemList((prev) => [...prev, ...serverRes.data]);
        return serverRes.data;
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

  useEffect(() => {
    return () => {
      setCurItemList((prev) => []);
      setIsLoadingMore((prev) => ({ ...prev, curRequestLoading: false, endOfList: false }));
    };
  }, []);

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
      {!infiniteScrollLoading && !queryStringChangeLoading && <div ref={setTarget}></div>}
    </S.CardsGridWrapper>
  );
}
