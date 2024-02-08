'use client';

import React, { ChangeEvent, useState, useRef } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import Image from 'next/image';

export default function FontStoryWritePage() {
  // 현재 유저가 제작은 했지만 이야기는 쓰지 않은 손글씨 정보를 받아야함
  const { memberId, unusedHandwritings } = {
    memberId: 1,
    unusedHandwritings: [
      {
        handwritingId: 1,
        name: '손만두체',
      },
      {
        handwritingId: 2,
        name: '손만두체2',
      },
    ],
  };

  const ref = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('');
  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const refText = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');
  const handleTextOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [handwriting, setHandwriting] = useState<number | null>(null);

  //썸네일 부분
  const [currentStep, setCurrentStep] = useState(1);

  const OnHandleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const OnhandleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  //태그 캐로셀 부분

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % unusedHandwritings.length);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(unusedHandwritings.length - 1);
    }
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
                  {unusedHandwritings.map((unusedHandwriting, index) => {
                    return (
                      <S.TagButton
                        key={unusedHandwriting.handwritingId}
                        type="button"
                        onClick={() => {
                          if (handwriting === unusedHandwriting.handwritingId) {
                            setHandwriting(null);
                          } else {
                            setHandwriting(unusedHandwriting.handwritingId);
                          }
                        }}
                        disabled={false}
                        className={[handwriting === unusedHandwriting.handwritingId].toString()}
                        currentIndex={currentIndex}
                        index={index}
                      >
                        {unusedHandwriting.name}
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
              <Comp.Thumbnail onNext={OnHandleNext} onBack={OnhandleBack} />
            </S.RightWrapper>
          </S.UpperWrapper>
          <S.WriteTextWrapper>
            <S.WriteTitleRequest>이야기를 적어주세요</S.WriteTitleRequest>
            <S.TextWrapper>
              <S.TextInputAreaWrapper>
                <S.TextInputPlaceholder $isempty2={!text}>
                  <span>작가님의 이야기를 적어주세요</span>
                </S.TextInputPlaceholder>
                <S.TextInputArea ref={refText} id="text" value={text} onChange={handleTextOnChange} />
              </S.TextInputAreaWrapper>
            </S.TextWrapper>
          </S.WriteTextWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton type="button" onClick={() => console.log('11')} disabled={false}>
              <span>작성 완료</span>
            </S.SubmitButton>
          </S.ButtonWrapper>
        </S.WriteDiv>
      </S.WriteWrapper>
    </>
  );
}
