import { atom, atomFamily } from 'recoil';
import * as Type from '@/types';

export const modalIdsAtom = atom<Type.ModalId[]>({
  key: 'modalIdsAtom',
  default: [],
});

export const modalsAtomFamily = atomFamily<Type.ModalInfo, Type.ModalId>({
  key: 'modalsAtomFamily',
  default: (id) => ({
    id,
    isOpen: false,
  }),
});
