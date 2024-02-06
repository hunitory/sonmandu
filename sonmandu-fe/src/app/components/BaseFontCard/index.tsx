import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import { BaseLetterField } from 'components';
import { FontCard } from 'types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function BaseFontCard(props: FontCard) {
  const { handwritingId, name, downloadUrl, hitCount, likeCount, downloadCount, tag, isLike } = props;
  const route = useRouter();
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { data: responseFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', name],
    queryFn: () => API.handwriting.getFontFileFromS3({ url: downloadUrl }),
  });

  const { data: loadResponse, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', responseFromS3],
    queryFn: () => API.handwriting.loadFontInService({ getFontResponse: responseFromS3, name: name }),
  });

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
    <>
      {isFileFetching && isLoadFetching ? (
        <S.SkeletonCard></S.SkeletonCard>
      ) : (
        <S.FontCardWrapper onClick={() => route.push(`/font-detail/${handwritingId}`)}>
          <S.FontCardContainer name={name}>
            <S.FontName>{name}</S.FontName>
            <BaseLetterField letterImgUrl="/image/letter-1.png" />
            <S.EtcInfomationWrapper>
              <S.EctInfoVerticalContainer>
                <S.IconWithNumberWrapper disabled={false} type="button" onClick={handleLikeClick}>
                  <Image
                    src={`/image/${copyIsLikeAndCount.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
                    alt="빈 하트"
                    width={24}
                    height={20}
                  />
                  <span>{copyIsLikeAndCount.count}</span>
                </S.IconWithNumberWrapper>
                <S.IconWithNumberWrapper disabled={false} type="button">
                  <Image src={'/image/download-with-circle.svg'} alt="다운로드 횟수" width={24} height={20} />
                  <span>{downloadCount}</span>
                </S.IconWithNumberWrapper>
              </S.EctInfoVerticalContainer>
              <S.EctInfoVerticalContainer>
                <S.StyledHashTags direction="column" hashTagIdList={tag} />
              </S.EctInfoVerticalContainer>
            </S.EtcInfomationWrapper>
          </S.FontCardContainer>
        </S.FontCardWrapper>
      )}
    </>
  );
}

export default BaseFontCard;
