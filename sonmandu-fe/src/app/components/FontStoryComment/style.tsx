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

export const EditDeleteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1vw;
`;

export const DeleteLink = styled.span`
  text-decoration: underline;
`;

export const EditLink = styled.span`
  text-decoration: underline;
`;