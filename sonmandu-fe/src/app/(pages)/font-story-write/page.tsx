'use client';

import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import * as API from '@/apis';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { instanceMultipartContent } from 'apis/_instance';

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

export default function FontStoryWritePage() {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('');
  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const refText = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>('');
  const handleTextOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const [handwriting, setHandwriting] = useState<number | null>(null);

  const [completedFonts, setCompletedFonts] = useState<MyFont[]>([]);

  const [selectedFile, setSelectedFile] = useState<File>();

  //태그 캐로셀 부분

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % completedFonts.length);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(completedFonts.length - 1);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  // 만든 폰트 목록 조회 ( 이야기가 안쓰인 것만 뽑기 )
  const { data: fontRes, isFetching: isFontFetching } = useQuery({
    queryKey: ['my-font'],
    queryFn: () => API.handwritingStory.handwritingStoryUnwrittenFont(),
  });

  useEffect(() => {
    if (fontRes) {
      setCompletedFonts(fontRes.data);
    }
  }, [fontRes]);

  const PostStory = () => {
    const data = {
      handwritingId: handwriting,
      title: title,
      content: content,
    };

    const apiUrl = '/handwritings/story';
    const formData = new FormData();
    const jsonApplicationData = JSON.stringify(data);
    const StoryData = new Blob([jsonApplicationData], { type: 'application/json' });
    formData.append('data', StoryData);
    if (selectedFile) {
      formData.append('thumbnail', selectedFile);
    }

    instanceMultipartContent
      .post(apiUrl, formData)
      .then((response) => {
        alert('이야기가 작성되었습니다.');
        router.push('font-stories');
      })
      .catch((error) => {
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
                  <S.CarouselBackButtonWrapper>
                    <div onClick={handlePrev}>
                      <Image src={'/image/nexticon.png'} alt="back" width={14} height={14} />
                    </div>
                  </S.CarouselBackButtonWrapper>
                  {completedFonts.map((font: MyFont, index: number) => {
                    return (
                      <S.TagButton
                        key={font.handwritingId}
                        type="button"
                        onClick={() => {
                          if (handwriting === font.handwritingId) {
                            console.log(font.handwritingId);
                            setHandwriting(null);
                          } else {
                            setHandwriting(font.handwritingId);
                            console.log(font.handwritingId);
                          }
                        }}
                        disabled={false}
                        className={[handwriting === font.handwritingId].toString()}
                        currentIndex={currentIndex}
                        index={index}
                      >
                        {font.name}
                      </S.TagButton>
                    );
                  })}
                  <S.CarouselNextButtonWrapper>
                    <div onClick={handleNext}>
                      <Image src={'/image/nexticon.png'} alt="back" width={14} height={14} />
                    </div>
                  </S.CarouselNextButtonWrapper>
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
