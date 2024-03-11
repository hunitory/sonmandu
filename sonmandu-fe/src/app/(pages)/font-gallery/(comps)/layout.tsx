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
      <S.MainContainer>
        <Suspense>
          {TitleSection}
          {PostersSection}
        </Suspense>
      </S.MainContainer>
    </S.MainWrapper>
  );
}
