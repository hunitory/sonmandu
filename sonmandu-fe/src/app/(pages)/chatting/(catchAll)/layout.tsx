import React from 'react';
import * as S from './style';

function ChattingLayout({
  children,
  ChatContainer,
}: {
  children: Readonly<React.ReactNode>;
  ChatContainer: Readonly<React.ReactNode>;
}) {
  return (
    <S.MainWrapper>
      {children}
      {ChatContainer}
    </S.MainWrapper>
  );
}

export default ChattingLayout;
