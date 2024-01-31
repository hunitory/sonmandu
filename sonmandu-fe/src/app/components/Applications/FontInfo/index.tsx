import * as Styled from './style'

interface FontInfo {
    onBack: () => void;
    onNext: () => void;
  }
export default function FontInfo({ onNext, onBack }: FontInfo) {
    return (
      <div>
        <h2>정보 입력입니다.</h2>
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
            <Styled.ButtonText>신청하기</Styled.ButtonText>
        </Styled.Button>
      </div>
    );
  }