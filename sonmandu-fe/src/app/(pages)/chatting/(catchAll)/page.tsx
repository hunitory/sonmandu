'use client';

import React, { Dispatch, MouseEvent, SetStateAction, useCallback, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';

interface ChattingSideBarProps {
  myFont: { list: MyFont[]; isLoading: boolean };
  rankingFont: { list: { thisMonthHandwriting: T.FontCard[]; thisWeekHandwriting: T.FontCard[] }; isLoading: boolean };
  setSelectedFont: Dispatch<SetStateAction<{ fontId: number; fontName: string }>>;
}

interface RankingFont {
  downloadCount: number;
  downloadUrl: string;
  handwritingId: number;
  hitCount: number;
  isLike: boolean;
  likeCount: number;
  name: string;
  tag: number[];
}
interface MyFont {
  handwritingId: number;
  name: string;
  state: number;
  downloadUrl: string;
  hitCount: number;
  likeCount: number;
  downloadCount: number;
  tag: number[];
  isLike: boolean;
}

export default function ChattingSideBar({ myFont, rankingFont, setSelectedFont }: ChattingSideBarProps) {
  const router = useRouter();
  const [fontListViews, setFontListViews] = useState({ ranking: true, owner: false });

  const filteringCompletedHandwriting = useCallback(() => {
    return myFont.list.filter((el: MyFont, i: number) => el.state === 4 || el.state === 5);
  }, []);

  const handleSelectedFont = ({ id, name }: { id: number; name: string }) => {
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
        <p className="toggle-opener">인기 손글씨들</p>
        <S.FontsContainer>
          <S.HrTitle>
            <span>이번 달</span>
          </S.HrTitle>
          {rankingFont.isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <S.FontCardWrapper key={`skeleton-${i}`}>
                  <Comp.SkeletonCard ratio="4 / 5.5" />
                </S.FontCardWrapper>
              ))
            : rankingFont.list.thisMonthHandwriting.map((res: T.FontCard, i: number) => (
                <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                  <Comp.BaseFontCard
                    {...res}
                    letter={{ isShow: false, idx: 0 }}
                    onClick={() => handleSelectedFont({ id: res.handwritingId, name: res.name })}
                  />
                </S.FontCardWrapper>
              ))}
          <S.HrTitle>
            <span>이번 주</span>
          </S.HrTitle>
          {rankingFont.isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <S.FontCardWrapper key={`skeleton-${i}`}>
                  <Comp.SkeletonCard ratio="4 / 5.5" />
                </S.FontCardWrapper>
              ))
            : rankingFont.list.thisWeekHandwriting.map((res: T.FontCard, i: number) => (
                <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                  <Comp.BaseFontCard
                    {...res}
                    letter={{ isShow: false, idx: 0 }}
                    onClick={() => handleSelectedFont({ id: res.handwritingId, name: res.name })}
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
        <p className="toggle-opener">내 손글씨들</p>
        <S.FontsContainer>
          {myFont.isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <S.FontCardWrapper key={`skeleton-${i}`}>
                <Comp.SkeletonCard ratio="4 / 5.5" />
              </S.FontCardWrapper>
            ))
          ) : filteringCompletedHandwriting().length > 0 ? (
            filteringCompletedHandwriting().map((res: MyFont, i: number) => (
              <S.FontCardWrapper key={`${res.handwritingId}-${i}`}>
                <Comp.BaseFontCard
                  {...res}
                  letter={{ isShow: false, idx: 0 }}
                  onClick={() => handleSelectedFont({ id: res.handwritingId, name: res.name })}
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
