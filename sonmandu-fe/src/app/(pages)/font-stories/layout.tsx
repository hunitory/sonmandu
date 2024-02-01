import React from 'react';
import * as S from './style';
import { SearchOptions } from 'components';

export default function FontStoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <S.PageTitleWrapper>
          <div>
            <h1>손글씨 이야기들</h1>
            <p>손글씨에 대한 이야기들을 구경해보세요!</p>
          </div>
          <SearchOptions></SearchOptions>
        </S.PageTitleWrapper>
        <S.CardsGridWrapper>{children}</S.CardsGridWrapper>
      </S.MainContainer>
    </S.MainWrapper>
  );
}
