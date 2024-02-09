import React, { FormEvent, useCallback, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from 'components';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SignUpValueBasket } from 'types';
import { useDebouncing } from 'customhook';

function SignUpModal() {
  const signUpModal = useModal('signUp');
  const [emailTokenId, setEmailTokenId] = useState('');
  const [checkUniqueValues, setCheckUniqueValues] = useState({ id: false, nickname: false, authCode: false });
  const [buttonsAble, setButtonAble] = useState({ sendEmailAndCodeCheck: false, submit: false });
  const [valuesBasket, setValuesBasket] = useState<SignUpValueBasket>({
    name: '',
    id: '',
    password: '',
    nickname: '',
    email: '',
    sendedCode: '',
  });

  const { data: resCheckId, refetch: requestCheckId } = useQuery({
    queryKey: ['check-id-unique', valuesBasket.id],
    queryFn: () => API.member.checkIdUnique({ id: valuesBasket.id }).then((res) => res.data),
    enabled: valuesBasket.id ? true : false,
  });
  console.log(`아이디 중복 체크 :`, resCheckId);

  const { data: resCheckNickname, refetch: requestCheckNickname } = useQuery({
    queryKey: ['check-nickname-unique', valuesBasket.nickname],
    queryFn: () => API.member.checkNicknameUnique({ nickname: valuesBasket.nickname }).then((res) => res.data),
    enabled: valuesBasket.nickname ? true : false,
  });
  console.log(`닉네임 중복 체크 :`, resCheckNickname);

  const { data: resCheckAuthCode, refetch: requestCheckAuthCode } = useQuery({
    queryKey: ['check-auth-code', valuesBasket.sendedCode],
    queryFn: () =>
      API.member.checkCode({ emailTokenId: emailTokenId, codeValue: valuesBasket.sendedCode }).then((res) => res.data),
    enabled: valuesBasket.sendedCode ? true : false,
  });
  console.log(`코드 중복 체크 :`, resCheckAuthCode);

  const { mutate: requestSendCode } = useMutation({
    mutationKey: ['send-emil-with-code'],
    mutationFn: () => API.member.sendCodeUsingEmail({ email: valuesBasket.email }),
    onSuccess: (res) => {
      setEmailTokenId(emailTokenId);
      console.log(`이메일 전송 완료, 해당 토큰 아이디는 :`, emailTokenId);
    },
  });

  const { mutate: requestSignUp } = useMutation({
    mutationKey: ['request-sign-up'],
    mutationFn: () => API.member.signUp({ ...valuesBasket }),
    onSuccess: (res) => {
      console.log(`회원가입 요청 :`, res.data);
    },
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

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignUp();
  };

  // requestSignUp -> onSuccess -> requestLogin()
  const isUniqueId = useDebouncing({
    value: valuesBasket.id,
    callback: () => setCheckUniqueValues((prev) => ({ ...prev, id: resCheckId?.isPossible })),
    delay: 1000,
  });

  const subContent: { [key: string]: React.ReactNode } = {
    name: null,
    id: <S.CheckValueFailed>{checkUniqueValues.id && '사용 가능한 아이디입니다.'}</S.CheckValueFailed>,
    password: null,
    nickname: <S.CheckValueFailed>{resCheckNickname?.isPossible && '사용 가능한 닉네임입니다.'}</S.CheckValueFailed>,
    email: (
      <S.CustomButton disabled={!buttonsAble.sendEmailAndCodeCheck} type="button" onClick={requestSendCode}>
        이메일 인증하기
      </S.CustomButton>
    ),
    sendCode: (
      <S.CheckValueFailed>{checkUniqueValues.authCode ? '인증되었습니다!' : '다시 확인해주세요.'}</S.CheckValueFailed>
    ),
  };

  const INPUT_PROPS = [
    { id: 'name', type: 'text', placeholder: '이름을 입력해주세요' },
    { id: 'id', type: 'text', placeholder: '아이디를 입력해주세요' },
    { id: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요' },
    { id: 'nickname', type: 'text', placeholder: '닉네임를 입력해주세요' },
    { id: 'email', type: 'email', placeholder: '이메일를 입력해주세요' },
  ];

  // signUpModal.modal.isOpen
  return (
    <>
      {signUpModal.modal.isOpen && (
        <Comp.BaseModal size="large" onClose={closeModal}>
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span>환영합니다!</span>
              <Image src={'/image/logo.png'} alt="로고" width={142} height={62} />
              <span>손글씨로 폰트를 만들어 드립니다!</span>
              <span>회원가입을 한 후 여러 사람들의 폰트와 이야기를 즐겨보세요!</span>
            </S.WelcomeWrapper>
            <S.HrLine />
            <S.FormWrapper onSubmit={handleOnSubmit}>
              <S.InputsWrapper $emailSended={buttonsAble.sendEmailAndCodeCheck}>
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
