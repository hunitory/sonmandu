import React from 'react';
import * as S from './style';
import { SearchOptions } from 'components';

export default function FontGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <S.PageTitleWrapper>
          <div>
            <h1>손글씨 전시관</h1>
            <p>여러 손글씨들을 구경하고 사용도 해보세요!</p>
          </div>
          <SearchOptions></SearchOptions>
        </S.PageTitleWrapper>
        <S.CardsGridWrapper>{children}</S.CardsGridWrapper>
      </S.MainContainer>
    </S.MainWrapper>
  );
}
