import React, { FormEvent, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from 'components';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { SignUpValueBasket } from 'types';
import { useDebouncing } from 'customhook';

function SignUpModal() {
  const signUpModal = useModal('signUp');
  const loginModal = useModal('login');
  const [emailTokenId, setEmailTokenId] = useState('');
  const [checkUniqueValues, setCheckUniqueValues] = useState({ id: null, nickname: null, authCode: null });
  const [curSignUpFlow, setCurSignUpFlow] = useState({ sendEmailAndCodeCheck: false, submit: false });
  const [valuesBasket, setValuesBasket] = useState<SignUpValueBasket>({
    name: '',
    id: '',
    password: '',
    nickname: '',
    email: '',
    sendedCode: '',
  });

  useDebouncing({
    value: valuesBasket.id,
    callback: () =>
      valuesBasket.id &&
      API.member.checkIdUnique({ id: valuesBasket.id }).then((res) => {
        setCheckUniqueValues((prev) => ({ ...prev, id: res.data.isPossible }));
        return res.data;
      }),
    delay: 400,
  });

  useDebouncing({
    value: valuesBasket.nickname,
    callback: () =>
      valuesBasket.nickname &&
      API.member.checkNicknameUnique({ nickname: valuesBasket.nickname }).then((res) => {
        setCheckUniqueValues((prev) => ({ ...prev, nickname: res.data.isPossible }));
        return res.data;
      }),
    delay: 400,
  });

  useDebouncing({
    value: valuesBasket.sendedCode,
    callback: () =>
      valuesBasket.sendedCode &&
      API.member.checkCode({ emailTokenId: emailTokenId, codeValue: valuesBasket.sendedCode }).then((res) => {
        setCheckUniqueValues((prev) => ({ ...prev, authCode: res.data }));
        return res.data;
      }),
    delay: 400,
  });

  const { mutate: requestSendCode, isPending } = useMutation({
    mutationKey: ['send-emil-with-code'],
    mutationFn: () => API.member.sendCodeUsingEmail({ email: valuesBasket.email }),
    onSuccess: (res) => {
      setEmailTokenId(res.data.emailTokenId);
      setCurSignUpFlow((prev) => ({ ...prev, sendEmailAndCodeCheck: true }));
    },
  });

  const { mutate: requestSignUp } = useMutation({
    mutationKey: ['request-sign-up'],
    mutationFn: () =>
      API.member.signUp({
        name: valuesBasket.name,
        id: valuesBasket.id,
        password: valuesBasket.password,
        nickname: valuesBasket.nickname,
        email: valuesBasket.email,
      }),
    onSuccess: async (res) => {
      console.log(`회원가입 요청 :`, res);
      if (res.status === 200) {
        signUpModal.closeModal();
        loginModal.openModal();
        await API.member.login({ id: valuesBasket.id, password: valuesBasket.password }).then((res) => {
          localStorage.setItem('access_token', res.data.token);
          localStorage.setItem('refresh_token', res.data.refreshToken);
          loginModal.closeModal();
          location.reload();
        });
      }
    },
  });

  const handleValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesBasket((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignUp();
  };

<<<<<<< HEAD
  const showTextContent = ({
    toggledValue,
    textContents,
  }: {
    toggledValue: boolean | null;
    textContents: { good: string; bad: string };
  }) => {
    if (toggledValue === null) return;
    return toggledValue ? textContents.good : textContents.bad;
  };
=======
  // requestSignUp -> onSuccess -> requestLogin()
  const isUniqueId = useDebouncing({
    value: valuesBasket.id,
    callback: () => setCheckUniqueValues((prev) => ({ ...prev, id: resCheckId?.isPossible })),
    delay: 1000,
  });
>>>>>>> cda93113bb6483f293d76f3f0e1b434e5b657bbb

  const subContent: { [key: string]: React.ReactNode } = {
    name: null,
    id: (
      <S.CheckValueFailed $isGood={checkUniqueValues.id}>
        {showTextContent({
          toggledValue: checkUniqueValues.id,
          textContents: { good: '사용 가능한 아이디입니다.', bad: '이미 사용중입니다!' },
        })}
      </S.CheckValueFailed>
    ),
    password: null,
    nickname: (
      <S.CheckValueFailed $isGood={checkUniqueValues.nickname}>
        {showTextContent({
          toggledValue: checkUniqueValues.nickname,
          textContents: { good: '사용 가능한 닉네임입니다.', bad: '이미 사용중입니다!' },
        })}
      </S.CheckValueFailed>
    ),
    email: (
      <S.CustomButton disabled={!valuesBasket.email} type="button" onClick={requestSendCode}>
        {isPending ? '전송중...' : '이메일 인증하기'}
      </S.CustomButton>
    ),
    sendCode: (
      <S.CheckValueFailed $isGood={checkUniqueValues.authCode}>
        {showTextContent({
          toggledValue: checkUniqueValues.authCode,
          textContents: { good: '인증되었습니다!', bad: '다시 확인해주세요' },
        })}
      </S.CheckValueFailed>
    ),
  };

  const INPUT_PROPS = [
    { id: 'name', type: 'text', placeholder: '이름을 입력해주세요' },
    { id: 'id', type: 'text', placeholder: '아이디를 입력해주세요' },
    { id: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요' },
    { id: 'nickname', type: 'text', placeholder: '닉네임를 입력해주세요' },
    { id: 'email', type: 'email', placeholder: '이메일를 입력해주세요' },
  ];

  return (
    <>
      {signUpModal.modal.isOpen && (
<<<<<<< HEAD
        <Comp.BaseModal size="large" onClose={() => signUpModal.closeModal()}>
=======
        <Comp.BaseModal size="large" onClose={closeModal}>
>>>>>>> cda93113bb6483f293d76f3f0e1b434e5b657bbb
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span>환영합니다!</span>
              <Image src={'/image/logo.png'} alt="로고" width={142} height={62} />
              <span>손글씨로 폰트를 만들어 드립니다!</span>
              <span>회원가입을 한 후 여러 사람들의 폰트와 이야기를 즐겨보세요!</span>
            </S.WelcomeWrapper>
            <S.HrLine />
            <S.FormWrapper onSubmit={handleOnSubmit}>
              <S.InputsWrapper $emailSended={curSignUpFlow.sendEmailAndCodeCheck}>
                {INPUT_PROPS.map((props) => {
                  return (
                    <Comp.UserModalInput
                      id={props.id}
                      type={props.type}
                      value={valuesBasket[props.id]}
                      onChange={handleValuesChange}
                      key={props.id}
                      withSubContent={subContent[props.id]}
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
