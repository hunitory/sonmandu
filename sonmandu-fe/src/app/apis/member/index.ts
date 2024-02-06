import { instanceJsonContent } from 'apis/_instance';
import axios, { AxiosResponse } from 'axios';

export async function getProfileMember(memberId: number) {
  return instanceJsonContent.get(`/members?memberId=${memberId}`);
}
