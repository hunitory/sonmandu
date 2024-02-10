import * as S from './style';
import * as Comp from '@/components';
import * as API from '@/apis';
import { ProfileBoxProps, CommentProps } from 'types';
import { useMutation } from '@tanstack/react-query';

export default function FontStoryComment({
  profileBoxProps,
  commentProps,
  isMycomment,
}: {
  profileBoxProps: ProfileBoxProps;
  commentProps: CommentProps;
  isMycomment: boolean;
}) {

  // 댓글삭제
  const { mutate: requestCommentDelete } = useMutation({
    mutationKey: ['request-delete'],
    mutationFn: () => API.handwritingStory.handwritingStoryCommentDelete({ handwritingStoryId: commentProps.handwritingStoryId, handwritingStoryCommentId: commentProps.handwritingStoryCommentId }),
    onSuccess: () => {}
  })

  const handleCommentDeleteClick = () => {
    requestCommentDelete();
  }

  return (
    <S.CommentWrapper>
      <S.CommentHeadWrapper>
        <S.ProfileBoxDiv>
          <Comp.ProfileBox {...profileBoxProps} />
        </S.ProfileBoxDiv>
        <S.CommentDate>{commentProps.createDate}</S.CommentDate>
      </S.CommentHeadWrapper>
      <S.CommentContentWrapper>
        {commentProps.content}
        {
          isMycomment &&
          <S.EditDeleteWrapper>
            <S.DeleteLink onClick={handleCommentDeleteClick}>삭제하기</S.DeleteLink>
            {/* <S.EditLink onClick={handleEditClick}>수정하기</S.EditLink> */}
          </S.EditDeleteWrapper>
        }
      </S.CommentContentWrapper>
    </S.CommentWrapper>
  );
}
