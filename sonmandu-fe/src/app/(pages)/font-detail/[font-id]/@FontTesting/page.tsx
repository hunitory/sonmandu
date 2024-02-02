'use client';

import React, { useState } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

function FontTesting() {
  const [selectedLetter, setSelectedLetter] = useState(1);

  const handleSelectedLetter = (latterNumber: number) => {
    setSelectedLetter(latterNumber);
  };

  return (
    <S.TestingWrapper>
      <S.TestingLetterArea>
        <Comp.BaseLetterField letterImgUrl="/image/letter-1.png" />
      </S.TestingLetterArea>
      <S.SideBoxWrapper>
        <p>편지지 배경</p>
        <S.SideBoxContainer selectedIdx={selectedLetter}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Comp.BaseButton
              disabled={false}
              type="button"
              key={i}
              onClick={handleSelectedLetter}
            >
              <Image
                src={`/image/letter-${i + 1}.png`}
                alt={`편지지-${i + 1}`}
                width={126}
                height={86}
              />
            </Comp.BaseButton>
          ))}
        </S.SideBoxContainer>
        <S.CustomButton type="button" disabled={false}>
          내가 쓴 편지지 다운 받기
        </S.CustomButton>
      </S.SideBoxWrapper>
    </S.TestingWrapper>
  );
}

export default FontTesting;
