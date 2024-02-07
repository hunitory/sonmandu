import { instanceJsonContent } from 'apis/_instance';

export async function getProfileMember(memberId: number) {
  return instanceJsonContent.get(`/members?memberId=${memberId}`);
}

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

export async function logout() {
  return instanceJsonContent.post(`/members/logout`);
}

export async function findUserId({ email, name }: { email: string; name: string }) {
  return instanceJsonContent.get(`/members?email=${email}&name=${name}`);
}

export async function findUserPassword({ name, id, email }: { id: string; email: string; name: string }) {
  return instanceJsonContent.get(`/members?name=${name}&id=${id}&email=${email}`);
}

// - 아이디 중복
// - 닉네임 중복
// - 인증코드 이메일로 전송
// - 인증코드 인증
