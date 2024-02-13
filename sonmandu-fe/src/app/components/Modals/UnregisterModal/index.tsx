import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import Link from 'next/link';

function UnRegisterModal() {
  const LogoURL = '/image/logo.png';
  const closeModal = () => {};
  const UnRegister = () => {
    /* 로그인 로직*/
  };

  return (
    <Comp.BaseModal size="small" onClose={closeModal}>
      <Styled.ModalWrapper>
        <Styled.UnRegisterWrapper>
          <Styled.UnRegisterTitle>정말 회원 탈퇴를 하시겠습니까?</Styled.UnRegisterTitle>
          <Styled.LogoWrapper>
            <Link href={'/'}>
              <Image src={LogoURL} alt="손만두" width={123} height={52} priority></Image>
            </Link>
          </Styled.LogoWrapper>
        </Styled.UnRegisterWrapper>
        <Styled.UnRegisterContentWrapper>
          <Styled.UnRegisterContent>
            탈퇴 시 제작하신 글꼴은 지속적으로 남아있지만,<p>작성하신 글꼴 이야기는 삭제됩니다.</p>
          </Styled.UnRegisterContent>
        </Styled.UnRegisterContentWrapper>
        <Styled.ButtonWrapper>
          <Styled.UnRegisterButton onClick={UnRegister} type="button" disabled={false}>
            <Styled.UnRegisterButtonText>탈퇴하기</Styled.UnRegisterButtonText>
          </Styled.UnRegisterButton>
        </Styled.ButtonWrapper>
      </Styled.ModalWrapper>
    </Comp.BaseModal>
  );
}

export default UnRegisterModal;
