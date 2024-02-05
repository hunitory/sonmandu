'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import * as Comp from '@/components';
import * as S from './style';

export default function ProfileInfoPage() {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태
  const onClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 현재 로그인한 유저 정보 - 받아와야함
  const member = {
    nickname: 'ssafy',
    id: 'ssdaj555',
    password: 'eowjs123',
    name: '오이김',
    email: 'lsdkfj@gmail.com',
  };

  interface isActive {
    nickname: boolean;
    id: boolean;
    name: boolean;
    password: boolean;
    email: boolean;
  }

  const [isActive, setIsActive] = useState({
    nickname: true,
    id: true,
    name: true,
    password: true,
    email: true,
  });

  const props = {
    nicknameProps: {
      infoContent: member.nickname,
      infoHead: '닉네임',
      labelName: 'nickname',
    },
    idProps: {
      infoContent: member.id,
      infoHead: '아이디',
      labelName: 'id',
    },
    nameProps: {
      infoContent: member.name,
      infoHead: '이름',
      labelName: 'name',
    },
    emailProps: {
      infoContent: member.email,
      infoHead: '이메일',
      labelName: 'email',
    },
  };

  return (
    <div>
      {isModalOpen && (
        <Comp.Modal size={'large'} onClose={onClose}>
          <S.ProfileInfoWrapper>
            <S.ProfileInfoHeadWrapper>
              <span>개인 정보</span>
            </S.ProfileInfoHeadWrapper>
            <S.ProfileInfoInputWrapper>
              <Comp.ProfileInput
                isActive={isActive}
                activate={setIsActive}
                {...props.nicknameProps}
              />
              <S.Line />
              <Comp.ProfileInput
                isActive={isActive}
                activate={setIsActive}
                {...props.idProps}
              />
              <S.Line />
              <Comp.ProfilePasswordInput
                isActive={isActive}
                activate={setIsActive}
                password={member.password}
              />
              <S.Line />
              <Comp.ProfileInput
                isActive={isActive}
                activate={setIsActive}
                {...props.nameProps}
              />
              <S.Line />
              <Comp.ProfileInput
                isActive={isActive}
                activate={setIsActive}
                {...props.emailProps}
              />
              <S.Line />
            </S.ProfileInfoInputWrapper>
            {isActive.nickname &&
              isActive.id &&
              isActive.password &&
              isActive.name &&
              isActive.email && (
                <S.ImageWrapper>
                  <S.ImageDiv>
                    <Image src={'/image/logo.png'} fill alt="logo" />
                  </S.ImageDiv>
                </S.ImageWrapper>
              )}
          </S.ProfileInfoWrapper>
        </Comp.Modal>
      )}
    </div>
  );
}
