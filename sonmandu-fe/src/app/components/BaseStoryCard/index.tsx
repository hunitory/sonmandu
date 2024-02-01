import React from 'react';
import * as S from './style';
import Image from 'next/image';

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
        <S.StoryTextContentWrapper>
          <h3>이야기ㅇ이름은길고길답니다ㅇ설명하자면참길어요</h3>
          <p>폰트이름입니다람쥐입니다람쥐여용</p>
        </S.StoryTextContentWrapper>
        <S.InteractionWrapper>
          <div className="profile-box-wrapper">
            {/* <S.StyledProfileBox
            id={1}
            src="/vercel.svg"
            nickname={'바다의 여인'}
            badge={false}
            fontSize="12px"
            noLink
          /> */}
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
        </S.InteractionWrapper>
      </S.StoryCardContainer>
    </S.StoryCardWrapper>
  );
}

export default BaseStoryCard;
