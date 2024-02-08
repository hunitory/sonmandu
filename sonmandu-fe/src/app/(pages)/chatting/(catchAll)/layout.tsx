import React from 'react';
import * as S from './style';

function ChattingLayout({
  children,
  ChattingMessageContainer,
}: {
  children: Readonly<React.ReactNode>;
  ChattingMessageContainer: Readonly<React.ReactNode>;
}) {
  return (
    <S.MainWrapper>
      {ChattingMessageContainer}
      {children}
    </S.MainWrapper>
  );
}

export default ChattingLayout;
