import React from 'react';
import * as S from './style';
import Image from 'next/image';
import * as Comp from '@/components';
import { Trophy } from 'types';

function ProfileTrophy({ Trophies }: { Trophies: Trophy[] | undefined }) {
  return (
    <S.ProfileTrophyWrapper>
      {Trophies?.map((trophy: Trophy, index: number) => {
        return (
          <Comp.CustomImage key={index} src={`/image/medal-${trophy.weight}.png`} alt="#" width={70} height={70} />
        );
      })}
    </S.ProfileTrophyWrapper>
  );
}

export default ProfileTrophy;
