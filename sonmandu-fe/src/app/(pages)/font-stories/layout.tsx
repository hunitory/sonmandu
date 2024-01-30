import React from 'react';
import * as S from './style';

export default function FontStoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <S.FontStoriesWrapper>{children}</S.FontStoriesWrapper>;
}
