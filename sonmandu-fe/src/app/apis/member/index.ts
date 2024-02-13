import { instanceJsonContent } from 'apis/_instance';

export async function getProfileMember({ memberId }: { memberId: string }) {
  return instanceJsonContent.get(`/members?memberId=${memberId}`);
}

export async function getMemberInfo() {
  return instanceJsonContent.get(`/members/me`);
}

export async function editMemberInfo({ labelName, info }: { labelName: string; info: string }) {
  return instanceJsonContent.patch(`/members/${labelName}`, { value: info });
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
export async function checkIdUnique({ id }: { id: string }) {
  return instanceJsonContent.get(`/members/unique?id=${id}`);
}
export async function checkNicknameUnique({ nickname }: { nickname: string }) {
  return instanceJsonContent.get(`/members/unique?nickname=${nickname}`);
}
export async function sendCodeUsingEmail({ email }: { email: string }) {
  return instanceJsonContent.post(`/members/email-token?email=${email}`);
  // res: {
  //   "emailTokenId": 5
  // }
}
export async function checkCode({ emailTokenId, codeValue }: { emailTokenId: string; codeValue: string }) {
  return instanceJsonContent.get(`/members/email-token?emailTokenId=${emailTokenId}&token=${codeValue}`);
  //   res: {
  // 		true or false
  // }
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
