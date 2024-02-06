import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { BaseButton, BaseHashTags } from 'components';
import { Handwriting, BaseButtonProps } from 'types';
import { useRouter } from 'next/navigation';

function ProfileFontCardMaking({ isMypage, handwriting }: { isMypage: boolean; handwriting: Handwriting }) {
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
        <Image src={`/image/producing-${state.toString()}.png`} alt="#" priority width={144} height={179} />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{handwriting.name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <Image
              src={isMypage ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
              alt="#"
              width={30}
              height={28}
            />
            <Image src="/image/download.png" alt="#" width={30} height={30} />
          </S.LowerContentsUp>
          <S.LowerContentsDown>
            <BaseHashTags hashTagIdList={tags} direction="row" />
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  );
}

export default ProfileFontCardMaking;
