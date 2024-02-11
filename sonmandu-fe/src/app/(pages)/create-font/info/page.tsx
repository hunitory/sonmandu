'use client';

import React, { useEffect } from 'react';
import * as Comp from 'components';
import * as Styled from './style';
import { WHOLE_HASH_TAGES } from '@/constants';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { uploadedFilesState, fontInfoState } from 'store/index';
import { instanceMultipartContent, instanceJsonContent } from 'apis/_instance';

interface CreateQueryStringArgs {
  name: 'tagIdList';
  value: string;
}

export default function FontInfo() {
  const router = useRouter();
  const [fontInfo, setfontNameState] = useRecoilState(fontInfoState);
  const uploadedFiles = useRecoilValue(uploadedFilesState);

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfontNameState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleOptionsClick = ({ name, value }: CreateQueryStringArgs) => {
    setfontNameState((prevState) => {
      if (name === 'tagIdList') {
        const selectedTags = prevState.tagIdList;
        const maxSelectableTags = 3;
        const tagValue = Number(value);
        const isTagSelected = selectedTags.includes(tagValue);

        if (!isTagSelected && selectedTags.length < maxSelectableTags) {
          return { ...prevState, tagIdList: [...selectedTags, tagValue] };
        } else if (isTagSelected) {
          const updatedTags = selectedTags.filter((tag) => tag !== tagValue);
          return { ...prevState, tagIdList: updatedTags };
        }
      }
      return { ...prevState };
    });
  };

  const onBack = () => {
    router.back();
  };
  const onNext = () => {
    const isFontNameValid = fontInfo.name.trim().length > 0;
    const isTagsSelected = fontInfo.tagIdList.length > 0;
    const info = {
      name: fontInfo.name,
      tagIdList: fontInfo.tagIdList,
    };

    if (isFontNameValid && isTagsSelected && uploadedFiles.length > 0) {
      const apiUrl = '/handwritings';

      const formData = new FormData();
      const jsonApplicationData = JSON.stringify(info);
      const ApplyInfo = new Blob([jsonApplicationData], { type: 'application/json' });
      formData.append('info', ApplyInfo);
      uploadedFiles.forEach((file) => {
        formData.append('image', file);
      });

      instanceMultipartContent
        .post(apiUrl, formData)
        .then((response) => {
          console.log('POST 요청 성공:', response.data);
          router.push('/create-font/complete');
        })
        .catch((error) => {
          console.error('POST 요청 실패:', error);
          alert('업로드에 실패했습니다.');
        });
    } else {
      if (!isFontNameValid) {
        alert('손글씨 이름 정보가 올바르지 않습니다.');
      } else if (!isTagsSelected) {
        alert('태그 정보가 올바르지 않습니다.');
      } else if (uploadedFiles.length === 0) {
        alert('파일을 다시 확인해주세요.');
      }
    }
  };

  useEffect(() => {
    console.log(fontInfo);
    console.log(uploadedFiles);
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
              <Styled.ContentFontNameInputPlaceholder $fontname={!fontInfo.name}>
                <span>손글씨 이름</span>을 입력해주세요. 최대 20자
              </Styled.ContentFontNameInputPlaceholder>
              <Styled.ContentFontNameInput id="name" type="text" value={fontInfo.name} onChange={NameInput} />
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
                  selected={fontInfo.tagIdList.includes(Number(hashTag.id))}
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
