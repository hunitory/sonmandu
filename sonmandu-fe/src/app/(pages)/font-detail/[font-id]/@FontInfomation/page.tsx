import React from 'react';
import * as Comp from '@/components';
import * as S from './style';
import Image from 'next/image';

function FontInfomation() {
  return (
    <S.TitleSection>
      <div>
        <h1>글씨체 자랑하는 곳이 여기군요체</h1>
        <div className="hash-tags-wrapper">
          <Comp.BaseHashTags hashTagIdList={[0, 1, 2]} direction="row" />
        </div>
        <S.OtherUserInteractionsWrapper>
          <S.OtherUserInteractionInfo>
            <Image
              src={
                Math.random() < 0.5
                  ? '/image/empty-orange_heart.svg'
                  : '/image/fill-orange-heart.svg'
              }
              alt="좋아요 횟수"
              width={30}
              height={28}
            />
            <span>좋아요</span>
          </S.OtherUserInteractionInfo>
          <S.OtherUserInteractionInfo>
            <Image
              src={'/image/view.svg'}
              alt="조회 횟수"
              width={30}
              height={30}
            />
            <span>조회</span>
          </S.OtherUserInteractionInfo>
          <S.OtherUserInteractionInfo>
            <Image
              src={'/image/downloadIcon-black.svg'}
              alt="다운로드 횟수"
              width={24}
              height={24}
            />
            <span>다운로드</span>
          </S.OtherUserInteractionInfo>
        </S.OtherUserInteractionsWrapper>
      </div>
      <S.OrangeIconWithTextsWrapper>
        <S.OrangeIconWiText className="orang-icon-text">
          <Image
            src={'/image/shareIcon-orange.svg'}
            alt="공유하기"
            width={32}
            height={30}
          />
          <span>공유하기</span>
        </S.OrangeIconWiText>
        <S.OrangeIconWiText className="orang-icon-text">
          <Image
            src={'/image/downloadIcon-orange.svg'}
            alt="글꼴 다운 받기"
            width={32}
            height={30}
          />
          <span>글꼴 다운 받기</span>
        </S.OrangeIconWiText>
      </S.OrangeIconWithTextsWrapper>
    </S.TitleSection>
  );
}

export default FontInfomation;
