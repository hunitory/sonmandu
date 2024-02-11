import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import * as API from '@/apis';
import { useGetDeviceSize } from 'customhook';
import Image from 'next/image';
import useModal from 'customhook/useModal';
import { useMutation } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

interface UnAuthorizationUser {
  isAuth: false;
  tokenPayload: null;
}

interface AuthorizationUser {
  isAuth: true;
  tokenPayload: { memberId: number; nickName: string; imageUrl: string | null };
}

export default function ProfileHamburger() {
  const loginModal = useModal('login');
  const signUpModal = useModal('signUp');
  const router = useRouter();

  const [authorizationUser, setAuthorizationUser] = useState<UnAuthorizationUser | AuthorizationUser>({
    isAuth: false,
    tokenPayload: null,
  });
  const [dropBoxView, setDropBoxView] = useState(false);
  const windowWidth = useGetDeviceSize();

  const { mutate: requestLogout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => API.member.logout(),
    onSuccess: (res) => {
      if (res.status === 204) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        location.reload();
      }
    },
  });

  useLayoutEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setAuthorizationUser((prev) => ({
        ...prev,
        isAuth: true,
        tokenPayload: jwtDecode(localStorage.getItem('access_token') as string),
      }));
    } else if (localStorage.getItem('access_token') === null) {
      setAuthorizationUser((prev) => ({ ...prev, isAuth: false, tokenPayload: null }));
    }
  }, []);

  const handleDropBoxView = () => {
    setDropBoxView((prev) => !prev);
  };

  const handleProfileImage = () => {
    const userImageRootUrl = 'https://sonmando.s3.ap-northeast-2.amazonaws.com/';

    if (authorizationUser.isAuth) {
      // if (authorizationUser.tokenPayload.imageUrl !== null) {
      //   const userImage = instanceJsonContent
      //     .get<Blob>(userImageRootUrl + authorizationUser.tokenPayload.imageUrl)
      //     .then((res) => {
      //       console.log(`res.data :`, res.data);
      //       return res;
      //     });
      // }
      return authorizationUser.tokenPayload.imageUrl && authorizationUser.tokenPayload.imageUrl !== null ? (
        <Image src={`/vercel.svg`} alt="로그인 하고 이미지 있는 유저" width={18} height={18} priority />
      ) : (
        <S.NullImgUser>{authorizationUser.tokenPayload.nickName.slice(0, 1)}</S.NullImgUser>
      );
    }
    return <Image src={'/image/unknown-user.svg'} alt="로그인 안한 유저" width={18} height={18} priority />;
  };

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      console.log(`jwtDecode() :`, jwtDecode(localStorage.getItem('access_token') || ''));
    }
  }, []);

  return (
    <S.HamburgerWrapper
      onClick={handleDropBoxView}
      onFocus={() => setDropBoxView((prev) => (prev = true))}
      onBlur={() => setDropBoxView((prev) => (prev = false))}
      disabled={false}
      type="button"
    >
      <Image src={'/image/hamburger.svg'} alt="드롭박스 열기" width={16} height={16} priority />
      <div className="user-img-wrapper">{handleProfileImage()}</div>
      {dropBoxView && (
        <S.DropBoxWrapper>
          {authorizationUser.isAuth ? (
            <>
              <S.DropBoxList onClick={() => router.push('/chatting')}>손글씨 채팅</S.DropBoxList>
              <S.DropBoxList onClick={() => router.push(`/profile/${authorizationUser.tokenPayload?.memberId}`)}>
                마이 프로필
              </S.DropBoxList>
              <S.DropBoxList onClick={() => requestLogout()}>로그아웃</S.DropBoxList>
            </>
          ) : (
            <>
              <S.DropBoxList onClick={() => signUpModal.openModal()}>회원가입</S.DropBoxList>
              <S.DropBoxList onClick={() => loginModal.openModal()}>로그인</S.DropBoxList>
            </>
          )}
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
