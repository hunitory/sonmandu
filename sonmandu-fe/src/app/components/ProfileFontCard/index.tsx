import React, { useEffect, useMemo, useState, MouseEvent } from 'react';
import * as S from './style';
import ProductDate from './Subs/ProductDate';
import Image from 'next/image';
import * as API from '@/apis';
import * as Comp from '@/components';
import { BaseButton, BaseHashTags } from 'components';
import { BaseButtonProps, ProfileFontCardProps, RefetchProps } from 'types';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from '@tanstack/react-query';

function ProfileFontCard({
  profileFontCardProps,
  refetchInfo,
}: {
  profileFontCardProps: ProfileFontCardProps;
  refetchInfo: RefetchProps;
}) {
  const router = useRouter();

  const { downloadCount, downloadUrl, handwritingId, hitCount, isLike, likeCount, name, createDate, tag } =
    profileFontCardProps;

  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => handleDownloadClick(),
    disabled: false,
  };

  const index = useMemo(() => {
    return Math.floor(Math.random() * 10);
  }, []);

  // 글씨체 받아오기
  const { data: resFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', profileFontCardProps],
    queryFn: () => API.handwritingStory.getFontFileFromS3({ url: downloadUrl }),
  });

  const { data: resLoadFont, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', resFromS3],
    queryFn: () => API.handwritingStory.loadFontInService({ getFontResponse: resFromS3, name: name }),
  });

  // 좋아요 버튼
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState({ isLike: isLike, count: likeCount });
  const { mutate, data: resLikeClick } = useMutation({
    mutationKey: ['profile-font-click-like', handwritingId],
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

  // 다운로드 버튼
  const [copyDownloadCount, setCopyDownloadCount] = useState(downloadCount);
  const { mutate: handleDownloadClick, data: resDownloadClick } = useMutation({
    mutationKey: ['profile-font-click-download', handwritingId],
    mutationFn: () => API.handwriting.fontDownload({ fontId: String(handwritingId) }),
    onSuccess: () => {
      router.push(downloadUrl);
      refetchInfo.refetch();
    },
  });

  useEffect(() => {
    setCopyDownloadCount(downloadCount);
  }, [downloadCount]);

  const handleProfileFontCardClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    router.push(`/font-detail/${handwritingId}`);
  } 

  return (
    <S.ProfileFontCardWrapper onClick={handleProfileFontCardClick}>
      <S.UpperWrapper>
        <ProductDate date={createDate} />
        <Comp.CustomImage src={`/image/complete-${index}.png`} alt="#" width={148} height={137} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan name={name}>{name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <S.LikeDiv disabled={false} type="button" onClick={handleLikeClick}>
              <Image
                src={copyIsLikeAndCount.isLike ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
                alt="#"
                width={30}
                height={30}
              />
              <span>{copyIsLikeAndCount.count}</span>
            </S.LikeDiv>
            <S.DownloadDiv>
              <Comp.CustomImage src={'/image/download.png'} alt="#" width={28} height={28} />
              {copyDownloadCount}
            </S.DownloadDiv>
            <S.DownloadButton {...BaseButtonProps} />
          </S.LowerContentsUp>
          <S.LowerContentsDown>
            <BaseHashTags hashTagIdList={tag} direction="row" />
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  );
}

export default ProfileFontCard;
