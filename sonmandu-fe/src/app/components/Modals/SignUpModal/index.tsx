import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from 'components';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

interface ValueBasket {
  id: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  [key: string]: string;
}

function SignUpModal() {
  const signUpModal = useModal('signUp');
  const [buttonsDisable, setButtonDisable] = useState({ sendEmailAndCodeCheck: true, submit: true });
  const [valuesBasket, setValuesBasket] = useState<ValueBasket>({
    name: '',
    id: '',
    password: '',
    nickname: '',
    email: '',
    sendedCode: '',
  });

  const handleValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesBasket((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    signUpModal.closeModal();
  };

  const handleSubmitButtonAble = () => {
    // valueBasket.emil이 있다면,
    // 만약 이메일 인증을 완료했다면 && 내부의 value들이 다 들어있다면,
  };

  // requestSignUp -> onSuccess -> requestLogin()
  const { mutate: requestSignUp } = useMutation({
    mutationKey: [],
    mutationFn: () => API.member.signUp({ ...valuesBasket }),
    onSuccess: () => {},
  });

  const subContent = {
    email: (
      <S.CustomButton disabled={buttonsDisable.sendEmailAndCodeCheck} type="button">
        이메일 인증하기
      </S.CustomButton>
    ),
    sendCode: (
      <S.CustomButton disabled={buttonsDisable.sendEmailAndCodeCheck} type="button">
        인증하기
      </S.CustomButton>
    ),
  };

  const INPUT_PROPS = [
    { id: 'name', type: 'text', placeholder: '이름을 입력해주세요', subContent: null },
    { id: 'id', type: 'text', placeholder: '아이디를 입력해주세요', subContent: null },
    { id: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요', subContent: null },
    { id: 'nickname', type: 'text', placeholder: '닉네임를 입력해주세요', subContent: null },
    { id: 'email', type: 'email', placeholder: '이메일를 입력해주세요', subContent: subContent.email },
  ];

  // signUpModal.modal.isOpen
  return (
    <>
      {false && (
        <Comp.BaseModal size="large" onClose={closeModal}>
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span>환영합니다!</span>
              <Image src={'/image/logo.png'} alt="로고" width={142} height={62} />
              <span>손글씨로 폰트를 만들어 드립니다!</span>
              <span>회원가입을 한 후 여러 사람들의 폰트와 이야기를 즐겨보세요!</span>
            </S.WelcomeWrapper>
            <S.HrLine />
            <S.FormWrapper>
              <S.InputsWrapper $sendCodeHidden={buttonsDisable.sendEmailAndCodeCheck}>
                {INPUT_PROPS.map((props) => {
                  return (
                    <Comp.UserModalInput
                      id={props.id}
                      type={props.type}
                      value={valuesBasket[props.id]}
                      onChange={handleValuesChange}
                      key={props.id}
                      withSubContent={props.subContent}
                    >
                      {props.placeholder}
                    </Comp.UserModalInput>
                  );
                })}
                <Comp.UserModalInput
                  id={'sendedCode'}
                  type={'text'}
                  value={valuesBasket.sendedCode}
                  onChange={handleValuesChange}
                  key={'sendedCode'}
                  withSubContent={subContent.sendCode}
                >
                  전송 받은 코드를 입력해주세요
                </Comp.UserModalInput>
              </S.InputsWrapper>
              <S.SubmitButton disabled={false} type="submit">
                <span>회원가입하기</span>
              </S.SubmitButton>
            </S.FormWrapper>
          </S.ModalContainer>
        </Comp.BaseModal>
      )}
    </>
  );
}

export default SignUpModal;
