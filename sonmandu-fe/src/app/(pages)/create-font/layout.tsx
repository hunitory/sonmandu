import React from 'react';
import * as S from './_style';

export default function CreateFontLayout({
  children,
  currentStep,
}: Readonly<{
  children: React.ReactNode;
  currentStep: number;
}>) {
  console.log('현재단계', currentStep);
  return (
    <S.FontCreateMainWrapper>
      <S.FontCreateMainContainer>
        <S.FontCreateStepWrapper>
          <S.FontCreateStep>
            <p>시작하기</p>
            <S.FontCreateStepSign>
              <S.FontCreateStepLineWrapper>
                <S.FontCreateStepLine></S.FontCreateStepLine>
              </S.FontCreateStepLineWrapper>
              <S.FontCreateStepCircle></S.FontCreateStepCircle>
            </S.FontCreateStepSign>
          </S.FontCreateStep>

          <S.FontCreateStep>
            <p>파일 업로드</p>
            <S.FontCreateStepSign>
              <S.FontCreateStepLineWrapper>
                <S.FontCreateStepLine></S.FontCreateStepLine>
              </S.FontCreateStepLineWrapper>
              <S.FontCreateStepCircle></S.FontCreateStepCircle>
            </S.FontCreateStepSign>
          </S.FontCreateStep>

          <S.FontCreateStep>
            <p>손글씨 정보 입력</p>
            <S.FontCreateStepSign>
              <S.FontCreateStepLineWrapper>
                <S.FontCreateStepLine></S.FontCreateStepLine>
              </S.FontCreateStepLineWrapper>
              <S.FontCreateStepCircle></S.FontCreateStepCircle>
            </S.FontCreateStepSign>
          </S.FontCreateStep>

          <S.FontCreateStep>
            <p>신청완료</p>
            <S.FontCreateStepSign>
              <S.FontCreateStepLineWrapper>
                <S.FontCreateStepLine></S.FontCreateStepLine>
              </S.FontCreateStepLineWrapper>
              <S.FontCreateStepCircle></S.FontCreateStepCircle>
            </S.FontCreateStepSign>
          </S.FontCreateStep>
        </S.FontCreateStepWrapper>
        <S.FontCreateCard>{children}</S.FontCreateCard>
      </S.FontCreateMainContainer>
    </S.FontCreateMainWrapper>
  );
}
