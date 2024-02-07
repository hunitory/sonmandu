import React from 'react';
import * as Comp from 'components';
import useModal from 'customhook/useModal';

export default function FindInfoModal() {
  const findInfoModal = useModal('findInfo');
  const closeFindInfoModal = () => {
    findInfoModal.closeModal();
  };

  return (
    <>
      {findInfoModal.modal.isOpen && (
        <Comp.BaseModal onClose={closeFindInfoModal} size="small">
          정보 찾기
        </Comp.BaseModal>
      )}
    </>
  );
}
