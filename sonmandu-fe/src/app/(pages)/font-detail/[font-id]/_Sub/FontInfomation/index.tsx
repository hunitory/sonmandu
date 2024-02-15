import React, { useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { FontInfomationProps } from 'types';

function FontInfomation({ data, isAllResourcesLoad }: FontInfomationProps) {
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: data.isLike, count: data.likeCount });
  const { mutate: handleLikeClick } = useMutation({
    mutationKey: ['font-detail-click-like', data.handwritingId],
    mutationFn: () => API.handwriting.fontLikesClick({ fontId: String(data.handwritingId) }),
    onSuccess: () => {
      setCopyIsLikeAndCount((prev) => {
        if (prev.isLike) return { ...prev, isLike: !prev.isLike, count: prev.count - 1 };
        return { ...prev, isLike: !prev.isLike, count: prev.count + 1 };
      });
    },
  });

  const [copyDownloadCount, setDownloadCount] = useState(data.downloadCount);
  const { mutate: handleDownloadClick } = useMutation({
    mutationKey: ['font-detail-click-download', data.handwritingId],
    mutationFn: () => API.handwriting.fontDownload({ fontId: String(data.handwritingId) }),
    onSuccess: () => {
      setDownloadCount((prev) => prev + 1);
    },
  });

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      {isAllResourcesLoad() ? (
        <>
          <S.TitleSection>
            <S.FontInfoWrapper>
              <S.Title name={data.name}>{data.name}</S.Title>
              <S.HashTagsWrapper direction="row" hashTagIdList={data.tagIdList || []} />
              <S.OtherUserInteractionsWrapper>
                <S.OtherUserInteractionInfo type="button" onClick={handleLikeClick}>
                  <Image
                    src={`/image/${copyIsLikeAndCount.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
                    alt="좋아요 횟수"
                    width={30}
                    height={28}
                  />
                  <span>{copyIsLikeAndCount.count}</span>
                </S.OtherUserInteractionInfo>
                <S.OtherUserInteractionInfo type="button">
                  <Image src={'/image/view.svg'} alt="조회 횟수" width={30} height={28} />
                  <span>{data.hitCount}</span>
                </S.OtherUserInteractionInfo>
                <S.OtherUserInteractionInfo type="button">
                  <Image src={'/image/downloadIcon-black.svg'} alt="다운로드 횟수" width={24} height={24} />
                  <span>{copyDownloadCount}</span>
                </S.OtherUserInteractionInfo>
              </S.OtherUserInteractionsWrapper>
            </S.FontInfoWrapper>
            <S.OrangeIconWithTextsWrapper>
              <S.OrangeIconWiText type="button" onClick={handleShareClick} className="orang-icon-text">
                <Image src={'/image/shareIcon-orange.svg'} alt="공유하기" width={32} height={30} />
                <span>공유하기</span>
              </S.OrangeIconWiText>
              <form method="get" action={data.downloadUrl}>
                <S.OrangeIconWiText type="submit" className="orang-icon-text" onClick={handleDownloadClick}>
                  <Image src={'/image/downloadIcon-orange.svg'} alt="글꼴 다운 받기" width={32} height={30} />
                  <span>글꼴 다운 받기</span>
                </S.OrangeIconWiText>
              </form>
            </S.OrangeIconWithTextsWrapper>
          </S.TitleSection>
          <S.CustomProfileBox>
            {!isAllResourcesLoad() || data.member.imageUrl === null ? (
              <span>{data.member.nickname.slice(0, 1)}</span>
            ) : (
              <img src={data.member.imageUrl} width={46} height={46} alt="프로필 사진" />
            )}
            <S.ProfileTextWrapper>
              <p>{data.member.nickname}</p>
              <p>{data.member.introduction}</p>
            </S.ProfileTextWrapper>
          </S.CustomProfileBox>
        </>
      ) : (
        <>
          <S.SkeletonTitle>
            <h1></h1>
            <div></div>
            <div></div>
          </S.SkeletonTitle>
          <S.SkeletonProfileBox>
            <span></span>
            <div>
              <span></span>
              <span></span>
            </div>
          </S.SkeletonProfileBox>
        </>
      )}
    </>
  );
}

export default FontInfomation;
