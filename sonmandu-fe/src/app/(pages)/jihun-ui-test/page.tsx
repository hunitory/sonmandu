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

  const [isOpen, setIsOpen] = useState({
    nickname: false,
    id: false,
    name: false,
    email: false,
  });

  const OpenEditWindow = (props: string) => {
    // setIsOpen((prev) => ({ ...prev, [e.target.id]: !e.target.value }));
    console.log(props);
  };

  const ref = useRef<HTMLInputElement>(null);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(member);
  const handleMemberInfoOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div>
      {isModalOpen && (
        <Comp.Modal size={'medium'} onClose={onClose}>
          <Comp.BaseLabelWithInput.Label
            id="member-info-nickname"
            className="member-info-nickname"
          >
            <S.NicknameWrapper>
              <S.NicknameHead>닉네임</S.NicknameHead>
              {isOpen.nickname && (
                <S.NicknameInputWrapper>
                  <Comp.BaseLabelWithInput.Input
                    ref={ref}
                    id="nickname"
                    type="text"
                    value={memberInfo.nickname}
                    onChange={handleMemberInfoOnChange}
                  />
                </S.NicknameInputWrapper>
              )}
              {!isOpen.nickname && (
                <S.NicknameSpan>{memberInfo.nickname}</S.NicknameSpan>
              )}
              <S.StyledButton
                type={'button'}
                onClick={
                  isOpen.nickname
                    ? () => console.log('happy')
                    : () => OpenEditWindow('nickname')
                }
                disabled={false}
              >
                <span>수정하기</span>
              </S.StyledButton>
            </S.NicknameWrapper>
          </Comp.BaseLabelWithInput.Label>
        </Comp.Modal>
      )}
    </div>
  );
}
