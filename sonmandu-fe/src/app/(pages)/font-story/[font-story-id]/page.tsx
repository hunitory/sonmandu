import React, { ChangeEvent, useState, useRef } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

export default function FontStoryDetailPage() {
  return (
    <S.DetailWrapper>
      <S.UpperWrapper>
        <S.UpperHeadWrapper></S.UpperHeadWrapper>
      </S.UpperWrapper>
      <S.ProfileWrapper></S.ProfileWrapper>
      <S.LowerWrapper></S.LowerWrapper>
    </S.DetailWrapper>
  );
}
