import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { BaseLatterField } from 'components';

function BaseFontCard() {
  return (
    <S.FontCardWrapper>
      <S.FontCardContainer>
        <S.FontName>글씨 이름</S.FontName>
        <BaseLatterField latterImgUrl="/image/letter-1.png" />
        <S.EtcInfomationWrapper>
          <S.EctInfoVerticalContainer>
            <S.IconWithNumberWrapper>
              <Image
                src={'/image/empty-orange_heart.svg'}
                alt="빈 하트"
                width={24}
                height={20}
              />
              <span>좋아요</span>
            </S.IconWithNumberWrapper>
            <S.IconWithNumberWrapper>
              <Image
                src={'/image/download-with-circle.svg'}
                alt="다운로드 횟수"
                width={24}
                height={20}
              />
              <span>다운로드</span>
            </S.IconWithNumberWrapper>
          </S.EctInfoVerticalContainer>
          <S.EctInfoVerticalContainer>
            <S.StyledHashTags direction="column" hashTagIdList={[1, 2, 3]} />
          </S.EctInfoVerticalContainer>
        </S.EtcInfomationWrapper>
      </S.FontCardContainer>
    </S.FontCardWrapper>
  );
}

export default BaseFontCard;
