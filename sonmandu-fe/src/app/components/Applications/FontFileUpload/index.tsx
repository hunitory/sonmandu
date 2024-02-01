import * as Styled from './style';

interface FontFileUpload {
  onBack: () => void;
  onNext: () => void;
}
export default function FontFileUpload({ onNext, onBack }: FontFileUpload) {
  return (
    <div>
      <h2>파일 업로드</h2>
      <Styled.FontCreateCardButtonWrapper>
        <Styled.FontCreateCardBackButton
          onClick={onBack}
          disabled={false}
          type="button"
        >
          <Styled.FontCreateCardBackButtonText>
            이전 단계
          </Styled.FontCreateCardBackButtonText>
        </Styled.FontCreateCardBackButton>
        <Styled.FontCreateCardNextButton
          onClick={onNext}
          disabled={false}
          type="button"
        >
          <Styled.FontCreateCardNextButtonText>
            다음 단계
          </Styled.FontCreateCardNextButtonText>
        </Styled.FontCreateCardNextButton>
      </Styled.FontCreateCardButtonWrapper>
    </div>
  );
}
