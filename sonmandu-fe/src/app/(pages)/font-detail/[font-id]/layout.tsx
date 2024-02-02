import React from 'react';
import * as S from './style';

function FontDetailLayout({
  FontInfomation,
  FontTesting,
}: {
  FontInfomation: React.ReactNode;
  FontTesting: React.ReactNode;
}) {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        {FontInfomation}
        {FontTesting}
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default FontDetailLayout;
