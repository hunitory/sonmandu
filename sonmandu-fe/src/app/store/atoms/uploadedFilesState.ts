import { atom } from "recoil";

export const uploadedFilesState = atom({
    key: 'uploadedFilesState',
    default: [] as File[],
  });