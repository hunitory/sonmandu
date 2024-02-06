import React from 'react';
import * as S from './style';
import ProductDate from './Subs/ProductDate';
import Image from 'next/image';
import { BaseButton, BaseHashTags } from 'components';
import { BaseButtonProps, Handwriting } from 'types';
import { useRouter } from 'next/navigation';

function ProfileFontCard({
  index,
  isMypage,
  handwriting,
}: {
  index: number;
  isMypage: boolean;
  handwriting: Handwriting;
}) {
  const router = useRouter();

  const { handwritingId, name, state, likeCount, downloadCount, downloadUrl, createDate, tags } = handwriting;

  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => router.push(downloadUrl),
    disabled: false,
  };

  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={createDate} />
        <Image src={`/image/complete-${index}.png`} alt="#" width={148} height={137} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{handwriting.name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <S.LikeDiv>
              <Image
                src={isMypage ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
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
            <BaseHashTags hashTagIdList={tags} direction="row" />
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  );
}

export default ProfileFontCard;
