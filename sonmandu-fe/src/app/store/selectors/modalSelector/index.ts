import { DefaultValue, selectorFamily } from 'recoil';
import { modalsAtomFamily, modalIdsAtom } from 'store';
import * as Type from '@/types';

export const modalsSelectorFamily = selectorFamily<Type.ModalInfo, Type.ModalId>({
  key: 'modalsSelectorFamily',

  get:
    (modalId) =>
    ({ get }) =>
      get(modalsAtomFamily(modalId)),

  set:
    (modalId) =>
    ({ get, set, reset }, modalInfo) => {
      if (modalInfo instanceof DefaultValue) {
        reset(modalsAtomFamily(modalId));
        set(modalIdsAtom, (prevValue) => prevValue.filter((item) => item !== modalId));

        return;
      }

      set(modalsAtomFamily(modalId), modalInfo);
      set(modalIdsAtom, (prev) => Array.from(new Set([...prev, modalInfo.id])));
    },
});
