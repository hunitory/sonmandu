import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';

type ProfileBoxProps = {
	id: number;
	src: string;
	nickname: React.ReactNode;
	vertical: boolean;
	badge: boolean;
	badgesize?: number;
	noLink?: boolean;
};

/**
 * 
 * @param id: memberId
 * @param src: 이미지 url
 * @param nickname: 닉네임
 * @param vertical: 프로필박스 방향(세로면 true)  ??
 * @param badge: badge장착 여부
 * @param badgesize: badge 사이즈(프로필박스가 놓이는 곳에 따라 정해짐)
 * @param noLink: 링크 활성화 안하고 싶으면 true
 * @returns 
 */

export default function ProfileBox(props: ProfileBoxProps) {
	const { id, src, nickname, vertical, badge, badgesize, noLink } = props;
	const content = (
		<S.ProfileBoxWrapper vertical={vertical}>
			<Image src={src} alt="#" layout='responsive' width={40} height={40} />
			<S.BadgeNameWrapper>
				{badge && (
					<Image 
					src='/image/profile/weekly-medal.svg'
					alt='#'
					width={badgesize}
					height={badgesize}
					/>
				)}
				{nickname}
			</S.BadgeNameWrapper>
		</S.ProfileBoxWrapper>
	);
	return noLink ? (
		content
	) : (
		<Link href={`/profile/${id}`}>{content}</Link>
	)
}

ProfileBox.styled = S.ProfileBoxWrapper;