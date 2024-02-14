import * as S from './style';
import * as Comp from '@/components'
import Link from 'next/link';
import Image from 'next/image';
import { ProfileBoxProps } from 'types';

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
  const { imageUrl, nickname, badge, imgSize, fontSize, memberId, className } = props;
  return (
    <S.ProfileBoxWrapper className={className}>
      <S.ProfileImageWrapper size={imgSize}>
        <div>
          {
            imageUrl ? <Image src={imageUrl} alt="#" fill priority sizes="10vw" style={{ objectFit: 'cover' }} /> :
            <Comp.NoProfileImage width={imgSize} height={imgSize} memberId={memberId} children={nickname as string}/>
          }
        </div>
      </S.ProfileImageWrapper>
      <S.BadgeNameDiv fontSize={fontSize}>
        {badge && (
          <S.BadgeWrapper fontSize={fontSize}>
            <Image src="/image/weekly-medal.svg" alt="#" fill />
          </S.BadgeWrapper>
        )}
        <span>{nickname}</span>
      </S.BadgeNameDiv>
    </S.ProfileBoxWrapper>
  );
}

ProfileBox.styled = S.ProfileBoxWrapper;
