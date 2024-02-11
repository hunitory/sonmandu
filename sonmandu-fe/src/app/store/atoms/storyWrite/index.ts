import { atom } from 'recoil';

export const storyInfoState = atom({
  key: 'storyInfoState',
  default: {
    title: '',
    content: '',
    handwritingStoryId: 0,
    handwritingId: 0,
  },
});
