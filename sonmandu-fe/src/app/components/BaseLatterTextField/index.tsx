import React from 'react';
import * as S from './styled';
import Image from 'next/image';

interface BaseLatterFieldProps {
  latterImgUrl: string;
}

function BaseLatterField({ latterImgUrl }: BaseLatterFieldProps) {
  return (
    <S.LatterImageArea>
      <Image src={latterImgUrl} alt="편지지" fill />
      <S.TextField placeholder="글씨를 편지지에 써보세요!"></S.TextField>
    </S.LatterImageArea>
  );
}

export default BaseLatterField;
