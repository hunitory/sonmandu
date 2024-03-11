import React from 'react';
import * as S from './style';

interface SkeletonCardProps {
  ratio: string;
}

export default function SkeletonCard({ ratio }: SkeletonCardProps) {
  return <S.SkeletonCard $ratio={ratio}></S.SkeletonCard>;
}
