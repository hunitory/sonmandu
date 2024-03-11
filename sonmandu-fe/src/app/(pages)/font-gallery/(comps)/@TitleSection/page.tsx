import React from 'react';
import * as S from './style';
import { SearchOptions } from 'components';

export default function TitleSection() {
  return (
    <S.PageTitleWrapper>
      <div>
        <h1>손글씨 전시관</h1>
        <p>여러 손글씨들을 구경하고 사용도 해보세요!</p>
      </div>
      <SearchOptions></SearchOptions>
    </S.PageTitleWrapper>
  );
}
