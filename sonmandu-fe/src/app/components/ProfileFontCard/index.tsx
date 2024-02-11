import React from 'react';
import * as S from './style';
import ProductDate from './Subs/ProductDate';
import Image from 'next/image';
import { BaseButton, BaseHashTags } from 'components';
import { BaseButtonProps, ProfileFontCardProps } from 'types';
import { useRouter } from 'next/navigation';

function ProfileFontCard({
  profileFontCardProps
}: {
  profileFontCardProps: ProfileFontCardProps;
}) {
  const router = useRouter();

  const { downloadCount, downloadUrl, handwritingId, hitCount, isLike, likeCount, name, createTime, tag } = profileFontCardProps;

  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => router.push(downloadUrl),
    disabled: false,
  };

  const index = Math.floor(Math.random() * 10)

  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={createTime} />
        <Image src={`/image/complete-${index}.png`} alt="#" width={148} height={137} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{name}</S.LowerSpan>
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
              <Image src={'/image/download.png'} alt="#" width={28} height={28} />
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
