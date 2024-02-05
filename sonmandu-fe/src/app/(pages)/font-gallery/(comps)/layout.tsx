import React, { Suspense } from 'react';
import * as S from './style';

export default function FontGalleryLayout({
  TitleSection,
  PostersSection,
}: Readonly<{
  TitleSection: React.ReactNode;
  PostersSection: React.ReactNode;
}>) {
  return (
    <S.MainWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <S.MainContainer>
          {TitleSection}
          {PostersSection}
        </S.MainContainer>
      </Suspense>
    </S.MainWrapper>
  );
}
