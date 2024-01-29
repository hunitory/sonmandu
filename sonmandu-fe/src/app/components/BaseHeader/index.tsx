import React from 'react';
import * as S from './style';
import * as Sub from './Subs';
import Link from 'next/link';

function BaseHeader() {
  return (
    <S.HeaderWrapper>
      <S.Logo />
      <S.UserInteractionWrapper>
        <S.LinkWrapper>
          <Link href={'/create-font'}>손글씨 만들기</Link>
          <Link href={'/font-gallery'}>손글씨 전시관</Link>
          <Link href={'/font-stories'}>손글씨 이야기</Link>
        </S.LinkWrapper>
        <Sub.ProfileHamburger />
      </S.UserInteractionWrapper>
    </S.HeaderWrapper>
  );
}

export default BaseHeader;
