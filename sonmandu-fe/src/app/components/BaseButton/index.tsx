'use client';

import React from 'react';
import * as S from './style';
import { PALETTE, PaletteType, ValueOfPalette } from 'styles/palette';

type BaseButtonProps = {
  children: React.ReactNode;
  onClick: () => void | null;
  $disable: boolean;
  $bgColor: ValueOfPalette<PaletteType>;
};

export default function BaseButton(props: BaseButtonProps) {
  const { children, onClick, $disable, $bgColor } = props;

  console.log(
    `test() :`,
    Object.keys(PALETTE).find((key: string) => PALETTE[key] === $bgColor),
  );

  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>;
}
