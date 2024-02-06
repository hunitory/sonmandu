import React from 'react';
import * as S from './style';
import * as Sub from './Subs';
import Link from 'next/link';

function BaseHeader() {
  return (
    <S.HeaderWrapper>
      <S.LogoImage src={'/image/logo.png'} alt="손만두 로고" width={88.32} height={38} priority />
      <S.UserInteractionWrapper>
        <S.LinkWrapper>
          <Link href={'/create-font'}>손글씨 만들기</Link>
          <Link href={'/font-gallery'}>전시관</Link>
          <Link href={'/font-stories'}>이야기</Link>
        </S.LinkWrapper>
        <Sub.ProfileHamburger />
      </S.UserInteractionWrapper>
    </S.HeaderWrapper>
  );
}

export default BaseHeader;
