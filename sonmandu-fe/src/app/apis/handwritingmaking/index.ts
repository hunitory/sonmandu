import { instanceJsonContent } from 'apis/_instance';
// import axios, { AxiosResponse } from 'axios';

export async function DulicationFontCheck({ name }: { name: string }) {
  return instanceJsonContent.get(`/handwritings/unique/name?value=${name}`);
}