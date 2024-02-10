import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from 'components';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { IdValueBasket, PasswordValueBasket } from 'types';

export default function FindInfoModal() {
  const findInfoModal = useModal('findInfo');
  const [checkYourValues, setCheckYourValues] = useState(false);
  const [curContentIndex, setCurContentIndex] = useState(0);
  const [passwordValueBasket, setPasswordValueBasket] = useState<PasswordValueBasket>({ id: '', name: '', email: '' });
  const [idValueBasket, setIdValueBasket] = useState<IdValueBasket>({ name: '', email: '' });

  const { mutate: requestFindPassword } = useMutation({
    mutationKey: ['request-find-password'],
    mutationFn: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return API.member.findUserPassword({ ...passwordValueBasket });
    },
    onSuccess: (res) => {
      console.log(`FIND PASSWORD RESPONSE :`, res.data);
      alert('이메일로 임시 비밀번호가 전송되었습니다!');
      setPasswordValueBasket((prev) => ({ ...prev, id: '', name: '', email: '' }));
      findInfoModal.closeModal();
    },
    onError: (err) => {
      setCheckYourValues(true);
    },
  });

  const { mutate: requestFindId } = useMutation({
    mutationKey: ['request-find-id'],
    mutationFn: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return API.member.findUserId({ ...idValueBasket });
    },
    onSuccess: (res) => {
      console.log(`FIND ID RESPONSE :`, res.data);
      alert('이메일로 아이디가 전송되었습니다!');
      setIdValueBasket((prev) => ({ ...prev, id: '', password: '' }));
      findInfoModal.closeModal();
    },
    onError: (err) => {
      setCheckYourValues(true);
    },
  });

  const closeFindInfoModal = () => {
    findInfoModal.closeModal();
  };
  const carouselRightButtonClick = () => {
    setCurContentIndex((prev) => prev - 1);
  };
  const carouselLeftButtonClick = () => {
    setCurContentIndex((prev) => prev + 1);
  };

  const handlePasswordValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValueBasket((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleIdValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValueBasket((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      {findInfoModal.modal.isOpen && (
        <Comp.BaseModal onClose={closeFindInfoModal} size="small">
          <S.ModalContainer>
            <S.WelcomeWrapper>
              <span className="welcome-title">어떤 정보를 찾으시나요?</span>
              <Image src={'/image/logo.png'} alt="로고" width={142} height={62} />
              <span className="welcome-title">{checkYourValues && `입력하신 정보를 다시 확인해주세요!`}</span>
            </S.WelcomeWrapper>
            <S.CarouselWrapper>
              <S.CarouselContainer $curIdx={curContentIndex}>
                <S.CarouselFormElement onSubmit={requestFindPassword}>
                  {INPUT_PROPS.password.map((props) => {
                    return (
                      <Comp.UserModalInput
                        id={props.id}
                        type={props.type}
                        value={passwordValueBasket[props.id]}
                        onChange={handlePasswordValueChange}
                        key={props.id}
                      >
                        {props.placeholder}
                      </Comp.UserModalInput>
                    );
                  })}
                  <S.SubmitButton disabled={false} type="submit">
                    <span>새 비밀번호 발급 받기</span>
                  </S.SubmitButton>
                  <S.ArrowButton
                    position="right"
                    type="button"
                    rotate={false}
                    disabled={false}
                    onClick={carouselRightButtonClick}
                  >
                    <Image width={14} height={14} alt="우측으로" src={'/image/black-arrow-right.svg'} />
                  </S.ArrowButton>
                </S.CarouselFormElement>
                <S.OptionsWrapper>
                  <S.HrLine />
                  <p onClick={carouselLeftButtonClick}>
                    <span>비밀번호</span>를 찾고 싶어요
                  </p>
                  <S.HrLine />
                  <p onClick={carouselRightButtonClick}>
                    <span>아이디</span>를 찾고 싶어요
                  </p>
                  <S.HrLine />
                </S.OptionsWrapper>
                <S.CarouselFormElement onSubmit={requestFindId}>
                  {INPUT_PROPS.id.map((props) => {
                    return (
                      <Comp.UserModalInput
                        id={props.id}
                        type={props.type}
                        value={idValueBasket[props.id]}
                        onChange={handleIdValueChange}
                        key={props.id}
                      >
                        {props.placeholder}
                      </Comp.UserModalInput>
                    );
                  })}
                  <S.SubmitButton disabled={false} type="submit">
                    <span>이메일로 기존 아이디 받기</span>
                  </S.SubmitButton>
                  <S.ArrowButton
                    position="left"
                    type="button"
                    rotate={true}
                    disabled={false}
                    onClick={carouselLeftButtonClick}
                  >
                    <Image width={14} height={14} alt="좌측으로" src={'/image/black-arrow-right.svg'} />
                  </S.ArrowButton>
                </S.CarouselFormElement>
              </S.CarouselContainer>
            </S.CarouselWrapper>
          </S.ModalContainer>
        </Comp.BaseModal>
      )}
    </>
  );
}

const INPUT_PROPS = {
  password: [
    { id: 'name', type: 'text', placeholder: '이름를 입력해주세요', subContent: null },
    { id: 'id', type: 'text', placeholder: '아이디를 입력해주세요', subContent: null },
    { id: 'email', type: 'email', placeholder: '이메일를 입력해주세요', subContent: null },
  ],
  id: [
    { id: 'name', type: 'text', placeholder: '이름를 입력해주세요', subContent: null },
    { id: 'email', type: 'email', placeholder: '이메일를 입력해주세요', subContent: null },
  ],
};
