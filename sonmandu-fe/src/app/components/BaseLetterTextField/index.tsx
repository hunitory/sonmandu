import React from 'react';
import * as S from './styled';
import Image from 'next/image';

interface BaseLetterFieldProps {
  letterImgUrl: string;
}

function BaseLetterField({ letterImgUrl }: BaseLetterFieldProps) {
  return (
    <S.LetterImageArea>
      <Image
        src={letterImgUrl}
        alt="편지지"
        fill={true}
        sizes="100vw"
        quality={50}
      />
      <S.TextField placeholder="글씨를 편지지에 써보세요!"></S.TextField>
    </S.LetterImageArea>
  );
}

export default BaseLetterField;
