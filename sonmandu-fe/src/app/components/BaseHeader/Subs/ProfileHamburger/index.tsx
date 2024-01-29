import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import { useGetDeviceSize } from 'customhook';

export default function ProfileHamburger() {
  const [dropBoxView, setDropBoxView] = useState(false);
  const windowWidth = useGetDeviceSize();

  const handleDropBoxView = () => {
    setDropBoxView((prev) => !prev);
  };

  return (
    <S.HamburgerWrapper onClick={handleDropBoxView}>
      <div></div>
      <div></div>
      {dropBoxView && (
        <S.DropBoxWrapper>
          <S.DropBoxList>회원가입</S.DropBoxList>
          <S.DropBoxList>로그인</S.DropBoxList>
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
