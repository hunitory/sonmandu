import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import { loginModalState } from 'store/atoms/_index';
import { useRecoilState } from 'recoil';
import { useLoginModal } from 'customhook';

function SignUpModal() {
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
    <Comp.BaseModal size="large" onClose={closeModal}>
      <Styled.ModalWapper>
        <Styled.WelcomeWrapper>
          <Styled.WelcomeTitle>환영합니다.</Styled.WelcomeTitle>
          <Styled.LogoWrapper>
            <Image src={LogoURL} alt="손만두" width={123} height={52} priority></Image>
          </Styled.LogoWrapper>
          <Styled.WelcomeContent>손글씨를 폰트로 만들어 드립니다!</Styled.WelcomeContent>
          <Styled.WelcomeContent>
            회원가입을 한 후 여러 사람들의 <p></p>손글씨와 이야기를 즐겨보세요!
          </Styled.WelcomeContent>
        </Styled.WelcomeWrapper>
        {/* --------구분선-------- */}
        <Styled.SignUpLine />
        {/* --------구분선-------- */}
        <Styled.SignUpForm>
          <Styled.SignWrapper>
            <Styled.SignUpInputWrapper>
              <Styled.SignUpInputPlaceholder $isempty={!Password}>
                <span>이름</span>을 입력해주세요.
              </Styled.SignUpInputPlaceholder>
              <Styled.SignUpInput id="name" type="text" value={Password} onChange={PasswordInput} />
            </Styled.SignUpInputWrapper>

            <Styled.SignUpInputWrapper>
              <Styled.SignUpInputPlaceholder $isempty={!MemberID}>
                <span>아이디</span>를 입력해주세요.
              </Styled.SignUpInputPlaceholder>
              <Styled.SignUpInput id="id" type="text" value={MemberID} onChange={NameInput} />
            </Styled.SignUpInputWrapper>

            <Styled.SignUpInputWrapper>
              <Styled.SignUpInputPlaceholder $isempty={!Password}>
                <span>비밀번호</span>를 입력해주세요.
              </Styled.SignUpInputPlaceholder>
              <Styled.SignUpInput id="password" type="password" value={Password} onChange={PasswordInput} />
            </Styled.SignUpInputWrapper>

            <Styled.SignUpInputWrapper>
              <Styled.InputWithButtonWrapper>
                <Styled.SignUpInputPlaceholder $isempty={!Password}>
                  <span>닉네임</span>을 입력해주세요.
                </Styled.SignUpInputPlaceholder>
                <Styled.SignUpInput id="nickname" type="text" value={Password} onChange={PasswordInput} />
                <Styled.ButtonWrapper>
                  <Styled.DuplicationButton onClick={OnLogin} type="button" disabled={false}>
                    <Styled.DuplicationButtonText>중복 체크</Styled.DuplicationButtonText>
                  </Styled.DuplicationButton>
                </Styled.ButtonWrapper>
              </Styled.InputWithButtonWrapper>
            </Styled.SignUpInputWrapper>

            <Styled.SignUpInputWrapper>
              <Styled.InputWithButtonWrapper>
                <Styled.SignUpInputPlaceholder $isempty={!Password}>
                  <span>이메일</span>을 입력해주세요.
                </Styled.SignUpInputPlaceholder>
                <Styled.SignUpInput id="email" type="text" value={Password} onChange={PasswordInput} />
                <Styled.ButtonWrapper>
                  <Styled.DuplicationButton onClick={OnLogin} type="button" disabled={false}>
                    <Styled.DuplicationButtonText>인증하기</Styled.DuplicationButtonText>
                  </Styled.DuplicationButton>
                </Styled.ButtonWrapper>
              </Styled.InputWithButtonWrapper>
            </Styled.SignUpInputWrapper>
            {/* 6자리 주는 거면 6자리 채웠을때 자동 확인 할 수 있게 해도 될듯? */}
            {/* <Styled.SignUpInputWrapper>
              <Styled.InputWithButtonWrapper>
                <Styled.SignUpInputPlaceholder $isempty={!Password}>
                  <span>전송 받은 코드</span>를 입력해주세요.
                </Styled.SignUpInputPlaceholder>
                <Styled.SignUpInput id="email-code" type="text" value={Password} onChange={PasswordInput} />
                <Styled.ButtonWrapper>
                  <Styled.DuplicationButton onClick={OnLogin} type="button" disabled={false}>
                    <Styled.DuplicationButtonText>확인하기</Styled.DuplicationButtonText>
                  </Styled.DuplicationButton>
                </Styled.ButtonWrapper>
              </Styled.InputWithButtonWrapper>
            </Styled.SignUpInputWrapper> */}
          </Styled.SignWrapper>
          <Styled.ButtonWrapper>
            <Styled.SignUpButton onClick={OnLogin} type="button" disabled={false}>
              <Styled.SignUpButtonText>회원가입하기</Styled.SignUpButtonText>
            </Styled.SignUpButton>
          </Styled.ButtonWrapper>
        </Styled.SignUpForm>

      </Styled.ModalWapper>
    </Comp.BaseModal>
  );
}

export default SignUpModal;
