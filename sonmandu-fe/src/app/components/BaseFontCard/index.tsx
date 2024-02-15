import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import { BaseLetterField, CustomImage } from 'components';
import { FontCard } from 'types';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';

function BaseFontCard(props: FontCard) {
  const { handwritingId, name, downloadUrl, hitCount, likeCount, downloadCount, tag, isLike, letter, onClick } = props;
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { mutate, data: resLikeClick } = useMutation({
    mutationKey: ['font-gallery-click-like', handwritingId],
    mutationFn: () => API.handwriting.fontLikesClick({ fontId: String(handwritingId) }),
    onSuccess: () =>
      setCopyIsLikeAndCount((prev) => {
        if (prev.isLike) return { ...prev, isLike: !prev.isLike, count: prev.count - 1 };
        return { ...prev, isLike: !prev.isLike, count: prev.count + 1 };
      }),
  });

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutate();
  };

  return (
    <S.FontCardWrapper onClick={onClick}>
      <S.FontCardContainer name={name}>
        <S.FontName>{name}</S.FontName>
        {letter.isShow && <BaseLetterField fontSize={14} letterImgUrl={`/image/letter-${letter.idx % 4}.png`} />}
        <S.EtcInfomationWrapper>
          <S.IconTextsWrapper>
            <S.IconWithNumberContainer disabled={false} type="button" onClick={handleLikeClick}>
              <Image
                src={`/image/${copyIsLikeAndCount.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
                alt="빈 하트"
                width={24}
                height={20}
              />
              <span>{copyIsLikeAndCount.count}</span>
            </S.IconWithNumberContainer>
            <S.IconWithNumberContainer disabled={false} type="button">
              <CustomImage src={'/image/download-with-circle.svg'} alt="다운로드 횟수" width={24} height={20} />
              <span>{downloadCount}</span>
            </S.IconWithNumberContainer>
          </S.IconTextsWrapper>
          <S.StyledHashTags direction="row" hashTagIdList={tag} />
        </S.EtcInfomationWrapper>
      </S.FontCardContainer>
    </S.FontCardWrapper>
  );
}

export default BaseFontCard;
