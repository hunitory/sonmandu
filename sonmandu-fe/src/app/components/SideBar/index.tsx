import React from 'react';
import * as S from './style';
import Image from 'next/image';

export default function SideBar() {
  return (
    <S.SideBarWrapper>
      <S.LikeWrapper>
        <Image src={'/image/gray-heart.svg'} alt="gray-heart" width={26} height={24} />
      </S.LikeWrapper>
      <span>7</span>
      <S.LinkWrapper>
        <Image src={'/image/Link.png'} alt="link" width={24} height={24} />
      </S.LinkWrapper>
    </S.SideBarWrapper>
  );
}
