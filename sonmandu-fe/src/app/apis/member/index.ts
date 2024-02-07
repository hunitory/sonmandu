import { instanceJsonContent } from 'apis/_instance';

interface SignUpArgs {
  id: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
}
export async function signUp({ id, password, name, nickname, email }: SignUpArgs) {
  return instanceJsonContent.post(`/members/signup`, {
    id: id,
    password: password,
    name: name,
    nickname: nickname,
    email: email,
  });
}

export async function login({ id, password }: { id: string; password: string }) {
  return instanceJsonContent.post(`/members/login`, {
    id: id,
    password: password,
  });
}
