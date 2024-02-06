import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import { loginModalState } from 'store/atoms/_index';
import { useRecoilState } from 'recoil';
import { useLoginModal } from 'customhook';
import Link from 'next/link';

function LoginModal() {
  const LogoURL = '/image/logo.png';
  const [MemberID, setMemberID] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoginModalOpen] = useRecoilState<boolean>(loginModalState);
  const { closeModal } = useLoginModal();

  /* 로그인 확인 */
  const FailLogin = false;

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemberID(event.target.value);
  };

  const PasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const OnLogin = () => {
    /* 로그인 로직*/
    console.log('로그인 시도:', MemberID, Password);
  };

  return (
    <Comp.BaseModal size="small" onClose={closeModal}>
      <Styled.ModalWrapper>
        <Styled.WelcomeWrapper>
          <Styled.WelcomeTitle>환영합니다.</Styled.WelcomeTitle>
          <Styled.LogoWrapper>
            <Link href={'/'}>
              <Image src={LogoURL} alt="손만두" width={123} height={52} priority></Image>
            </Link>
          </Styled.LogoWrapper>
          <Styled.FailLogin $failLogin={FailLogin}>
            아이디 또는 비밀번호를<p>다시 확인하세요!</p>
          </Styled.FailLogin>
        </Styled.WelcomeWrapper>
        <Styled.ModalFormWrapper>
          <Styled.LoginWrapper>
            <Styled.LoginInputWrapper>
              <Styled.LoginInputPlaceholder $isempty={!MemberID}>
                <span>아이디</span>를 입력해주세요.
              </Styled.LoginInputPlaceholder>
              <Styled.LoginInput id="아이디" type="text" value={MemberID} onChange={NameInput} />
            </Styled.LoginInputWrapper>
          </Styled.LoginWrapper>
          <Styled.LoginWrapper>
            <Styled.LoginInputWrapper>
              <Styled.LoginInputPlaceholder $isempty={!Password}>
                <span>비밀번호</span>를 입력해주세요.
              </Styled.LoginInputPlaceholder>
              <Styled.LoginInput id="비밀번호" type="password" value={Password} onChange={PasswordInput} />
            </Styled.LoginInputWrapper>
          </Styled.LoginWrapper>
          <Styled.ButtonWrapper>
            <Styled.LoginButton onClick={OnLogin} type="button" disabled={false}>
              <Styled.LoginButtonText>로그인 하기</Styled.LoginButtonText>
            </Styled.LoginButton>
          </Styled.ButtonWrapper>
        </Styled.ModalFormWrapper>
        <Styled.findIDPassword>
          <span>아이디</span>또는<span>비밀번호 찾기</span>
        </Styled.findIDPassword>
      </Styled.ModalWrapper>
    </Comp.BaseModal>
  );
}

export default LoginModal;
