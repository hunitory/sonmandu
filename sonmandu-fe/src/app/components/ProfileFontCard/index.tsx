import React, { useMemo } from 'react';
import * as S from './style';
import ProductDate from './Subs/ProductDate';
import Image from 'next/image';
import * as API from '@/apis';
import * as Comp from '@/components';
import { BaseButton, BaseHashTags } from 'components';
import { BaseButtonProps, ProfileFontCardProps } from 'types';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function ProfileFontCard({ profileFontCardProps }: { profileFontCardProps: ProfileFontCardProps }) {
  const router = useRouter();

  const { downloadCount, downloadUrl, handwritingId, hitCount, isLike, likeCount, name, createDate, tag } =
    profileFontCardProps;

  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => router.push(downloadUrl),
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

  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={createDate} />
        <Comp.CustomImage src={`/image/complete-${index}.png`} alt="#" width={148} height={137} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan name={name}>{name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <S.LikeDiv>
              <Image
                src={isLike ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
                alt="#"
                width={30}
                height={30}
              />
              {likeCount}
            </S.LikeDiv>
            <S.DownloadDiv>
              <Comp.CustomImage src={'/image/download.png'} alt="#" width={28} height={28} />
              {downloadCount}
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
