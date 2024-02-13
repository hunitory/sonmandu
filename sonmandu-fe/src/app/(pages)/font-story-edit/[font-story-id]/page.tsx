'use client';

import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import * as API from '@/apis';
import Image from 'next/image';
import { instanceMultipartContent } from 'apis/_instance';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { storyInfoState } from 'store/atoms';

interface MyFont {
  handwritingId: number;
  name: string;
  state: number;
  downloadUrl: string;
  hitCount: number;
  likeCount: number;
  downloadCount: number;
  tag: number[];
  isLike: boolean;
}

export default function FontStoryEditPage() {
  // 정보 요청
  const params = useParams();
  const queryKey = ['font-story-detail', params['font-story-id']];
  const { data: res, isFetching: isFontStoryDetailFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.handwritingStory.handwritingStoryDetail({ fontStoryId: params['font-story-id'] as string }),
  });

  // 기존데이터 불러오기
  const storyInfo = useRecoilValue(storyInfoState);
  console.log('hi');
  console.log(storyInfo);

  const router = useRouter();

  const ref = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(storyInfo.title);
  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const refText = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>(storyInfo.content);
  const handleTextOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // const [handwriting, setHandwriting] = useState<number | null>(storyInfo.handwritingId);

  const [selectedFile, setSelectedFile] = useState<File | undefined>(new File([new Blob()], storyInfo.thumbnail));

  //썸네일 부분
  const [currentStep, setCurrentStep] = useState(1);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const PostStory = () => {
    const data = {
      handwritingId: storyInfo.handwritingId,
      title: title,
      content: content,
    };

    const apiUrl = `/handwritings/story/${storyInfo.handwritingStoryId}`;

    const formData = new FormData();
    const jsonApplicationData = JSON.stringify(data);
    const StoryData = new Blob([jsonApplicationData], { type: 'application/json' });
    formData.append('data', StoryData);
    if (selectedFile) {
      formData.append('thumbnail', selectedFile);
    }

    instanceMultipartContent
      .put(apiUrl, formData)
      .then((response) => {
        console.log('POST 요청 성공', response);
        router.push(`/font-story-detail/${storyInfo.handwritingStoryId}`);
      })
      .catch((error) => {
        console.log('POST 요청 실패:', error);
        alert('업로드에 실패했습니다.');
      });
  };
  return (
    <>
      <S.BackgroundWrapper></S.BackgroundWrapper>
      <S.WriteWrapper>
        <S.WriteDiv>
          <S.WriteIndexSpan>이야기 작성하기</S.WriteIndexSpan>
          <S.UpperWrapper>
            <S.LeftWrapper>
              <S.WriteTitleWrapper>
                <S.WriteTitleRequest>이야기 제목을 입력해주세요</S.WriteTitleRequest>
                <S.TitleWrapper>
                  <S.TitleInputWrapper>
                    <S.TitleInputPlaceholder $isempty={!title}>
                      <span>전체목록에 보여집니다</span>
                    </S.TitleInputPlaceholder>
                    <S.TitleInput ref={ref} id="title" type="text" value={title} onChange={handleTitleOnChange} />
                  </S.TitleInputWrapper>
                </S.TitleWrapper>
              </S.WriteTitleWrapper>
              <S.WriteTagWrapper>
                <S.WriteTitleRequest>어떤 글씨체에 대해 이야기를 쓰시겠어요?</S.WriteTitleRequest>
                <S.TagWrapper>
                  <S.TagButton type="button" disabled={false} className={'true'}>
                    {storyInfo.handwritingName}
                  </S.TagButton>
                  <S.CarouselNextButtonWrapper></S.CarouselNextButtonWrapper>
                </S.TagWrapper>
              </S.WriteTagWrapper>
            </S.LeftWrapper>
            <S.RightWrapper>
              <Comp.Thumbnail onFileSelect={handleFileSelect} />
            </S.RightWrapper>
          </S.UpperWrapper>
          <S.WriteContentWrapper>
            <S.WriteTitleRequest>이야기를 적어주세요</S.WriteTitleRequest>
            <S.ContentWrapper>
              <S.ContentInputAreaWrapper>
                <S.ContentInputPlaceholder $isempty2={!content}>
                  <span>작가님의 이야기를 적어주세요</span>
                </S.ContentInputPlaceholder>
                <S.ContentInputArea ref={refText} id="text" value={content} onChange={handleTextOnChange} />
              </S.ContentInputAreaWrapper>
            </S.ContentWrapper>
          </S.WriteContentWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton type="button" onClick={PostStory} disabled={false}>
              <span>작성 완료</span>
            </S.SubmitButton>
          </S.ButtonWrapper>
        </S.WriteDiv>
      </S.WriteWrapper>
    </>
  );
}
