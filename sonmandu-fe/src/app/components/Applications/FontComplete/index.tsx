import * as Styled from './style'

interface FontComplete {
    onBack: () => void;
  }
export default function FontComplete({ onBack }: FontComplete) {
    return (
      <div>
        <h2>오셨군요</h2>
        <Styled.Button
            onClick={onBack} 
            disabled={false}
            type="button"
        >
            <Styled.ButtonText>이전 단계</Styled.ButtonText>
        </Styled.Button>
      </div>
    );
  }