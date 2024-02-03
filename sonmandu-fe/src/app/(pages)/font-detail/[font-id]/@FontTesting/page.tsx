'use client';

import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

function FontTesting() {
  const [selectedLetter, setSelectedLetter] = useState({
    letterSrc: '/image/letter-1.png',
    idx: 1,
  });

  const handleSelectedLetter = (latterNumber: number) => {
    setSelectedLetter((prev) => ({
      ...prev,
      letterSrc: `/image/letter-${latterNumber}.png`,
      idx: latterNumber,
    }));
  };

  return (
    <S.TestingWrapper>
      <S.TestingLetterArea>
        <Comp.BaseLetterField letterImgUrl={selectedLetter.letterSrc} />
      </S.TestingLetterArea>
      <S.SideBoxWrapper>
        <p>편지지 배경</p>
        <S.SideBoxContainer>
          {Array.from({ length: 4 }).map((_, i) => (
            <S.LatterContainerButton
              type="button"
              key={i}
              onClick={() => handleSelectedLetter(i + 1)}
              selected={i + 1 === selectedLetter.idx}
            >
              <Image
                src={`/image/letter-${i + 1}.png`}
                alt={`편지지-${i + 1}`}
                width={126}
                height={86}
              />
            </S.LatterContainerButton>
          ))}
        </S.SideBoxContainer>
        <S.CustomButton
          type="button"
          onClick={() => console.log(`편지 다운로드 :`)}
        >
          내가 쓴 편지지 다운 받기
        </S.CustomButton>
      </S.SideBoxWrapper>
    </S.TestingWrapper>
  );
}

export default FontTesting;
