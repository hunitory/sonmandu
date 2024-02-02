import React from 'react';
import * as S from './style';
import * as Comp from '@/components';

function FontTesting() {
  return (
    <S.TestingWrapper>
      <S.TestingLatterArea>
        <Comp.BaseLetterField letterImgUrl="/image/letter-1.png" />
      </S.TestingLatterArea>
      <S.SideBoxWrapper></S.SideBoxWrapper>
    </S.TestingWrapper>
  );
}

export default FontTesting;
