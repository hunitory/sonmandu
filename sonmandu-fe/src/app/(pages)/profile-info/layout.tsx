import React from 'react';
import * as S from './style';

export default function ProfileInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <S.StyledMain>{children}</S.StyledMain>;
}
