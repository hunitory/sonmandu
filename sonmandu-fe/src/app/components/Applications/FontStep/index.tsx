import * as Styled from './style';
import { FontStepProps } from 'types';


export default function FontStep(props: FontStepProps) {
  const { value, isactive } = props;
  return (
    <Styled.Step $isactive={isactive}>
      <p>{value}</p>
      <Styled.StepSign>
        <Styled.StepLineWrapper>
          <Styled.StepLine $isactive={isactive}></Styled.StepLine>
        </Styled.StepLineWrapper>
        <Styled.StepCircle $isactive={isactive}></Styled.StepCircle>
      </Styled.StepSign>
    </Styled.Step>
  );
}
