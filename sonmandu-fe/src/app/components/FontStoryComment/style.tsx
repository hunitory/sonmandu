import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  height: fit-content;
  padding-left: 40px;
  font-size: max(14px, 0.9vw);
`;
