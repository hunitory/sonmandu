import React from 'react';
import * as S from './style';
import Image from 'next/image';

interface Trophy {
    weight: number;
    createDate: string;
}

function ProfileTrophy({ Trophies }: { Trophies : Trophy[] }) {
	return (
		<S.ProfileTrophyWrapper>
			{
				Trophies.map((trophy: Trophy, index: number) => {
					return (
						<Image 
							key={index}
							src={`/image/medal-${trophy.weight}.png`}
							alt='#'
							width={70}
							height={70}
						/>
					)
				})
			}
		</S.ProfileTrophyWrapper>
	)
}

export default ProfileTrophy;