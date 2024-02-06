import React from 'react';
import * as S from './_style';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <S.StyledMain>
      {children}
    </S.StyledMain>
  );
}
