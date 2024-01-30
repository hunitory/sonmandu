import * as S from './style';
import Link from 'next/link';

interface User {
	memberId: string;
	nickname: string;
	image_url: string;
	introduction: string;
}

interface ProfileBoxProps {
	user: User
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ user }) => {
	return (
		<Link href={`/profile/${user.memberId}`}>
			<S.ProfileBoxWrapper>
				<img src={user.image_url} alt="#" />
				<span>{user.nickname}</span>
			</S.ProfileBoxWrapper>
		</Link>
	)
}

export default ProfileBox;