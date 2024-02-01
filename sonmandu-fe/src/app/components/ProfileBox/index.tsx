import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';

type ProfileBoxProps = {
  id: number;
  src: string;
  nickname: React.ReactNode;
  vertical: boolean;
  badge: boolean;
  fontSize: string;
  noLink?: boolean;
};

/**
 *
 * @param id: memberId
 * @param src: 이미지 url
 * @param nickname: 닉네임
 * @param vertical: 프로필박스 방향(세로면 true)  ??
 * @param badge: badge장착 여부
 * @param fontSize: 배지, 글자 크기(string)
 * @param noLink: 링크 활성화 안하고 싶으면 true
 * @returns
 */

export default function ProfileBox(props: ProfileBoxProps) {
  const { id, src, nickname, vertical, badge, fontSize, noLink } = props;
  const content = (
    <S.ProfileBoxWrapper vertical={vertical}>
      <S.ProfileImageWrapper>
        <div>
          <Image
            src={src}
            alt="#"
            layout="responsive"
            objectFit="cover"
            width={40}
            height={40}
          />
        </div>
      </S.ProfileImageWrapper>
      <S.BadgeNameDiv fontSize={fontSize}>
        <S.BadgeWrapper fontSize={fontSize}>
          {badge && (
            <Image src="/image/weekly-medal.svg" alt="#" layout="fill" />
          )}
        </S.BadgeWrapper>
        <span>{nickname}</span>
      </S.BadgeNameDiv>
    </S.ProfileBoxWrapper>
  );
  return noLink ? content : <Link href={`/profile/${id}`}>{content}</Link>;
}

ProfileBox.styled = S.ProfileBoxWrapper;
