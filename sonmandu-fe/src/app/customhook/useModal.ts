import * as Type from '@/types';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalsSelectorFamily } from 'store/selectors/modalSelector';

function useModal(modalId: Type.ModalId) {
  const [modal, setModal] = useRecoilState(modalsSelectorFamily(modalId));
  const resetModal = useResetRecoilState(modalsSelectorFamily(modalId));

  const openModal = () => {
    setModal((current) => ({ ...current, isOpen: true }));
  };

  const hideModal = () => {
    setModal((current) => ({ ...current, isOpen: false }));
  };

  const closeModal = () => {
    resetModal();
  };

  return { modal, setModal, openModal, hideModal, closeModal };
}

export default useModal;
