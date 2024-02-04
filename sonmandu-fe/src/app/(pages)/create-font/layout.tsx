import React from 'react';
import * as S from './_style';

export default function CreateFontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.MainWrapper>
      <S.MainContainer>{children}</S.MainContainer>
    </S.MainWrapper>
  );
}
