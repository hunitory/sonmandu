import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

interface CommentInputDivProps {
  $isExpanded: boolean;
}

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1vh;
`;

export const CommentHeadWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBoxDiv = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const CommentDate = styled.div`
  font-size: max(14px, 0.8vw);
`;

export const CommentContentWrapper = styled.div`
  width: 100%;
  white-space: pre-line;
  height: fit-content;
  padding-left: 40px;
  font-size: max(16px, 0.9vw);
`;

export const CommentInputAreaWrapper = styled.div`
  width: 95%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const CommentInputArea = styled.textarea<CommentInputDivProps>`
  width: 100%;
  font-size: max(14px, 0.8vw);
  padding: 2vh 2vw;
  border-radius: 20px;
  transition: height 0.3s ease;

  border: ${({ $isExpanded }) =>
    $isExpanded ? `2px solid ${PALETTE.MAIN_ORANGE}` : `1px solid ${PALETTE.LIGHT_BLACK}`};
  height: ${({ $isExpanded }) => ($isExpanded ? '12vh' : '8vh')};
`;

export const CommentButtonDiv = styled.div<CommentInputDivProps>`
  display: ${({ $isExpanded }) => ($isExpanded ? 'flex' : 'none')};
  flex-direction: row-reverse;
  gap: 15px;
`;

export const CommentEditButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: clamp(3px,0.2vw,7px) clamp(12px, 1vw, 16px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: white;
  background-color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(12px, 1vw, 16px);
  span {
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-family: ${notoSansKr.bold.style.fontFamily};
  }
`;

export const CommentEditBackButton = styled(BaseButton)`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: clamp(3px,0.2vw,7px) clamp(24px, 1.5vw, 35px);
  border: 2px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(12px, 1vw, 16px);
  span {
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-family: ${notoSansKr.bold.style.fontFamily};
  }
`;

export const EditDeleteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 0.5vw;
`;

export const DeleteLink = styled.span`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

export const EditLink = styled.span`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;
