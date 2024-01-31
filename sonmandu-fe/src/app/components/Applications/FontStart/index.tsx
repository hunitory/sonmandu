import * as Styled from './style'

interface FontStartProps {
    onNext: () => void;
  }

export default function FontStart({ onNext }: FontStartProps) {
    return (
      <div>
        <h2>시작하기Component 입니다.</h2>
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