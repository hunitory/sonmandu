import { atomFamily } from 'recoil';

export const modalState = atomFamily({
  key: 'modalState',
  default: {
    login: false,
    join: false,
    signOut: false,
    findInfo: false,
    personalInfo: false,
  },
});
