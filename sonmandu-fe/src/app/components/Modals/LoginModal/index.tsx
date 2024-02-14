import React, { useState } from 'react';
import * as S from './style';
import * as Comp from 'components';
import * as API from '@/apis';
import Image from 'next/image';
import useModal from 'customhook/useModal';
import { useMutation } from '@tanstack/react-query';
import { LoginValueBasket } from 'types';

function LoginModal() {
  const loginModal = useModal('login');
  const findInfoModal = useModal('findInfo');
  const [checkYourValues, setCheckYourValues] = useState(false);
  const [valuesBasket, setValuesBasket] = useState<LoginValueBasket>({
    id: '',
    password: '',
  });
  const { mutate } = useMutation({
    mutationKey: ['request-login'],
    mutationFn: () => API.member.login({ ...valuesBasket }),
    onSuccess: (res) => {
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('refresh_token', res.data.refreshToken);
      loginModal.closeModal();
      setValuesBasket((prev) => ({ ...prev, id: '', password: '' }));
      setCheckYourValues(false);
      location.reload();
    },
    onError: (err) => {
      setCheckYourValues(true);
    },
  });

  const requestLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const closeLoginModal = () => {
    loginModal.closeModal();
  };

  const openFindInfoModal = () => {
    loginModal.closeModal();
    findInfoModal.openModal();
  };

  const INPUT_PROPS = [
    { id: 'id', type: 'text', placeholder: '아이디를 입력해주세요', subContent: null },
    { id: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요', subContent: null },
  ];

  const handleValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesBasket((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      {loginModal.modal.isOpen && (
        <Comp.BaseModal size="small" onClose={closeLoginModal}>
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span className="welcome-title">환영합니다!</span>
              <Comp.CustomImage src={'/image/logo.png'} alt="로고" width={142} height={62} />
              <span>{checkYourValues && '아이디 또는 비밀번호를 다시 확인하세요!'}</span>
            </S.WelcomeWrapper>
            <S.FormWrapper onSubmit={requestLogin}>
              {INPUT_PROPS.map((props) => {
                return (
                  <Comp.UserModalInput
                    id={props.id}
                    type={props.type}
                    value={valuesBasket[props.id]}
                    onChange={handleValuesChange}
                    key={props.id}
                  >
                    {props.placeholder}
                  </Comp.UserModalInput>
                );
              })}
              <S.SubmitButton disabled={false} type="submit">
                <span>로그인하기</span>
              </S.SubmitButton>
              <S.FindInfomation>
                <span onClick={openFindInfoModal}>
                  <span>아이디</span>또는<span>비밀번호 찾기</span>
                </span>
              </S.FindInfomation>
            </S.FormWrapper>
          </S.ModalContainer>
        </Comp.BaseModal>
      )}
    </>
  );
}

export default LoginModal;
