import React from 'react';
import * as S from './style';

function FontDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.MainWrapper>
      <S.MainContainer>{children}</S.MainContainer>
    </S.MainWrapper>
  );
}

export default FontDetailLayout;
