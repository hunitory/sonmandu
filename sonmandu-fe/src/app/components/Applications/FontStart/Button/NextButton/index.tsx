import * as Styled from './style';
import { useRouter } from 'next/navigation';

interface NextButtonProps{
  link: string;
}

export default function NextButton({link} : NextButtonProps) {
  const router = useRouter();

  const handleRouter = () => {
    router.push(link);
  };

  return (
    <Styled.NextButtonWrapper>
      <Styled.NextButton onClick={handleRouter} disabled={false} type="button">
        <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
      </Styled.NextButton>
    </Styled.NextButtonWrapper>
  );
};


