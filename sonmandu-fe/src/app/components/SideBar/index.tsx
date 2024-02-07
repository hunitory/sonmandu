import React from 'react';
import * as S from './style';
import Image from 'next/image';

export default function SideBar() {
  return (
    <S.SideBarWrapper>
      <S.LikeWrapper>
        <Image src={'/image/gray-heart.svg'} alt='gray-heart' fill  />
      </S.LikeWrapper>

      <S.LinkWrapper>
        <Image src={'/image/Link.png'} alt='link' fill />
      </S.LinkWrapper>
    </S.SideBarWrapper>
  )
}