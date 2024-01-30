import React, { useState } from 'react';
import Modal from './ModalSub'; // 여기에 모달 컴포넌트를 임포트합니다.

const ModalState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>눌러</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ModalState;