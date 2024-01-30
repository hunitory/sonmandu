import { PALETTE } from 'styles'
import styled from 'styled-components'
import modalSize from '@/../styles/ModalSize'


interface ModalProps {
  textContent : string;
}

const calculateSize = (textContent:string) => {
  if (textContent === '썸네일 선택') {
    return modalSize.medium;
  } else if (textContent === '회원 가입') {
    return modalSize.large
  } 
  // 로그인, 회원탈퇴, 회원정보 찾기(아이디,비밀번호)
    else {      
    return modalSize.small
  }
}

export const Modal = styled.div<ModalProps>`
  width: ${ props => calculateSize(props.textContent).width };
  height: ${ props => calculateSize(props.textContent).height };
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 현재 크기의 절반만큼 이동하여 중앙 정렬 */
  /* 반응형 디자인을 위한 미디어 쿼리 */
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    margin-top: 8%;
    border-radius: 10px 10px 0px 0px;
  }
`

export const ModalWapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`


export const BackLayOutModal = styled.div`
    width: 100vw;
    height: 100vh;
	  background-color: rgba(160, 160, 160, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

`

export const CloseButton = styled.div`
 width: 26px;
 height: 26px;
 background-color: ${PALETTE.SUB_WHITE};
 position: absolute;
 right: 10px;
 top: 10px;
 border-radius: 50px;
 display: flex;
 justify-content:center;
 align-items:center;
 cursor: pointer;
`

