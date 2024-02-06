import React from 'react';
import * as S from './style';
import { BaseButtonProps, BaseHasTagsProps } from 'types';

function BaseHashTags({ hashTagIdList, direction, className }: BaseHasTagsProps) {
  const matchedHashTags = WHOLE_HASH_TAGES.filter((hashTag) => hashTagIdList.includes(hashTag.id) && hashTag);

  return (
    <S.HashTagsWrapper direction={direction} className={className}>
      {matchedHashTags.map((hashTag) => (
        <S.HashTag type="button" disabled={false} key={hashTag.id}>
          {hashTag.text}
        </S.HashTag>
      ))}
    </S.HashTagsWrapper>
  );
}

BaseHashTags.OneTag = (props: BaseButtonProps & { calssName?: string }) => S.HashTag({ ...props });

export default BaseHashTags;

const WHOLE_HASH_TAGES = [
  { id: 0, text: '귀여운' },
  { id: 1, text: '또박또박한' },
  { id: 2, text: '삐뚤삐뚤한' },
  { id: 3, text: '둥글둥글한' },
  { id: 4, text: '추억이 담긴' },
  { id: 5, text: '어른스러운' },
  { id: 6, text: '사랑스러운' },
  { id: 7, text: '개성있는' },
  { id: 8, text: '꾸밈없는' },
  { id: 9, text: '우아한' },
  { id: 10, text: '휘갈긴' },
  { id: 11, text: '학생스러운' },
  { id: 12, text: '자유로운' },
  { id: 13, text: '절제된' },
  { id: 14, text: '섬세한' },
  { id: 15, text: '아기자기한' },
  { id: 16, text: '품위있는' },
  { id: 17, text: '무게감있는' },
  { id: 18, text: '깔끔한' },
  { id: 19, text: '읽기 좋은' },
];
