import React from 'react';
import * as Styled from './_style';

export default function CreateFontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Styled.MainWrapper>
      <Styled.MainContainer>{children}</Styled.MainContainer>
    </Styled.MainWrapper>
  );
}
