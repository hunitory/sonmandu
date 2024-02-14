'use client';

import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as API from '@/apis';
import ChattingMessageContainer from './@ChattingMessageContainer/page';
import ChattingSideBar from './page';
import { useQueries } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

function ChattingLayout() {
  const router = useRouter();
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

  const [curSelectedFont, setCurSelectedFont] = useState<{ fontId: number; fontName: string }>({
    fontId: 0,
    fontName: '',
  });
  const [{ data: rankingFontResponse, isLoading: isLoadingRanking }, { data: myFontResponse, isLoading: isLoadingMy }] =
    useQueries({
      queries: [
        {
          queryKey: ['ranking-font'],
          queryFn: () =>
            API.handwriting.rankingFont().then(async (serverRes) => {
              await requestFonts([...serverRes.data.thisMonthHandwriting, ...serverRes.data.thisWeekHandwriting]);
              const targetFont = serverRes.data.thisMonthHandwriting[0];
              setCurSelectedFont(() => ({ fontId: targetFont.handwritingId, fontName: targetFont.name }));
              return serverRes;
            }),
          staleTime: Infinity,
          refetchInterval: false,
          retry: 1,
        },
        {
          queryKey: ['my-font'],
          queryFn: () =>
            API.handwriting.getMyHandwriting().then(async (serverRes) => {
              await requestFonts(serverRes.data);

              if (serverRes.data.length > 0) {
                const targetFont = serverRes.data[0];
                setCurSelectedFont(() => ({ fontId: targetFont.handwritingId, fontName: targetFont.name }));
              }
              return serverRes;
            }),
          staleTime: Infinity,
          refetchInterval: false,
          retry: 1,
        },
      ],
    });

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (accessToken === null || refreshToken === null) {
      alert('로그인 후 이용해주세요!');
      router.back();
    }
  }, []);

  return (
    <S.MainWrapper>
      <ChattingMessageContainer requestFonts={requestFonts} curSelectedFont={curSelectedFont} />
      <ChattingSideBar
        setSelectedFont={setCurSelectedFont}
        myFont={{ list: myFontResponse?.data || [], isLoading: isLoadingMy }}
        rankingFont={{
          list: rankingFontResponse?.data || { thisMonthHandwriting: [], thisWeekHandwriting: [] },
          isLoading: isLoadingRanking,
        }}
      />
    </S.MainWrapper>
  );
}

export default ChattingLayout;
