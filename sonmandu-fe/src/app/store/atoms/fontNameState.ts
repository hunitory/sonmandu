import { atom } from 'recoil';

export const fontInfoState = atom({
  key: 'fontNameState',
  default: {
    name: '',
    tagIdList: [] as number[],
  },
});
