'use client';

import React, { MouseEvent, useCallback, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ChattingSideBar({ myFont, rankingFont, setSelectedFont }: T.ChattingSideBarProps) {
  const router = useRouter();
  const [mouseOvered, setMouseOvered] = useState({ ranking: false, my: false });
  const [fontListViews, setFontListViews] = useState({ ranking: true, owner: false });

  const filteringCompletedHandwriting = useCallback(() => {
    return myFont.list.filter((el: T.MyFont, i: number) => el.state === 4 || el.state === 5);
  }, []);

  const handleSelectedFont = ({ e, id, name }: { e: MouseEvent<HTMLLIElement>; id: number; name: string }) => {
    e.stopPropagation();
    setSelectedFont((prev) => ({ fontId: id, fontName: name }));
  };

  const redirectToCreateFont = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    router.push('/create-font');
  };

  return (
    <S.SideBarWrapper>
      <S.FontListOpener
        id="ranking"
        $isOpen={fontListViews.ranking}
        onClick={() => setFontListViews((prev) => ({ ...prev, ranking: !prev.ranking }))}
      >
        <S.ToggleOpenner
          $isOpen={fontListViews.ranking}
          onMouseLeave={() => setMouseOvered({ ranking: false, my: mouseOvered.my })}
          onMouseOver={() => setMouseOvered({ ranking: true, my: mouseOvered.my })}
        >
          인기 손글씨들
          <Image
            src={mouseOvered.ranking ? '/image/white-right-next.svg' : '/image/black-right-next.svg'}
            alt="오프너"
            width={18}
            height={18}
          />
        </S.ToggleOpenner>
        <S.FontsContainer>
          <S.HrTitle>이번 달</S.HrTitle>
          {rankingFont.isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <S.FontCardWrapper key={`skeleton-${i}`}>
                  <Comp.SkeletonCard ratio="4 / 5.5" />
                </S.FontCardWrapper>
              ))
            : rankingFont.list.thisMonthHandwriting.map((res: T.RankingFont, i: number) => (
                <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                  <Comp.BaseFontCard
                    {...res}
                    letter={{ isShow: false, idx: 0 }}
                    onClick={(e) => handleSelectedFont({ e: e, id: res.handwritingId, name: res.name })}
                  />
                </S.FontCardWrapper>
              ))}
          <S.HrTitle>이번 주</S.HrTitle>
          {rankingFont.isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <S.FontCardWrapper key={`skeleton-${i}`}>
                  <Comp.SkeletonCard ratio="4 / 5.5" />
                </S.FontCardWrapper>
              ))
            : rankingFont.list.thisWeekHandwriting.map((res: T.RankingFont, i: number) => (
                <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                  <Comp.BaseFontCard
                    {...res}
                    letter={{ isShow: false, idx: 0 }}
                    onClick={(e) => handleSelectedFont({ e: e, id: res.handwritingId, name: res.name })}
                  />
                </S.FontCardWrapper>
              ))}
          <S.HrTitle></S.HrTitle>
        </S.FontsContainer>
      </S.FontListOpener>
      <S.FontListOpener
        id="owner"
        $isOpen={fontListViews.owner}
        onClick={() => setFontListViews((prev) => ({ ...prev, owner: !prev.owner }))}
      >
        <S.ToggleOpenner
          $isOpen={fontListViews.owner}
          onMouseLeave={() => setMouseOvered({ my: false, ranking: mouseOvered.ranking })}
          onMouseOver={() => setMouseOvered({ my: true, ranking: mouseOvered.ranking })}
        >
          내 손글씨들
          <Image
            src={mouseOvered.my ? '/image/white-right-next.svg' : '/image/black-right-next.svg'}
            alt="오프너"
            width={18}
            height={18}
          />
        </S.ToggleOpenner>
        <S.FontsContainer>
          {myFont.isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <S.FontCardWrapper key={`skeleton-${i}`}>
                <Comp.SkeletonCard ratio="4 / 5.5" />
              </S.FontCardWrapper>
            ))
          ) : filteringCompletedHandwriting().length > 0 ? (
            filteringCompletedHandwriting().map((res: T.MyFont, i: number) => (
              <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                <Comp.BaseFontCard
                  {...res}
                  letter={{ isShow: false, idx: 0 }}
                  onClick={(e) => handleSelectedFont({ e: e, id: res.handwritingId, name: res.name })}
                />
              </S.FontCardWrapper>
            ))
          ) : (
            <S.FontCardWrapper>
              <S.RedirectCreateFont onClick={redirectToCreateFont}>
                <span>내 손글씨를 만들어보세요!</span>
                <Comp.CustomImage src="/image/orange-arrow-right.svg" width={16} height={16} alt="손글씨 만들러 가기" />
              </S.RedirectCreateFont>
            </S.FontCardWrapper>
          )}
        </S.FontsContainer>
      </S.FontListOpener>
    </S.SideBarWrapper>
  );
}
