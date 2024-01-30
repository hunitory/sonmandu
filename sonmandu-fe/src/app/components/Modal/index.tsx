import React, { useState } from 'react';
import ModalSub from './ModalSub';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달 띄워보기</button>
      {isModalOpen && <ModalSub onClose={closeModal}></ModalSub>}
    </div>
  );
};

export default Modal;