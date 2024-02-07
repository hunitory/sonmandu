import React, { useState } from 'react';
import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import useModal from 'customhook/useModal';

function FindIdModal() {
  const findIdModal = useModal('findId');
  const [nameValue, setName] = useState('');
  const [emailValue, setEmail] = useState('');

  const closeModal = () => {
    findIdModal.closeModal();
  };

  /* 로그인 확인 */
  const failLogin = false;

  const handleNameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const OnLogin = () => {
    /* 로그인 로직*/
    console.log('로그인 시도:', nameValue, emailValue);
  };

  return (
    <>
      {findIdModal.modal.isOpen && (
        <Comp.BaseModal size="small" onClose={closeModal}>
          FINDID
        </Comp.BaseModal>
      )}
    </>
  );
}

export default FindIdModal;
