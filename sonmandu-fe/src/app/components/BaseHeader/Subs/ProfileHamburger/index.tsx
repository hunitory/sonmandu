import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import { useGetDeviceSize } from 'customhook';

import Image from 'next/image';

export default function ProfileHamburger() {
  const [dropBoxView, setDropBoxView] = useState(false);
  const windowWidth = useGetDeviceSize();
  const handleDropBoxView = () => {
    setDropBoxView((prev) => !prev);
  };

  return (
    <S.HamburgerWrapper onFocus={handleDropBoxView} onBlur={handleDropBoxView} disabled={false} type="button">
      <Image src={'/image/hamburger.svg'} alt="드롭박스 열기" width={16} height={16} priority />
      <div className="user-img-wrapper">
        <Image src={'/image/unknown-user.svg'} alt="로그인 안한 유저" width={18} height={18} priority />
      </div>
      {dropBoxView && (
        <S.DropBoxWrapper>
          <S.DropBoxList>회원가입</S.DropBoxList>
          <Link href={'/login'}>
            <S.DropBoxList>로그인</S.DropBoxList>
          </Link>
          {/* ------------------------------ */}
          <S.DropBoxList>손글씨 채팅</S.DropBoxList>
          <S.DropBoxList>마이 프로필</S.DropBoxList>
          <S.DropBoxList>로그아웃</S.DropBoxList>
          {windowWidth !== null && windowWidth <= 768 && (
            <>
              <Link href={'/create-font'}>
                <S.DropBoxList>손글씨 만들기</S.DropBoxList>
              </Link>
              <Link href={'/font-gallery'}>
                <S.DropBoxList>손글씨 전시관</S.DropBoxList>
              </Link>
              <Link href={'/font-stories'}>
                <S.DropBoxList>손글씨 이야기</S.DropBoxList>
              </Link>
            </>
          )}
        </S.DropBoxWrapper>
      )}
    </S.HamburgerWrapper>
  );
}
