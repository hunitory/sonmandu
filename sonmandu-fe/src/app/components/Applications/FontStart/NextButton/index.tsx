import * as Styled from './style';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

export default function Button(props: ButtonProps) {
  const { children, link } = props;
  const router = useRouter();

  const handleRouter = () => {
    router.push(link);
  };

  return (
    <Styled.NextButtonWrapper>
      <Styled.NextButton onClick={handleRouter} disabled={false} type="button">
        {children}
      </Styled.NextButton>
    </Styled.NextButtonWrapper>
  );
}
