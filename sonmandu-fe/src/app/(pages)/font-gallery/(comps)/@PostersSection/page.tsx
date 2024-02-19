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
  const [endOfList, setEndOfList] = useState(false);
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

  const isQueryChanged = () => {
    for (const [key, value] of searchParams.entries()) {
      if (!['name', 'tagId', 'sort'].includes(key)) continue;
      if (prevSearchParams[key] !== value) return true;
    }
    return false;
  };

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
      setEndOfList(false);
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
      const serverRes = await API.handwriting.fontListInGallery(requestArgs);

      setCurItemList((prev) => [...serverRes.data]);
      await requestFonts(serverRes.data);

      return serverRes.data;
    },
    refetchInterval: false,
    refetchOnMount: true,
    retry: 1,
  });

  const infiniteScrollQueryKey = ['font-gallery-search'];
  const { isFetching: infiniteScrollLoading, refetch: requestGetListByScroll } = useQuery({
    queryKey: infiniteScrollQueryKey,
    queryFn: async () => {
      const requestArgs = {
        startIdx: curItemList.length,
        takeCount: 4,
        tagId: searchParams.get('tagId') || '',
        name: searchParams.get('name') || '',
        sort: searchParams.get('sort') || '',
      };
      const serverRes = await API.handwriting.fontListInGallery(requestArgs);
      setCurItemList((prev) => [...prev, ...serverRes.data]);
      await requestFonts(serverRes.data);

      return serverRes.data;
    },
    refetchInterval: false,
    refetchOnMount: true,
    enabled: queryStringChangeResponseFetched,
  });
  const infiniteScrollRequest: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
    if (endOfList) return;

    if (isIntersecting) {
      const res = await requestGetListByScroll();

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
      setPrevSearchParams({
        tagId: searchParams.get('tagId') || '',
        name: searchParams.get('name') || '',
        sort: searchParams.get('sort') || '',
      });
    };
  }, []);

  useEffect(() => {
    if (searchParams.get('tagId') === null && searchParams.get('name') === null && searchParams.get('sort') === null)
      requestGetListByOptions();
    setEndOfList(() => false);
  }, [searchParams.get('tagId'), searchParams.get('name'), searchParams.get('sort')]);

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
        curItemList.map((res: T.FontCard, i: number) => (
          <S.CustomFontCard
            key={`${res.handwritingId}-${i}`}
            {...res}
            letter={{ isShow: true, idx: i }}
            onClick={() => route.push(`/font-detail/${res.handwritingId}`)}
          />
        ))}
      {createScrollTarget()}
    </S.CardsGridWrapper>
  );
}
