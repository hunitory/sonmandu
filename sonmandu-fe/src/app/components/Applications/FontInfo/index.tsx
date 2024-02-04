import React, { useState } from 'react';
import * as Comp from 'components';
import * as Styled from './style';
import { WHOLE_HASH_TAGES } from '@/constants';
import { FontInfoProps } from 'types';

export default function FontInfo(props: FontInfoProps) {
  const { onBack, onNext } = props;
  const [FontName, setFontName] = useState('');

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontName(event.target.value);
  };
  const [selectedHashTags, setSelectedHashTags] = useState<number[]>([]);

  const toggleHashTag = (id: number) => {
    setSelectedHashTags((prev) => {
      if (prev.includes(id)) {
        return prev.filter((tagId) => tagId !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.StepWrapper>
        <Styled.firstnone>
          <Comp.FontStep value="시작하기" isactive="true"></Comp.FontStep>
        </Styled.firstnone>
        <Comp.FontStep value="파일 업로드" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="손글씨 정보 입력" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="신청완료" isactive="false"></Comp.FontStep>
      </Styled.StepWrapper>
      <Styled.Card>
        <Styled.ContentWrapper>
          <Styled.ContentFontNameWrapper>
            <Styled.ContentFontNametTitle>
              손글씨 이름
            </Styled.ContentFontNametTitle>
            <Styled.ContentFontNametContent>
              입력하신 이름 앞에 <span>'손만두'</span>가 기본적으로 붙습니다.
              ex) 손만두 홍길동체
            </Styled.ContentFontNametContent>
            <Styled.ContentFontNameInputWrapper>
              <Styled.ContentFontNameInputPlaceholder FontName={!FontName}>
                <span>손글씨 이름</span>을 입력해주세요. 최대 20자
              </Styled.ContentFontNameInputPlaceholder>
              <Styled.ContentFontNameInput
                id="손글씨 이름"
                type="text"
                value={FontName}
                onChange={NameInput}
              />
            </Styled.ContentFontNameInputWrapper>
          </Styled.ContentFontNameWrapper>
          <Styled.ContentFontTagWrapper>
            <Styled.ContentFontTagTitle>손글씨 특징</Styled.ContentFontTagTitle>
            <Styled.ContentFontTagtContent>
              최대 3개까지 선택 가능합니다.
            </Styled.ContentFontTagtContent>
            <Styled.ContentFontTags
              hashTagIdList={WHOLE_HASH_TAGES.map((tag) => tag.id)}
              direction="row"
            ></Styled.ContentFontTags>
          </Styled.ContentFontTagWrapper>
        </Styled.ContentWrapper>
        <Styled.ButtonWrapper>
          <Styled.BackButton onClick={onBack} type="button" disabled={false}>
            <Styled.BackButtonText>이전 단계</Styled.BackButtonText>
          </Styled.BackButton>
          <Styled.NextButton onClick={onNext} type="button" disabled={false}>
            <Styled.NextButtonText>신청 하기</Styled.NextButtonText>
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
}
