import * as S from './style';
import * as Comp from '@/components';
import { ProfileBoxProps, CommentProps } from 'types';

export default function FontStoryComment({
  profileBoxProps,
  commentProps,
}: {
  profileBoxProps: ProfileBoxProps;
  commentProps: CommentProps;
}) {
  // const ProfileBoxProps: ProfileBoxProps = {
  //   src: HandwritingStoryData.imageUrl,
  //   nickname: HandwritingStoryData.nickName,
  //   badge: HandwritingStoryData.badge,
  //   imgSize: '60px',
  //   fontSize: '1.4vw',
  // };

  return (
    <S.CommentWrapper>
      <S.CommentHeadWrapper>
        <S.ProfileBoxDiv>
          <Comp.ProfileBox {...profileBoxProps} />
        </S.ProfileBoxDiv>
        <S.CommentDate>{commentProps.createDate}</S.CommentDate>
      </S.CommentHeadWrapper>
      <S.CommentContentWrapper>{commentProps.content}</S.CommentContentWrapper>
    </S.CommentWrapper>
  );
}
