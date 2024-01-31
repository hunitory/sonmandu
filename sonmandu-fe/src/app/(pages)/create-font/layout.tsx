import React from 'react';
import * as S from './_style';

export default function FontStoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.FontCreateMainWrapper>
      <S.FontCreateMainContainer>{children}</S.FontCreateMainContainer>
    </S.FontCreateMainWrapper>
  );}
