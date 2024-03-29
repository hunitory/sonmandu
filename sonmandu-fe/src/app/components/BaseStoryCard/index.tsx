import React, { MouseEvent, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as T from '@/types';
import * as Comp from '@/components';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

function BaseStoryCard(props: T.BaseStoryCard) {
  const { handwritingStoryId, title, name, thumbnail, hitCount, likeCount, member, isLike, onClick } = props;
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { mutate: requestLikeClick, data: resLikeClick } = useMutation({
    mutationKey: ['font-gallery-click-like', handwritingStoryId],
    mutationFn: () => API.handwritingStory.handwritingStoryLike({ id: handwritingStoryId }),
    onSuccess: () => {
      setCopyIsLikeAndCount((prev) => {
        if (prev.isLike) return { ...prev, isLike: !prev.isLike, count: prev.count - 1 };
        return { ...prev, isLike: !prev.isLike, count: prev.count + 1 };
      });
    },
  });

  const handleLikeButtonClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    requestLikeClick();
  };

  return (
    <S.StoryCardWrapper onClick={onClick}>
      <S.ImageArea>
        <Comp.CustomImage src={thumbnail} alt="썸네일" fill={true} sizes="100" loading="lazy" />
      </S.ImageArea>
      <S.StoryCardContainer>
        <S.StoryTextContentWrapper>
          <h3>{title}</h3>
          <p>{name}</p>
        </S.StoryTextContentWrapper>
        <S.InteractionWrapper>
          <div className="profile-box-wrapper">
            <S.StyledProfileBox
              imageUrl={member.imageUrl}
              imgSize="36px"
              nickname={member.nickname || ''}
              badge={member.badge}
              memberId={member.memberId}
              fontSize="12px"
            />
          </div>
          <S.IconWithNumberWrapper>
            <Image
              src={`/image/${copyIsLikeAndCount.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
              alt="하트"
              width={24}
              height={20}
              onClick={handleLikeButtonClick}
            />
            <span>{copyIsLikeAndCount.count}</span>
          </S.IconWithNumberWrapper>
        </S.InteractionWrapper>
      </S.StoryCardContainer>
    </S.StoryCardWrapper>
  );
}

export default BaseStoryCard;
