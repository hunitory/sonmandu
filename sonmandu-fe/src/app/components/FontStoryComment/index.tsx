import * as S from './style';
import * as Comp from '@/components';
import * as API from '@/apis';
import { ProfileBoxProps, CommentProps } from 'types';
import { QueryObserverResult, useMutation } from '@tanstack/react-query';
import { ChangeEvent, useRef, useState } from 'react';
import { AxiosResponse } from 'axios';

export default function FontStoryComment({
  profileBoxProps,
  commentProps,
  isMycomment,
  getCommentList,
}: {
  profileBoxProps: ProfileBoxProps;
  commentProps: CommentProps;
  isMycomment: boolean;
  getCommentList: () => Promise<QueryObserverResult<AxiosResponse<any, any>, Error>>;
}) {
  // 입력값 받는 부분
  const ref = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState<string>(commentProps.content);
  const handleCommentOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 댓글입력창 여닫기
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  // 댓글 수정 api
  const { mutate: requestEdit } = useMutation({
    mutationKey: ['request-edit'],
    mutationFn: () =>
      API.handwritingStory.handwritingStoryCommentEdit({
        handwritingStoryId: commentProps.handwritingStoryId,
        handwritingStoryCommentId: commentProps.handwritingStoryCommentId,
        commentContent: comment,
      }),
    onSuccess: async () => {
      await getCommentList();
    },
  });

  const handleCommentEditButtonClick = async () => {
    await requestEdit();
    handleCollapse();
  };

  // 댓글삭제
  const { mutate: requestCommentDelete } = useMutation({
    mutationKey: ['request-delete'],
    mutationFn: () =>
      API.handwritingStory.handwritingStoryCommentDelete({
        handwritingStoryId: commentProps.handwritingStoryId,
        handwritingStoryCommentId: commentProps.handwritingStoryCommentId,
      }),
    onSuccess: async () => {
      await getCommentList();
    },
  });

  const handleCommentDeleteClick = () => {
    requestCommentDelete();
  };

  return (
    <S.CommentWrapper>
      <S.CommentHeadWrapper>
        <S.ProfileBoxDiv>
          <Comp.ProfileBox {...profileBoxProps} />
        </S.ProfileBoxDiv>
        <S.CommentDate>{commentProps.createDate}</S.CommentDate>
      </S.CommentHeadWrapper>
      {isExpanded ? (
        isMycomment && (
          <S.CommentInputAreaWrapper>
            <S.CommentInputArea
              ref={ref}
              id="comment"
              value={comment}
              $isExpanded={isExpanded}
              onFocus={handleExpansion}
              onChange={handleCommentOnChange}
            />
            <S.CommentButtonDiv $isExpanded={isExpanded}>
              <S.CommentEditButton type="button" disabled={false} onClick={handleCommentEditButtonClick}>
                <span>댓글 수정</span>
              </S.CommentEditButton>
              <S.CommentEditBackButton type="button" onFocus={handleCollapse} disabled={false}>
                <span>접기</span>
              </S.CommentEditBackButton>
            </S.CommentButtonDiv>
          </S.CommentInputAreaWrapper>
        )
      ) : (
        <S.CommentContentWrapper>
          {comment}
          {isMycomment && (
            <S.EditDeleteWrapper>
              <S.DeleteLink onClick={handleCommentDeleteClick}>삭제하기</S.DeleteLink>
              <S.EditLink onClick={handleExpansion}>수정하기</S.EditLink>
            </S.EditDeleteWrapper>
          )}
        </S.CommentContentWrapper>
      )}
    </S.CommentWrapper>
  );
}
