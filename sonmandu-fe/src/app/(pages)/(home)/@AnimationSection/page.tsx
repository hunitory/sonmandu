'use client';

import * as Styled from './_style';
import Image from 'next/image';

export default function AnimationSection() {
  return (
    <Styled.AnimationWrapper>
      <Styled.LeftSideWrapper>
        <Styled.ContentWrapper>
          <Styled.TextWrapper>당신이 담긴 손 글씨,</Styled.TextWrapper>
          <Image src="/image/handwriting.jpg" alt="손글씨이미지" width={400} height={350} quality={100} />
        </Styled.ContentWrapper>
      </Styled.LeftSideWrapper>
      <Styled.RightSideWrapper>
        <Styled.ContentWrapper>
          <Styled.TextWrapper>폰트로 만들어 드립니다.</Styled.TextWrapper>
          <Image src="/image/fontwriting.png" alt="폰트이미지" width={530} height={350} quality={100}/>
        </Styled.ContentWrapper>
      </Styled.RightSideWrapper>
    </Styled.AnimationWrapper>
  );
}
