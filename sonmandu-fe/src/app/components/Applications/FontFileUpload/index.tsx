import * as Styled from './style'

interface FontFileUpload {
    onBack: () => void;
    onNext: () => void;
  }
export default function FontFileUpload({ onNext, onBack }: FontFileUpload) {
    return (
      <div>
        <h2>파일 업로드</h2>
        <Styled.Button
            onClick={onBack} 
            disabled={false}
            type="button"
        >
            <Styled.ButtonText>이전 단계</Styled.ButtonText>
        </Styled.Button>
        <Styled.Button
            onClick={onNext} 
            disabled={false}
            type="button"
        >
            <Styled.ButtonText>다음 단계</Styled.ButtonText>
        </Styled.Button>
      </div>
    );
  }