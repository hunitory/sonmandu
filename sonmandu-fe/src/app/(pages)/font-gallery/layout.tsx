import React from 'react';
import * as S from './style';

export default function FontGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <S.FontGalleryMain>{children}</S.FontGalleryMain>;
}
