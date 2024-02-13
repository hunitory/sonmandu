'use client';

import React, { useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';

export default function ChattingSideBar() {
  const [fontListViews, setFontListViews] = useState({ ranking: true, owner: true });
  const { data: rankingFontResponse, isFetching } = useQuery({
    queryKey: ['ranking-font'],
    queryFn: () => API.handwriting.rankingFont(),
    refetchInterval: false,
  });

  return (
    <S.SideBarWrapper>
      <S.FontListOpener
        id="ranking"
        $isOpen={fontListViews.ranking}
        onClick={() => setFontListViews((prev) => ({ ...prev, ranking: !prev.ranking }))}
      >
        <p className="toggle-opener">인기 손글씨들</p>
        <S.FontsContainer>
          <S.HrTitle>
            <span>이번 달</span>
          </S.HrTitle>
          {rankingFontResponse?.data.thisMonthHandwriting.map((res: T.FontCard, i: number) => (
            <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
              <Comp.BaseFontCard {...res} letter={{ isShow: false, idx: 0 }} />
            </S.FontCardWrapper>
          ))}
          <S.HrTitle>
            <span>이번 주</span>
          </S.HrTitle>
          {rankingFontResponse?.data.thisWeekHandwriting.map((res: T.FontCard, i: number) => (
            <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
              <Comp.BaseFontCard {...res} letter={{ isShow: false, idx: 0 }} />
            </S.FontCardWrapper>
          ))}
        </S.FontsContainer>
      </S.FontListOpener>
      <S.FontListOpener
        id="owner"
        $isOpen={fontListViews.owner}
        onClick={() => setFontListViews((prev) => ({ ...prev, owner: !prev.owner }))}
      >
        <p className="toggle-opener">내 손글씨들</p>
        <S.FontsContainer>
          {rankingFontResponse?.data.thisWeekHandwriting.map((res: T.FontCard, i: number) => (
            <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
              <Comp.BaseFontCard {...res} letter={{ isShow: false, idx: 0 }} />
            </S.FontCardWrapper>
          ))}
        </S.FontsContainer>
      </S.FontListOpener>
    </S.SideBarWrapper>
  );
}
