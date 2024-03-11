import React from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';
import { BaseButton, BaseHashTags } from 'components';
import { ProfileFontCardProps, BaseButtonProps } from 'types';
import { useRouter } from 'next/navigation';

function ProfileFontCardMaking({ profileFontCardProps }: { profileFontCardProps: ProfileFontCardProps }) {
  const router = useRouter();

  const { downloadCount, downloadUrl, handwritingId, hitCount, isLike, likeCount, name, createDate, state, tag } =
    profileFontCardProps;

  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => router.push(downloadUrl),
    disabled: false,
  };

  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <Comp.CustomImage src={`/image/producing-${state?.toString()}.png`} alt="#" priority width={144} height={179} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <Image
              src={isLike ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
              alt="#"
              width={30}
              height={28}
            />
            <Comp.CustomImage src="/image/download.png" alt="#" width={30} height={30} />
          </S.LowerContentsUp>
          <S.LowerContentsDown>
            <BaseHashTags hashTagIdList={tag} direction="row" />
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  );
}

export default ProfileFontCardMaking;
