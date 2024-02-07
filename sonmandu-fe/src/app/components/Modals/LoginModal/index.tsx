import React, { useState } from 'react';
import * as S from './style';
import * as Comp from 'components';
import * as API from '@/apis';
import Image from 'next/image';
import useModal from 'customhook/useModal';
import { useMutation } from '@tanstack/react-query';

interface ValueBasket {
  id: string;
  password: string;
  [key: string]: string;
}

// qweqweqwe1
// 123123123

function LoginModal() {
  const loginModal = useModal('login');
  const [checkYourValues, setCheckYourValues] = useState(false);
  const [valuesBasket, setValuesBasket] = useState<ValueBasket>({
    id: '',
    password: '',
  });
  const { mutate } = useMutation({
    mutationKey: [],
    mutationFn: () => API.member.login({ ...valuesBasket }),
    onSuccess: (res) => {
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('refresh_token', res.data.refreshToken);
      loginModal.closeModal();
      setValuesBasket((prev) => ({ ...prev, id: '', password: '' }));
      setCheckYourValues(false);
    },
    onError: (err) => {
      setCheckYourValues(true);
    },
  });

  const requestLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const closeModal = () => {
    loginModal.closeModal();
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
        <Comp.BaseModal size="small" onClose={closeModal}>
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span className="welcome-title">환영합니다!</span>
              <Image src={'/image/logo.png'} alt="로고" width={142} height={62} />
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
                <span>아이디</span>또는<span>비밀번호 찾기</span>
              </S.FindInfomation>
            </S.FormWrapper>
          </S.ModalContainer>
        </Comp.BaseModal>
      )}
    </>
  );
}

export default LoginModal;
