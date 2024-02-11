'use client';

import React, { MouseEvent, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import { useQuery } from '@tanstack/react-query';

export default function ChattingSideBar() {
  const [fontListViews, setFontListViews] = useState({ ranking: false, owner: false });
  const { data: rankingFontResponse, isFetching } = useQuery({
    queryKey: ['ranking-font'],
    queryFn: () => API.handwriting.rankingFont(),
    retry: 1,
  });

  const handleListIsOpen = (e: MouseEvent<HTMLDivElement>) => {
    setFontListViews((prev) => {
      if (e.currentTarget.id === 'ranking') {
        return { ...prev, ranking: !prev.ranking };
      }
      return { ...prev, owner: !prev.owner };
    });
  };

  return (
    <S.SideBarWrapper>
      <S.FontListOpener
        id="ranking"
        $isOpen={fontListViews.ranking}
        onClick={() => setFontListViews((prev) => ({ ...prev, ranking: !prev.ranking }))}
      >
        <p>인기 손글씨들</p>
        <S.FontsContainer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </S.FontsContainer>
      </S.FontListOpener>
      <S.FontListOpener
        id="owner"
        $isOpen={fontListViews.owner}
        onClick={() => setFontListViews((prev) => ({ ...prev, owner: !prev.owner }))}
      >
        <p>내 손글씨들</p>
        <S.FontsContainer>
          <div></div>
          <div></div>
          <div></div>
        </S.FontsContainer>
      </S.FontListOpener>
    </S.SideBarWrapper>
  );
}
