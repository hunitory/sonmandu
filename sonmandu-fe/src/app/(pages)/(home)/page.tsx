'use client';

import Link from 'next/link';
import * as Styled from './_style';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Styled.MainBanner>
        <Styled.MainTextContainer>
          <Styled.MainTitle>당신이 담긴 손글씨, 폰트로 만들어 드립니다.</Styled.MainTitle>
          <Styled.Maincontent>
            <p>멋지고 이쁜 나의 글씨체, 뒤죽박죽인 나의 글씨체를 쉽게 만들어 보세요.</p>
            <p>과거와 현재, 또는 자신과 타인을 글씨체로 간직할 수 있습니다</p>
          </Styled.Maincontent>
          <Styled.ButtonWrapper>
            <Styled.ApplicationButton onClick={() => router.push('/create-font')}disabled={false} type="button">
              <Styled.ApplicationButtonText>손글씨 만들기</Styled.ApplicationButtonText>
            </Styled.ApplicationButton>
            <Styled.LoginButton disabled={false} type="button">
              <Styled.LoginButtonText>로그인</Styled.LoginButtonText>
            </Styled.LoginButton>
          </Styled.ButtonWrapper>
        </Styled.MainTextContainer>
      </Styled.MainBanner>
    </>
  );
}
