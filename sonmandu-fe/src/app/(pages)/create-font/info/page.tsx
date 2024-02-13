'use client';

import React, { useEffect, useState } from 'react';
import * as Comp from 'components';
import * as Styled from './style';
import * as API from '@/apis';
import { WHOLE_HASH_TAGES } from '@/constants';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { uploadedFilesState, fontInfoState } from 'store/index';
import { instanceMultipartContent } from 'apis/_instance';
import { useMutation } from '@tanstack/react-query';

interface CreateQueryStringArgs {
  name: 'tagIdList';
  value: string;
}

export default function FontInfo() {
  const router = useRouter();
  const [fontInfo, setfontNameState] = useRecoilState(fontInfoState);
  const uploadedFiles = useRecoilValue(uploadedFilesState);

  useEffect(() => {
    const token = !!localStorage.getItem('access_token');
    if (!token) {
      alert('로그인이 필요합니다.');
      router.push('/');
    }
  });

  const NameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfontNameState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  // 태그 선택
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

  // 이전 단계
  const onBack = () => {
    router.back();
  };

  // 다음 단계( 신청 )
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

  const { mutate: DuplicationFontCheck } = useMutation({
    mutationKey: ['Dulication-Font-Check'],
    mutationFn: () => API.handwritingmaking.DulicationFontCheck({ name: fontInfo.name }),
    onSuccess: (res) => {
      if (res.data) {
        alert('사용 가능한 손글씨 이름입니다.');
      } else {
        alert('이미 존재하는 손글씨 이름입니다.');
        setfontNameState((prevState) => ({
          ...prevState,
          name: '',
        }));
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Enter 키가 눌렸을 때
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 이벤트 방지
      DuplicationFontCheck(); // 중복 체크 로직 호출
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (fontInfo) {
        e.returnValue = '입력한 정보가 저장되지 않습니다. 페이지를 떠나시겠습니까?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [fontInfo]);

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
            <Styled.ContentFontNameInputWithButtonWrapper>
              <Styled.ContentFontNameInputWrapper>
                <Styled.ContentFontNameInputPlaceholder $fontname={!fontInfo.name}>
                  <span>손글씨 이름</span>을 입력해주세요. 최대 20자
                </Styled.ContentFontNameInputPlaceholder>
                <div onKeyDown={handleKeyDown}>
                  <Styled.ContentFontNameInput id="name" type="text" value={fontInfo.name} onChange={NameInput} />
                </div>
              </Styled.ContentFontNameInputWrapper>
              <Styled.DuplicationCheckButton type="button" disabled={false} onClick={DuplicationFontCheck}>
                <p>중복체크</p>
              </Styled.DuplicationCheckButton>
            </Styled.ContentFontNameInputWithButtonWrapper>
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
