import * as Styled from './style';

interface FontInfo {
  onBack: () => void;
  onNext: () => void;
}
export default function FontInfo({ onNext, onBack }: FontInfo) {
  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.ContentFontNameWrapper>
          <Styled.ContentFontNametTitle>손글씨명</Styled.ContentFontNametTitle>
          <Styled.ContentFontNametContent>
            입력하신 이름 앞에 <span>'손만두'</span>가 기본적으로 붙습니다. ex) 손만두
            홍길동체
          </Styled.ContentFontNametContent>
        </Styled.ContentFontNameWrapper>
        <Styled.ContentFontTagWrapper>
          <Styled.ContentFontTagTitle>손글씨 특징</Styled.ContentFontTagTitle>
          <Styled.ContentFontTagtContent>
            최대 3개까지 선택 가능합니다.
          </Styled.ContentFontTagtContent>
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
    </Styled.Wrapper>
  );
}
