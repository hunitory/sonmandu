import React, { useState } from 'react';
import * as Styled from './style';
import Image from 'next/image';

function LoginForModal() {
  const LogoURL = '/image/logo.png';
  const [MemberID, setMemberID] = useState('');
  const [Password, setPassword] = useState('');

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemberID(event.target.value);
  };

  const PasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Styled.ModalWapper>
      <Styled.WelcomeWrapper>
        <Styled.WelcomeTitle>환영합니다.</Styled.WelcomeTitle>
        <Styled.LogoWrapper>
          <Image
            src={LogoURL}
            alt="손만두"
            width={123}
            height={52}
            priority
          ></Image>
        </Styled.LogoWrapper>
      </Styled.WelcomeWrapper>
      <Styled.ContentFontNameWrapper>
        <Styled.ContentFontNameInputWrapper>
          <Styled.ContentFontNameInputPlaceholder isEmpty={!MemberID}>
            <span>아이디</span>를 입력해주세요.
          </Styled.ContentFontNameInputPlaceholder>
          <Styled.ContentFontNameInput
            id="아이디"
            type="text"
            value={MemberID}
            onChange={NameInput}
          />
        </Styled.ContentFontNameInputWrapper>
      </Styled.ContentFontNameWrapper>
      <Styled.ContentFontNameWrapper>
        <Styled.ContentFontNameInputWrapper>
          <Styled.ContentFontNameInputPlaceholder isEmpty={!Password}>
            <span>비밀번호</span>를 입력해주세요.
          </Styled.ContentFontNameInputPlaceholder>
          <Styled.ContentFontNameInput
            id="비밀번호"
            type="password"
            value={Password}
            onChange={PasswordInput}
          />
        </Styled.ContentFontNameInputWrapper>
      </Styled.ContentFontNameWrapper>

      <button>로그인하기</button>
      <div>아이디 또는 비밀번호 찾기</div>
    </Styled.ModalWapper>
  );
}

export default LoginForModal;
