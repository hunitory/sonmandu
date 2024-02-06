import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { BaseLetterFieldProps } from 'types';

function BaseLetterField({ letterImgUrl }: BaseLetterFieldProps) {
  return (
    <S.LetterImageArea onClick={(e) => e.stopPropagation()}>
      <Image src={letterImgUrl} alt="편지지" fill={true} sizes="100" quality={50} />
      <S.TextField placeholder="글씨를 편지지에 써보세요!"></S.TextField>
    </S.LetterImageArea>
  );
}

export default BaseLetterField;
