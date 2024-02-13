import React, { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { PALETTE } from 'styles';

interface NoProfileImageProps {
  memberId: number;
  width: string;
  height: string;
  children: string;
}

function NoProfileBoxImage({ memberId, width, height, children }: NoProfileImageProps) {

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
      {typeof children === 'string' ? children.slice(0, 1) : null}
    </S.FirstOfNickname>
  );
}

export default NoProfileBoxImage;
