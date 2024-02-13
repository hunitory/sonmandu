import React, { useMemo } from 'react';
import * as S from './style';
import { PALETTE } from 'styles';

interface NoProfileImageProps {
  memberId: number;
  width: number;
  height: number;
  children: string;
}

function NoProfileImage({ memberId, width, height, children }: NoProfileImageProps) {
  const randomIdxUsingMemberId = useMemo(() => {
    return memberId % 5;
  }, []);

  const createRandomStyleByIndex = () => {
    if (randomIdxUsingMemberId == 0 || randomIdxUsingMemberId == 1)
      return { $color: 'white', $imgIndex: randomIdxUsingMemberId };

    return { $color: PALETTE.MAIN_BLACK, $imgIndex: randomIdxUsingMemberId };
  };

  return (
    <S.FirstOfNickname $width={width} $height={height} {...createRandomStyleByIndex()}>
      {children.slice(0, 1)}
    </S.FirstOfNickname>
  );
}

export default NoProfileImage;
