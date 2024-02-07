import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';

function FindPasswordModal() {
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const closeModal = () => {};

  /* 로그인 확인 */
  const failLogin = false;

  const handleIdValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(event.target.value);
  };
  const handleNameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const OnLogin = () => {
    /* 로그인 로직*/
    console.log('로그인 시도:', nameValue, emailValue);
  };

  return (
    <Comp.BaseModal size="small" onClose={closeModal}>
      <Styled.ModalWapper>
        <Styled.WelcomeWrapper>
          <Styled.WelcomeContent>비밀번호를 잊으셨나요?</Styled.WelcomeContent>
          <Styled.LogoWrapper>
            <Image src={'/image/logo.png'} alt="손만두" width={123} height={52} priority></Image>
          </Styled.LogoWrapper>
          <Styled.FailLogin $failLogin={failLogin}>입력하신 정보가 일치하지 않습니다!</Styled.FailLogin>
        </Styled.WelcomeWrapper>
        <Styled.FindIDForm>
          <Styled.FindIDWrapper>
            <Styled.FindIDInputWrapper>
              <Styled.FindIDInputPlaceholder $isempty={!idValue}>
                <span>아이디</span>를 입력해주세요.
              </Styled.FindIDInputPlaceholder>
              <Styled.FindIDInput id="id" type="text" value={idValue} onChange={handleIdValueChange} />
            </Styled.FindIDInputWrapper>
          </Styled.FindIDWrapper>
          <Styled.FindIDWrapper>
            <Styled.FindIDInputWrapper>
              <Styled.FindIDInputPlaceholder $isempty={!nameValue}>
                <span>이름</span>을 입력해주세요.
              </Styled.FindIDInputPlaceholder>
              <Styled.FindIDInput id="name" type="text" value={nameValue} onChange={handleNameValueChange} />
            </Styled.FindIDInputWrapper>
          </Styled.FindIDWrapper>

          <Styled.FindIDWrapper>
            <Styled.FindIDInputWrapper>
              <Styled.FindIDInputPlaceholder $isempty={!emailValue}>
                <span>이메일</span>을 입력해주세요.
              </Styled.FindIDInputPlaceholder>
              <Styled.FindIDInput id="email" type="text" value={emailValue} onChange={handleEmailValueChange} />
            </Styled.FindIDInputWrapper>
          </Styled.FindIDWrapper>

          <Styled.ButtonWrapper>
            <Styled.FindIDButton onClick={OnLogin} type="button" disabled={false}>
              <Styled.FindIDButtonText>이메일로 아이디 받기</Styled.FindIDButtonText>
            </Styled.FindIDButton>
          </Styled.ButtonWrapper>
        </Styled.FindIDForm>
      </Styled.ModalWapper>
    </Comp.BaseModal>
  );
}

export default FindPasswordModal;
