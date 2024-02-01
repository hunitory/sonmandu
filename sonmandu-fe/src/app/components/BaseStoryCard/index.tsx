import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { BaseLatterField, ProfileBox } from 'components';

function BaseStoryCard() {
  return (
    <S.StoryCardWrapper>
      <S.ImageArea>
        <Image
          src={'/image/caution3.png'}
          alt="편지지"
          fill={true}
          sizes="100vw"
          quality={100}
        />
      </S.ImageArea>
      <S.StoryCardContainer>
        <S.StoryName>
          이야기 이름은 길고 길답니다. 설명하자면 참 길어요
        </S.StoryName>
        <div className="profile-box-wrapper">
          <S.StyledProfileBox
            id={1}
            src="/vercel.svg"
            nickname={'바다의 여인'}
            badge={false}
            fontSize="12px"
            noLink
          />
        </div>
        <S.IconWithNumberWrapper>
          <Image
            src={'/image/empty-orange_heart.svg'}
            alt="빈 하트"
            width={24}
            height={20}
          />
          <span>좋아요</span>
        </S.IconWithNumberWrapper>
      </S.StoryCardContainer>
    </S.StoryCardWrapper>
  );
}

export default BaseStoryCard;
