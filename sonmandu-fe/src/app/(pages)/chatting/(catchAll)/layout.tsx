import React, { Suspense } from 'react';
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
      <Suspense>
        {ChattingMessageContainer}
        {children}
      </Suspense>
    </S.MainWrapper>
  );
}

export default ChattingLayout;
