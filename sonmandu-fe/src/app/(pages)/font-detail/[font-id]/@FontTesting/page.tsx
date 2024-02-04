'use client';

import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

function FontTesting() {
  const letterImageRef = useRef(null);
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

  const captureDownloadLetter = async () => {
    if (letterImageRef.current) {
      try {
        const canvas = await html2canvas(letterImageRef.current);
        canvas.toBlob(
          (blob) => blob !== null && saveAs(blob, `손만두 ${'폰트이름'}`),
        );
      } catch (err) {
        alert('이미지가 정상적으로 저장되지 않았습니다!');
      }
    }
  };

  return (
    <S.TestingWrapper>
      <S.TestingLetterArea ref={letterImageRef}>
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
        <S.CustomButton type="button" onClick={captureDownloadLetter}>
          내가 쓴 편지지 다운 받기
        </S.CustomButton>
      </S.SideBoxWrapper>
    </S.TestingWrapper>
  );
}

export default FontTesting;
