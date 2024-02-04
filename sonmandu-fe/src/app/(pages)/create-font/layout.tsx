import React from 'react';
import * as S from './_style';

export default function CreateFontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <S.StepWrapper>
          <S.Step>
            <p>시작하기</p>
            <S.StepSign>
              <S.StepLineWrapper>
                <S.StepLine></S.StepLine>
              </S.StepLineWrapper>
              <S.StepCircle></S.StepCircle>
            </S.StepSign>
          </S.Step>

          <S.Step>
            <p>파일 업로드</p>
            <S.StepSign>
              <S.StepLineWrapper>
                <S.StepLine></S.StepLine>
              </S.StepLineWrapper>
              <S.StepCircle></S.StepCircle>
            </S.StepSign>
          </S.Step>

          <S.Step>
            <p>손글씨 정보 입력</p>
            <S.StepSign>
              <S.StepLineWrapper>
                <S.StepLine></S.StepLine>
              </S.StepLineWrapper>
              <S.StepCircle></S.StepCircle>
            </S.StepSign>
          </S.Step>

          <S.Step>
            <p>신청완료</p>
            <S.StepSign>
              <S.StepLineWrapper>
                <S.StepLine></S.StepLine>
              </S.StepLineWrapper>
              <S.StepCircle></S.StepCircle>
            </S.StepSign>
          </S.Step>
        </S.StepWrapper>
        <S.Card>{children}</S.Card>
      </S.MainContainer>
    </S.MainWrapper>
  );
}
