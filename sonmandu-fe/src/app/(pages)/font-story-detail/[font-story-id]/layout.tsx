import React from 'react';
import * as S from './style';

export default function FontStoryDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <S.FontStoryDetailWrapper>{children}</S.FontStoryDetailWrapper>;
}
