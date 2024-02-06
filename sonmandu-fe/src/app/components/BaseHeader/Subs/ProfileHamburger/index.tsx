import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import { useGetDeviceSize } from 'customhook';

import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'store/atoms';

export default function ProfileHamburger() {
  const setLoginModalView = useSetRecoilState(modalState('login'));
  const setJoinModalView = useSetRecoilState(modalState('join'));

  const [dropBoxView, setDropBoxView] = useState(false);
  const windowWidth = useGetDeviceSize();

  const handleDropBoxView = () => {
    setDropBoxView((prev) => !prev);
  };

  const handleLoginModalView = () => {
    setLoginModalView((prev) => ({ ...prev, login: !prev.login }));
  };

  const handleJoinModalView = () => {
    setJoinModalView((prev) => ({ ...prev, join: !prev.join }));
  };

  return (
    <S.HamburgerWrapper onFocus={handleDropBoxView} onBlur={handleDropBoxView} disabled={false} type="button">
      <Image src={'/image/hamburger.svg'} alt="드롭박스 열기" width={16} height={16} priority />
      <div className="user-img-wrapper">
        <Image src={'/image/unknown-user.svg'} alt="로그인 안한 유저" width={18} height={18} priority />
      </div>
      {dropBoxView && (
        <S.DropBoxWrapper>
          <S.DropBoxList onClick={handleJoinModalView}>회원가입</S.DropBoxList>
          <S.DropBoxList onClick={handleLoginModalView}>로그인</S.DropBoxList>
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
