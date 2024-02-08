import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

interface BaseStoryCardProps {
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

function BaseStoryCard(props: BaseStoryCardProps) {
  const { handwritingStoryId, title, name, thumbnail, hitCount, likeCount, member, isLike } = props;
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { mutate, data: resLikeClick } = useMutation({
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
        <Image src={'/image/sample.jpg'} alt="편지지" fill={true} sizes="100vw" quality={100} />
      </S.ImageArea>
      <S.StoryCardContainer>
        <S.StoryTextContentWrapper>
          <h3>이야기ㅇ이름은길고길답니다ㅇ설명하자면참길어요</h3>
          <p>폰트이름입니다람쥐입니다람쥐여용</p>
        </S.StoryTextContentWrapper>
        <S.InteractionWrapper>
          <div className="profile-box-wrapper">
            <S.StyledProfileBox
              imageUrl="/vercel.svg"
              imgSize="36px"
              nickname={'바다의 여인'}
              badge={false}
              fontSize="12px"
            />
          </div>
          <S.IconWithNumberWrapper>
            <Image src={'/image/empty-orange-heart.svg'} alt="빈 하트" width={24} height={20} />
            <span>좋아요</span>
          </S.IconWithNumberWrapper>
        </S.InteractionWrapper>
      </S.StoryCardContainer>
    </S.StoryCardWrapper>
  );
}

export default BaseStoryCard;
