'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import * as Comp from '@/components';
import * as S from './style';

interface MemberInfo {
  nickname: string;
  id: string;
  name: string;
  email: string;
}

export default function JihunUiTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태
  const onClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 현재 로그인한 유저 정보
  const member = {
    nickname: 'ssafy',
    id: 'ssdaj555',
    name: '오이김',
    email: 'lsdkfj@gmail.com',
  };

  const [isEdit, setIsEdit] = useState({
    nickname: false,
    id: false,
    name: false,
    email: false,
  });

  const OpenEditWindow = (props: keyof typeof isEdit) => {
    setIsEdit((prev) => ({ ...prev, [props]: !prev[props] }));
  };

  const ref = useRef<HTMLInputElement>(null);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(member);
  const handleMemberInfoOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div>
      {isModalOpen && (
        <Comp.Modal size="small" onClose={onClose}>
          <Comp.LoginForModal></Comp.LoginForModal>
        </Comp.Modal>
      )}
    </div>
  );
}
