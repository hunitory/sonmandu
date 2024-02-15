import { MouseEvent } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { ProfileBoxProps } from 'types';
import { useRouter } from 'next/navigation';

/**
 *
 * @param src: 이미지 url
 * @param nickname: 닉네임
 * @param badge: badge장착 여부
 * @param imgSize: 프사 사진크기(string)
 * @param fontSize: 배지, 글자 크기(string)
 * @param memberId
 * @param className: 추가 스타일링
 * @returns
 */

export default function ProfileBox(props: ProfileBoxProps) {
  const router = useRouter();
  const { imageUrl, nickname, badge, imgSize, fontSize, memberId, className } = props;
  const handleProfileBoxClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    router.push(`/profile/${memberId}`);
  } 
  return (
    <S.ProfileBoxWrapper className={className} onClick={handleProfileBoxClick}>
      <S.ProfileImageWrapper size={imgSize}>
        <div>
          {imageUrl ? (
            <Comp.CustomImage src={imageUrl} alt="#" fill priority sizes="10vw" style={{ objectFit: 'cover' }} />
          ) : (
            <Comp.NoProfileImage width={imgSize} height={imgSize} memberId={memberId} children={nickname as string} />
          )}
        </div>
      </S.ProfileImageWrapper>
      <S.BadgeNameDiv fontSize={fontSize}>
        {badge && (
          <S.BadgeWrapper fontSize={fontSize}>
            <Comp.CustomImage src="/image/weekly-medal.png" alt="#" fill className={'badge'} />
          </S.BadgeWrapper>
        )}
        <span>{nickname}</span>
      </S.BadgeNameDiv>
    </S.ProfileBoxWrapper>
  );
}

ProfileBox.styled = S.ProfileBoxWrapper;
