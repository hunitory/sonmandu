import React, { useState } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import * as API from '@/apis';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

interface MainStoryCardProps {
  handwritingStoryId: number;
  title: string;
  name: string;
  thumbnail: string;
  hitCount: number;
  likeCount: number;
  member: {
    memberId: number;
    name: string;
    imageUrl: string | null;
  };
  isLike: boolean;
}

function MainStoryCard(props: MainStoryCardProps) {
  const { handwritingStoryId, title, name, thumbnail, hitCount, likeCount, member, isLike } = props;
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { mutate: requestLikeClick, data: resLikeClick } = useMutation({
    mutationKey: ['font-gallery-click-like', handwritingStoryId],
    mutationFn: () => API.handwriting.fontLikesClick({ fontId: String(handwritingStoryId) }),
    onSuccess: () =>
      setCopyIsLikeAndCount((prev) => {
        if (prev.isLike) return { ...prev, isLike: !prev.isLike, count: prev.count - 1 };
        return { ...prev, isLike: !prev.isLike, count: prev.count + 1 };
      }),
  });

  return (
    <S.StoryCardWrapper>
      <S.ImageArea>
        <Comp.CustomImage src={thumbnail} alt="썸네일" fill={true} sizes="100vw" quality={100} />
      </S.ImageArea>
      <S.StoryCardContainer>
        <S.StoryTextContentWrapper>
          <h3>{title}</h3>
          <p>{name}</p>
        </S.StoryTextContentWrapper>
        <S.InteractionWrapper>
          <div className="profile-box-wrapper">
            <S.StyledProfileBox
              memberId={member.memberId}
              imageUrl={member.imageUrl || '/image/logo.png'}
              imgSize="36px"
              nickname={member.name}
              badge={false}
              fontSize="12px"
            />
          </div>
          <S.IconWithNumberWrapper>
            <Image
              src={`/image/${copyIsLikeAndCount.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
              alt="하트"
              width={24}
              height={20}
              onClick={() => requestLikeClick}
            />
            <span>{copyIsLikeAndCount.count}</span>
          </S.IconWithNumberWrapper>
        </S.InteractionWrapper>
      </S.StoryCardContainer>
    </S.StoryCardWrapper>
  );
}

export default MainStoryCard;
