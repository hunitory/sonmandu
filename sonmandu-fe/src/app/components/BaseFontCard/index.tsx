import React from 'react';
import * as S from './style';
import Image from 'next/image';

function BaseFontCard() {
  return (
    <S.FontCardWrapper>
      <S.FontCardContainer>
        <S.LatterImageArea>
          <Image src={'/image/letter-1.png'} alt="편지지" fill />
        </S.LatterImageArea>
      </S.FontCardContainer>
    </S.FontCardWrapper>
  );
}

export default BaseFontCard;
