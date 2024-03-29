import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { IsLikeCount } from 'types';
import { SideBarProps } from 'types/pages/FontStoryDetail';

export default function SideBar({ isLike, count, setCopyIsLikeAndCount, handwritingStoryId }: SideBarProps) {
  // 사용자가 좋아요 눌렀을 때
  const { mutate, data: resLikeClick } = useMutation({
    mutationKey: ['font-story-detail-click-like', handwritingStoryId],
    mutationFn: () => API.handwritingStory.handwritingStoryLike({ id: handwritingStoryId }),
    onSuccess: () =>
      setCopyIsLikeAndCount((prev) => {
        if (prev?.isLike) return { ...prev, isLike: !prev.isLike, count: (prev.count || 0) - 1 };
        return { ...prev, isLike: !prev?.isLike, count: (prev?.count || 0) + 1 };
      }),
  });

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutate();
  };

  // 링크 복사 버튼
  const CopyUrlButton = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert('클립보드에 저장되었습니다.')
      })
      .catch(() => {
      });
  };

  return (
    <S.SideBarWrapper>
      <S.LikeWrapper onClick={handleLikeClick}>
      {isLike ? 
            <Image
              src={'/image/orange-heart-fill.png'}
              alt="orange-heart"
              width={24}
              height={22}
            /> :
            <Comp.CustomImage
              src={'/image/gray-heart.svg'}
              alt="gray-heart"
              width={24}
              height={22}
            />
            }
        </S.LikeWrapper>
      <span>{count}</span>
      <S.LinkWrapper>
        <Comp.CustomImage src={'/image/Link.png'} alt="link" width={24} height={24} onClick={CopyUrlButton} />
      </S.LinkWrapper>
    </S.SideBarWrapper>
  );
}
