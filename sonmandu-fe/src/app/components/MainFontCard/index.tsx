import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import { BaseLetterField, CustomImage } from 'components';
import { FontCard } from 'types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function MainFontCard(props: FontCard) {
  const { handwritingId, name, downloadUrl, hitCount, likeCount, downloadCount, tag, isLike } = props;
  const route = useRouter();
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });

  const { data: responseFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', name],
    queryFn: () => API.mainFontCard.getPopolarFontFileFromS3({ url: downloadUrl }),
  });

  const { data: loadResponse, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', responseFromS3],
    queryFn: () => API.mainFontCard.loadFontInService({ getFontResponse: responseFromS3, name: name }),
  });

  const { mutate, data: resLikeClick } = useMutation({
    mutationKey: ['font-gallery-click-like', handwritingId],
    mutationFn: () => API.mainFontCard.fontLikesClick({ fontId: String(handwritingId) }),
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
    <>
      {isFileFetching && isLoadFetching ? (
        <S.SkeletonCard></S.SkeletonCard>
      ) : (
        <S.FontCardWrapper onClick={() => route.push(`/font-detail/${handwritingId}`)}>
          <S.FontCardContainer name={name}>
            <S.FontName>{name}</S.FontName>
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
      )}
    </>
  );
}

export default MainFontCard;
