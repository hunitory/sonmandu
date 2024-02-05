import React from 'react';
import * as S from './style';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <S.ProfilePageWapper>{children}</S.ProfilePageWapper>;
}
