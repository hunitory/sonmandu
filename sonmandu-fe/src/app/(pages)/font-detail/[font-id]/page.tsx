import React from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

export default function FontDetailPage() {
  return (
    <S.FontDetailMainContainer>
      <S.FontInfomationWrapper>
        <div>
          <h1>글씨체 자랑하는 곳이 여기군요체</h1>
          <div className="hash-tags-wrapper">
            <Comp.BaseHashTags hashTagIdList={[0, 1, 2]} direction="row" />
          </div>
          <S.IconWithTextsWrapper>
            <S.IconWithTextContainer>
              <Image
                src={
                  Math.random() < 0.5
                    ? '/image/empty-orange_heart.svg'
                    : '/image/fill-orange-heart.svg'
                }
                alt="좋아요"
                width={30}
                height={28}
              />
              <span>좋아요</span>
            </S.IconWithTextContainer>
            <S.IconWithTextContainer>
              <Image
                src={
                  Math.random() < 0.5
                    ? '/image/empty-orange_heart.svg'
                    : '/image/fill-orange-heart.svg'
                }
                alt="좋아요"
                width={30}
                height={28}
              />
              <span>조회</span>
            </S.IconWithTextContainer>
            <S.IconWithTextContainer>
              <Image
                src={
                  Math.random() < 0.5
                    ? '/image/empty-orange_heart.svg'
                    : '/image/fill-orange-heart.svg'
                }
                alt="좋아요"
                width={30}
                height={28}
              />
              <span>다운로드</span>
            </S.IconWithTextContainer>
          </S.IconWithTextsWrapper>
        </div>
        <S.IconWithTextsWrapper>
          <S.IconWithTextContainer>
            <Image
              src={
                Math.random() < 0.5
                  ? '/image/empty-orange_heart.svg'
                  : '/image/fill-orange-heart.svg'
              }
              alt="좋아요"
              width={30}
              height={28}
            />
            <span>공유하기</span>
          </S.IconWithTextContainer>
          <S.IconWithTextContainer>
            <Image
              src={
                Math.random() < 0.5
                  ? '/image/empty-orange_heart.svg'
                  : '/image/fill-orange-heart.svg'
              }
              alt="좋아요"
              width={30}
              height={28}
            />
            <span>글꼴 다운 받기</span>
          </S.IconWithTextContainer>
        </S.IconWithTextsWrapper>
      </S.FontInfomationWrapper>
    </S.FontDetailMainContainer>
  );
}
