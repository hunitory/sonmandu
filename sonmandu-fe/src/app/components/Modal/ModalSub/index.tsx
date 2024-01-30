import * as Styled from './style'


// Prop 타입을 정의합니다.
interface ModalProps {
  textContent: string;
  onClose: () => {}
}

export default function Modal({ textContent, onClose }: ModalProps) {
  return (
    <Styled.BackLayOutModal>
      <Styled.Modal textContent={ textContent }>
        <Styled.ModalWapper>
          <Styled.CloseButton
          onClick={ onClose } 
          />
        </Styled.ModalWapper>
      </Styled.Modal>
    </Styled.BackLayOutModal>
  );
}