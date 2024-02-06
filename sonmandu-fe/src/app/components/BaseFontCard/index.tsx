import React from 'react';
import * as S from './style';
import * as API from '@/apis';
import { BaseLetterField } from 'components';
import { FontCard } from 'types';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function BaseFontCard(props: FontCard) {
  const { handwritingId, name, downloadUrl, hitCount, likeCount, downloadCount, tag, isLike } = props;
  const route = useRouter();
  const { data: responseFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', name],
    queryFn: () => API.handwriting.getFontFileFromS3({ url: downloadUrl }),
  });

  const { data: loadResponse, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', responseFromS3],
    queryFn: () => API.handwriting.loadFontInService({ getFontResponse: responseFromS3, name: name }),
  });

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
                <S.IconWithNumberWrapper>
                  <Image
                    src={`/image/${isLike ? 'fill' : 'empty'}-orange_heart.svg`}
                    alt="빈 하트"
                    width={24}
                    height={20}
                  />
                  <span>{likeCount}</span>
                </S.IconWithNumberWrapper>
                <S.IconWithNumberWrapper>
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
