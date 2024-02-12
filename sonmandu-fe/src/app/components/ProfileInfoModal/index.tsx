'use client';

import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import * as Comp from '@/components';
import * as S from './style';
import * as API from '@/apis';
import { useParams } from 'next/navigation';
import { ProfileInfoModalProps } from 'types';
import { useQuery } from '@tanstack/react-query';

export default function ProfileInfoModal(props: ProfileInfoModalProps) {
  const { clickModal } = props;

  // const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태
  const onClose = () => {
    clickModal(); // 모달 닫기
  };

  // 현재 로그인한 유저 정보 - 받아와야함
  const member = {
    nickname: 'ssafy',
    id: 'ssdaj555',
    password: 'eowjs123',
    name: '오이김',
    email: 'lsdkfj@gmail.com',
  };

  const params = useParams();
  const queryKey = ['profile-info'];
  const { data: infoRes, isFetching: isInfoFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.member.getMemberInfo()
  })

  useEffect(() => {
    console.log(infoRes);
  }, [infoRes]);

  const [isActive, setIsActive] = useState({
    nickname: true,
    id: true,
    name: true,
    password: true,
    email: true,
  });

  const contents = {
    nickname: {
      infoContent: infoRes?.data.nickname,
      infoHead: '닉네임',
      labelName: 'nickname',
    },
    id: {
      infoContent: infoRes?.data.id,
      infoHead: '아이디',
      labelName: 'id',
    },
    name: {
      infoContent: infoRes?.data.name,
      infoHead: '이름',
      labelName: 'name',
    },
    email: {
      infoContent: infoRes?.data.email,
      infoHead: '이메일',
      labelName: 'email',
    },
  };

  return (
    <div>
      <Comp.BaseModal size={'large'} onClose={onClose}>
        <S.ProfileInfoWrapper>
          <S.ProfileInfoHeadWrapper>
            <span>개인 정보</span>
          </S.ProfileInfoHeadWrapper>
          <S.ProfileInfoInputWrapper>
            <Comp.ProfileInput isActive={isActive} activate={setIsActive} {...contents.nickname} />
            <S.Line />
            <Comp.ProfileInput isActive={isActive} activate={setIsActive} {...contents.id} />
            <S.Line />
            <Comp.ProfilePasswordInput isActive={isActive} activate={setIsActive} password={member.password} />
            <S.Line />
            <Comp.ProfileInput isActive={isActive} activate={setIsActive} {...contents.name} />
            <S.Line />
            <Comp.ProfileInput isActive={isActive} activate={setIsActive} {...contents.email} />
            <S.Line />
          </S.ProfileInfoInputWrapper>
          {isActive.nickname && isActive.id && isActive.password && isActive.name && isActive.email && (
            <S.ImageWrapper>
              <Image src={'/image/logo.png'} width={195} height={101} alt="logo" />
            </S.ImageWrapper>
          )}
        </S.ProfileInfoWrapper>
      </Comp.BaseModal>
    </div>
  );
}
