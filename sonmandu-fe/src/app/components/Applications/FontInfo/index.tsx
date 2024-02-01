import * as Styled from './style'

interface FontInfo {
    onBack: () => void;
    onNext: () => void;
  }
export default function FontInfo({ onNext, onBack }: FontInfo) {
    return (
      <Styled.Wrapper>
        <Styled.ButtonWrapper>
          <Styled.BackButton onClick={onBack} type="button" disabled={false}>
            <Styled.BackButtonText>이전 단계</Styled.BackButtonText>
          </Styled.BackButton>
          <Styled.NextButton onClick={onNext} type="button" disabled={false}>
            <Styled.NextButtonText>신청하기</Styled.NextButtonText>
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.Wrapper>

    );
  }