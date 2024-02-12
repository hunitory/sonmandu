'use client';

import * as Styled from './_style';
import * as Comp from '@/components';
import { ST } from 'next/dist/shared/lib/utils';
import Image from 'next/image';

export default function AnimationSection() {
  return (
    <Styled.AnimationWrapper>
      <Styled.LeftSideWrapper>
        <Styled.ContentWrapper>
        <Styled.TextWrapper>당신이 담긴 손 글씨,</Styled.TextWrapper>
        <Image src="/image/producing-2.png" alt="이미지1" width={450} height={400} />
        </Styled.ContentWrapper>
      </Styled.LeftSideWrapper>
      <Styled.RightSideWrapper>
      <Styled.ContentWrapper>
        <Styled.TextWrapper>폰트로 만들어 드립니다.</Styled.TextWrapper>
        <Image src="/image/producing-3.png" alt="이미지1" width={450} height={400} />
        </Styled.ContentWrapper>
      </Styled.RightSideWrapper>
    </Styled.AnimationWrapper>
  );
}
