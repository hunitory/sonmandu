import React from 'react';
import * as S from './style';

export default function FontDetailLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <S.MainWrapper>{children}</S.MainWrapper>;
}
