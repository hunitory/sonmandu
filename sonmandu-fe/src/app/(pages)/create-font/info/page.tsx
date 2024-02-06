'use client';

import React, { useEffect, useState } from 'react';
import * as Comp from 'components';
import * as Styled from './style';
import { WHOLE_HASH_TAGES } from '@/constants';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { Atom } from 'store';
import axios from 'axios';


interface selectedHashTags {
  tagIdList: string[];
}

interface CreateQueryStringArgs {
  name: 'tagIdList';
  value: string;
}

export default function FontInfo() {
  const router = useRouter();
  const [FontName, setFontName] = useState('');
  const uploadedFiles = useRecoilValue(Atom.uploadedFilesState)

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontName(event.target.value);
  };
  const [selectedHashTags, setSelectedHashTags] = useState<selectedHashTags>({ tagIdList: [] });

  const handleOptionsClick = ({ name, value }: CreateQueryStringArgs) => {
    setSelectedHashTags((prev) => {
      if (name === 'tagIdList') {
        const selectedTags = prev.tagIdList;
        const maxSelectableTags = 3;
        const isTagSelected = selectedTags.includes(value);

        if (!isTagSelected && selectedTags.length < maxSelectableTags) {
          return { ...prev, tagIdList: [...selectedTags, value] };
        } else if (isTagSelected) {
          const updatedTags = selectedTags.filter((tag) => tag !== value);
          return { ...prev, tagIdList: updatedTags };
        }
      }
      return { ...prev };
    });
  };

  const onBack = () => {
    router.back()
  }
  const onNext = () => {
    // API 엔드포인트 URL
    const apiUrl = process.env.NEXT_PUBLIC_DEVELOP_END_POINT + '/handwritings'; // 실제 엔드포인트에 맞게 수정
  
    // 요청 바디에 보낼 데이터
    const requestData = {
      FontName: FontName,
      selectedHashTags: selectedHashTags.tagIdList,
      uploadedFiles: uploadedFiles.map(file => file.name), // 파일 이름만 추출하거나 필요한 방식으로 처리
    };
  
    // Axios를 사용하여 POST 요청 보내기
    axios.post(apiUrl, requestData)
      .then(response => {
        console.log('POST 요청 성공:', response.data);
        // 필요한 처리 로직 추가
        router.push('/create-font/complete'); // 완료 페이지로 이동
      })
      .catch(error => {
        console.error('POST 요청 실패:', error);
      });
  };

  useEffect(() => {
    console.log(FontName);
    console.log(selectedHashTags);
    console.log(uploadedFiles)
  });
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
            <Styled.ContentFontNametTitle>손글씨 이름</Styled.ContentFontNametTitle>
            <Styled.ContentFontNametContent>
              입력하신 이름 앞에 <span>'손만두'</span>가 기본적으로 붙습니다. ex) 손만두 홍길동체
            </Styled.ContentFontNametContent>
            <Styled.ContentFontNameInputWrapper>
              <Styled.ContentFontNameInputPlaceholder $fontname={!FontName}>
                <span>손글씨 이름</span>을 입력해주세요. 최대 20자
              </Styled.ContentFontNameInputPlaceholder>
              <Styled.ContentFontNameInput id="name" type="text" value={FontName} onChange={NameInput} />
            </Styled.ContentFontNameInputWrapper>
          </Styled.ContentFontNameWrapper>
          <Styled.ContentFontTagWrapper>
            <Styled.ContentFontTagTitle>손글씨 특징</Styled.ContentFontTagTitle>
            <Styled.ContentFontTagtContent>최대 3개까지 선택 가능합니다.</Styled.ContentFontTagtContent>
            <Styled.ContentFontTags>
              {WHOLE_HASH_TAGES.map((hashTag) => (
                <Styled.ContentFontTag
                  type="button"
                  disabled={false}
                  key={hashTag.id}
                  selected={selectedHashTags.tagIdList.includes(String(hashTag.id))}
                  onClick={() => handleOptionsClick({ name: 'tagIdList', value: String(hashTag.id) })}
                >
                  {hashTag.text}
                </Styled.ContentFontTag>
              ))}
            </Styled.ContentFontTags>
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
