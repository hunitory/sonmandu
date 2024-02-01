import React, { ChangeEvent, useRef, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { PALETTE } from 'styles';
import { BaseHashTags, BaseInputWrapper } from 'components';

function SearchOptions() {
  const ref = useRef<HTMLInputElement>(null);
  const [searchOptionValues, setSearchOptionValues] = useState<{
    title: string;
    sort: string;
    hashTags: string[];
  }>({
    title: '',
    sort: '',
    hashTags: [],
  });

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchOptionValues((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleFocusInput = () => {
    ref.current?.focus();
  };

  return (
    <S.UserInteractionWrapper onClick={handleFocusInput}>
      <S.SearchOptionsContainer>
        <BaseInputWrapper
          id="search-font"
          type="text"
          value={searchOptionValues.title}
          onChange={handleTitleOnChange}
        >
          <BaseInputWrapper.Label className="search-font-label">
            <BaseInputWrapper.Input
              ref={ref}
              placeholder="폰트명으로 검색해보세요!"
            />
            <S.StyledButton
              type="button"
              disabled={false}
              bgColor={PALETTE.MAIN_ORANGE}
            >
              <Image
                src={'/image/search-icon.svg'}
                alt="검색"
                width={16}
                height={16}
              />
            </S.StyledButton>
          </BaseInputWrapper.Label>
        </BaseInputWrapper>
        <S.StyledButton type="button" disabled={false} bgColor="white">
          <Image
            src={'/image/filter-icon.svg'}
            alt="필터"
            width={20}
            height={20}
          />
        </S.StyledButton>
      </S.SearchOptionsContainer>
      <S.FilterListsWrapper onClick={handleFocusInput}>
        <span>정렬</span>
        {sortOptions.map((option) => (
          <BaseHashTags.OneTag
            type="button"
            disabled={false}
            key={option.value}
            onClick={() => console.log(`option.id :`, option.value)}
          >
            {option.text}
          </BaseHashTags.OneTag>
        ))}
        <span>종류</span>
        {WHOLE_HASH_TAGES.map((hashTag) => (
          <BaseHashTags.OneTag
            type="button"
            disabled={false}
            key={hashTag.id}
            onClick={() => console.log(`hashTag.id :`, hashTag.id)}
          >
            {hashTag.text}
          </BaseHashTags.OneTag>
        ))}
      </S.FilterListsWrapper>
    </S.UserInteractionWrapper>
  );
}

export default SearchOptions;

const sortOptions = [
  { value: 'desc', text: '가장 최근순' },
  { value: 'popular', text: '인기 많은순' },
  { value: 'hit', text: '조회수 많은순' },
  { value: 'likes', text: '좋아요 많은순' },
  { value: 'download', text: '다운로드 많은순' },
];

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
