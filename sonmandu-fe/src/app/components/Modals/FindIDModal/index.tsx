import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import { loginModalState } from 'store/atoms/_index';
import { useRecoilState } from 'recoil';
import { useLoginModal } from 'customhook';

function FindIdModal() {
  const LogoURL = '/image/logo.png';
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [isLoginModalOpen] = useRecoilState<boolean>(loginModalState);
  const { closeModal } = useLoginModal();

  /* 로그인 확인 */
  const FailLogin = false;

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const EmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const OnLogin = () => {
    /* 로그인 로직*/
    console.log('로그인 시도:', Name, Email);
  };

  return (
    <Comp.BaseModal size="small" onClose={closeModal}>
      <Styled.ModalWapper>
        <Styled.WelcomeWrapper>
          <Styled.WelcomeContent>아이디를 잊으셨나요?</Styled.WelcomeContent>
          <Styled.LogoWrapper>
            <Image src={LogoURL} alt="손만두" width={123} height={52} priority></Image>
          </Styled.LogoWrapper>
          <Styled.FailLogin $failLogin={FailLogin}>입력하신 정보가 일치하지 않습니다!</Styled.FailLogin>
        </Styled.WelcomeWrapper>
        <Styled.FindIDForm>
          <Styled.FindIDWrapper>
            <Styled.FindIDInputWrapper>
              <Styled.FindIDInputPlaceholder $isempty={!Name}>
                <span>이름</span>을 입력해주세요.
              </Styled.FindIDInputPlaceholder>
              <Styled.FindIDInput id="name" type="text" value={Name} onChange={NameInput} />
            </Styled.FindIDInputWrapper>
          </Styled.FindIDWrapper>

          <Styled.FindIDWrapper>
            <Styled.FindIDInputWrapper>
              <Styled.FindIDInputPlaceholder $isempty={!Email}>
                <span>이메일</span>을 입력해주세요.
              </Styled.FindIDInputPlaceholder>
              <Styled.FindIDInput id="email" type="text" value={Email} onChange={EmailInput} />
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

export default FindIdModal;
