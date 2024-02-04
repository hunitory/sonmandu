import React from 'react';
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
        {TitleSection}
        {PostersSection}
      </S.MainContainer>
    </S.MainWrapper>
  );
}
