import React from 'react';
import * as S from './style';
import Image from 'next/image';

function BaseFontCard() {
  return (
    <S.FontCardWrapper>
      <S.FontCardContainer>
        <S.FontName>글씨 이름</S.FontName>

        <S.LatterImageArea>
          <Image src={'/image/letter-1.png'} alt="편지지" fill />
          <S.TextField placeholder="글씨를 편지지에 써보세요!"></S.TextField>
        </S.LatterImageArea>

        <S.EtcInfomationWrapper>
          <div>
            <S.IconWithNumberWrapper>
              <Image
                src={'/image/empty-orange_heart.svg'}
                alt="빈 하트"
                width={24}
                height={20}
              />
              <span>좋아요 갯수</span>
            </S.IconWithNumberWrapper>
            <S.IconWithNumberWrapper>
              <Image
                src={'/image/download-with-circle.svg'}
                alt="다운로드 횟수"
                width={24}
                height={20}
              />
              <span>다운 횟수</span>
            </S.IconWithNumberWrapper>
          </div>
        </S.EtcInfomationWrapper>
      </S.FontCardContainer>
    </S.FontCardWrapper>
  );
}

export default BaseFontCard;
