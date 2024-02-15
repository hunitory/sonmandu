'use client';

import React, { useState, useRef, useEffect, ChangeEvent, useLayoutEffect } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import { ProfileBoxProps, IsLikeCount } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import * as API from '@/apis';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { storyInfoState } from 'store/atoms';
import { StoryComment } from 'types/pages/FontStoryDetail';
import { jwtDecode } from 'jwt-decode';

interface UnAuthorizationUser {
  isAuth: false;
  tokenPayload: null;
}

interface AuthorizationUser {
  isAuth: true;
  tokenPayload: { memberId: number; nickName: string; imageUrl: string | null };
}

export default function FontStoryDetailPage() {
  const params = useParams();

  // 정보 요청
  const queryKey = ['font-story-detail', params['font-story-id']];
  const {
    data: response,
    isFetching: isFontStoryDetailFetching,
    refetch: storyRefetch,
  } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.handwritingStory.handwritingStoryDetail({ fontStoryId: params['font-story-id'] as string }),
  });

  const { data: resFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', response],
    queryFn: () => API.handwritingStory.getFontFileFromS3({ url: response?.data.downloadurl }),
  });

  const { data: resLoadFont, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', resFromS3],
    queryFn: () => API.handwritingStory.loadFontInService({ getFontResponse: resFromS3, name: response?.data.name }),
  });

  const isAllResourcesLoad = () => {
    return !isFontStoryDetailFetching && !isFileFetching && !isLoadFetching;
  };

  // 내가 쓴 글인지 여부 확인
  const [authorizationUser, setAuthorizationUser] = useState<UnAuthorizationUser | AuthorizationUser>({
    isAuth: false,
    tokenPayload: null,
  });

  useLayoutEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setAuthorizationUser((prev) => ({
        ...prev,
        isAuth: true,
        tokenPayload: jwtDecode(localStorage.getItem('access_token') as string),
      }));
    } else if (localStorage.getItem('access_token') === null) {
      setAuthorizationUser((prev) => ({ ...prev, isAuth: false, tokenPayload: null }));
    }
  }, []);

  const isMypage = authorizationUser.tokenPayload
    ? authorizationUser.tokenPayload.memberId === response?.data.member.memberId
    : false;

  const ProfileBoxProps: ProfileBoxProps = {
    memberId: response?.data.member.memberId || 0,
    imageUrl: response?.data.member.imageUrl || '',
    nickname: response?.data.member.nickname || '',
    badge: response?.data.member.badge || false,
    imgSize: '50px',
    fontSize: '1vw',
  };

  const VerticalProfileBoxProps: ProfileBoxProps = {
    memberId: response?.data.member.memberId || 0,
    imageUrl: response?.data.member.imageUrl || '',
    nickname: response?.data.member.nickname || '',
    badge: response?.data.member.badge || false,
    imgSize: '96px',
    fontSize: '1vw',
    className: 'vertical',
  };

  const [editableInfo, setEditableInfo] = useRecoilState(storyInfoState);

  // 사용자가 좋아요 눌렀을 때
  const [copyIsLikeAndCount, setCopyIsLikeAndCount] = useState<IsLikeCount | undefined>({
    isLike: response?.data.isLike,
    count: response?.data.likeCount,
  });
  const { mutate, data: resLikeClick } = useMutation({
    mutationKey: ['font-story-detail-click-like', response?.data.handwritingStoryId],
    mutationFn: () => API.handwritingStory.handwritingStoryLike({ id: response?.data.handwritingStoryId }),
    onSuccess: () =>
      setCopyIsLikeAndCount((prev) => {
        if (prev?.isLike) return { ...prev, isLike: !prev.isLike, count: (prev.count || 0) - 1 };
        return { ...prev, isLike: !prev?.isLike, count: (prev?.count || 0) + 1 };
      }),
  });

  useEffect(() => {
    setCopyIsLikeAndCount((prev) => ({
      ...prev,
      isLike: prev?.isLike,
      count: response?.data.likeCount,
    }));
  }, [response]);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutate();
  };

  const router = useRouter();

  // 게시글 수정
  const handleEditClick = () => {
    setEditableInfo({
      title: response?.data.title,
      content: response?.data.content,
      handwritingId: response?.data.handwritingId,
      handwritingStoryId: response?.data.handwritingStoryId,
      handwritingName: response?.data.name,
      thumbnail: response?.data.thumbnail,
    });
    router.push(`/font-story-edit/${response?.data.handwritingStoryId}`);
  };

  // 게시글 삭제

  const { mutate: requestDelete } = useMutation({
    mutationKey: ['request-delete'],
    mutationFn: () =>
      API.handwritingStory.handwritingStoryDelete({ handwritingStoryId: response?.data.handwritingStoryId }),
    onSuccess: () => router.push('/font-stories'),
  });

  const handleDeleteClick = () => {
    requestDelete();
  };

  // 댓글 입력하기
  // 입력값 받는 부분
  const ref = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState<string>('');
  const handleCommentOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 댓글 작성 api
  const { mutate: requestComment } = useMutation({
    mutationKey: ['request-comment'],
    mutationFn: () =>
      API.handwritingStory.handwritingStoryComment({
        handwritingStoryId: response?.data.handwritingStoryId,
        content: comment,
      }),
    onSuccess: () => storyRefetch(),
    onError: () => console.log(comment),
  });

  const handleCommentButtonClick = async () => {
    await requestComment();
    handleCollapse();
    setComment('');
  };

  //댓글입력창 여닫기

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {!isAllResourcesLoad ? (
        <div>Loading...</div>
      ) : (
        <>
          <S.SideBarWrapper>
            <Comp.SideBar
              {...copyIsLikeAndCount}
              setCopyIsLikeAndCount={setCopyIsLikeAndCount}
              handwritingStoryId={response?.data.handwritingStoryId}
            />
          </S.SideBarWrapper>
          <S.DetailWrapper>
            <S.UpperWrapper>
              <S.UpperHeadWrapper>
                <S.ProfileBoxDiv>
                  <Comp.ProfileBox {...ProfileBoxProps} />
                </S.ProfileBoxDiv>
                <S.DetailInfoWrapper>
                  <S.HeartWrapper>
                    <Image
                      src={`/image/${copyIsLikeAndCount?.isLike ? 'fill' : 'empty'}-orange-heart.svg`}
                      alt="empty-heart"
                      width={30}
                      height={28}
                      onClick={handleLikeClick}
                    />
                    {copyIsLikeAndCount?.count}
                  </S.HeartWrapper>
                  <div>
                    <Comp.CustomImage src={'/image/view.svg'} alt="empty-heart" width={30} height={30} />
                    {response?.data.hitCount}
                  </div>
                  <div>
                    <Comp.CustomImage src={'/image/comment.svg'} alt="empty-heart" width={28} height={26} />
                    {response?.data.commentList?.length}
                  </div>
                </S.DetailInfoWrapper>
              </S.UpperHeadWrapper>
              <S.TitleSpan name={response?.data.name}>{response?.data.title}</S.TitleSpan>
              <S.FontDateWrapper>
                <Link href={`/font-detail/${response?.data.handwritingId}`}>
                  <S.FontLinkWrapper name={response?.data.name}>
                    <span>{response?.data.name}</span>
                    <Comp.CustomImage
                      src={'/image/font-link-pointer.svg'}
                      alt="font-link-pointer"
                      width={14}
                      height={20}
                    />
                  </S.FontLinkWrapper>
                </Link>
                <S.FontStoryDateWrapper>{response?.data.createDate}</S.FontStoryDateWrapper>
              </S.FontDateWrapper>
              <S.TagsWrapper>
                {response?.data.tag && <Comp.BaseHashTags hashTagIdList={response?.data.tag} direction="row" />}
              </S.TagsWrapper>
            </S.UpperWrapper>
            <S.FontStoryText name={response?.data.name}>{response?.data.content}</S.FontStoryText>
            {isMypage && (
              <S.EditDeleteWrapper>
                <S.DeleteLink onClick={handleDeleteClick}>삭제하기</S.DeleteLink>
                <S.EditLink onClick={handleEditClick}>수정하기</S.EditLink>
              </S.EditDeleteWrapper>
            )}
            <S.ProfileWrapper>
              <S.VerticalProfileBoxDiv>
                <S.Line />
                <S.WhiteSquare />
                <Comp.ProfileBox {...VerticalProfileBoxProps} />
              </S.VerticalProfileBoxDiv>
              <S.ProfileIntroduction>{response?.data.member.introduction}</S.ProfileIntroduction>
              <Link href={`/profile/${response?.data.member.memberId}`}>
                <S.LinkButton type="button" disabled={false}>
                  <span>프로필 보기</span>
                </S.LinkButton>
              </Link>
            </S.ProfileWrapper>
            <S.LowerWrapper>
              <S.LowerHeadWrapper>
                <S.CommentReportSpan>{response?.data.commentList.length}개의 댓글이 달렸습니다</S.CommentReportSpan>
                <S.CommentHeadLine />
                <S.CommentInputAreaWrapper>
                  <S.CommentInputPlaceholder $isempty={!comment}>
                    <span>댓글을 남겨 보세요</span>
                  </S.CommentInputPlaceholder>
                  <S.CommentInputArea
                    ref={ref}
                    id="comment"
                    value={comment}
                    $isExpanded={isExpanded}
                    onFocus={handleExpansion}
                    onChange={handleCommentOnChange}
                  />
                  <S.CommentButtonDiv $isExpanded={isExpanded}>
                    <S.CommentWriteButton type="button" disabled={false} onClick={handleCommentButtonClick}>
                      <span>댓글 달기</span>
                    </S.CommentWriteButton>
                    <S.CommentWriteBackButton type="button" onFocus={handleCollapse} disabled={false}>
                      <span>접기</span>
                    </S.CommentWriteBackButton>
                  </S.CommentButtonDiv>
                </S.CommentInputAreaWrapper>
              </S.LowerHeadWrapper>
              <S.CommentsListWrapper>
                {response?.data.commentList &&
                  response?.data.commentList.map((StoryComment: StoryComment, index: number) => {
                    return (
                      <React.Fragment key={StoryComment.commentId}>
                        <Comp.FontStoryComment
                          profileBoxProps={{
                            memberId: StoryComment.member.memberId || 0,
                            imageUrl: StoryComment.member.imageUrl || '',
                            nickname: StoryComment.member.nickname || '',
                            badge: StoryComment.member.badge,
                            imgSize: 'max(40px, 2.2vw)',
                            fontSize: 'max(14px, 0.8vw)',
                          }}
                          commentProps={{
                            handwritingStoryId: response?.data.handwritingStoryId,
                            handwritingStoryCommentId: StoryComment.commentId,
                            content: StoryComment.content,
                            createDate: StoryComment.createDate,
                          }}
                          // 현재 유저id === 댓글의 memberId
                          isMycomment={
                            authorizationUser.tokenPayload
                              ? StoryComment.member.memberId === authorizationUser.tokenPayload.memberId
                              : false
                          }
                          getCommentList={storyRefetch}
                        />
                        {index !== response?.data.commentList.length - 1 && <S.CommentHeadLine />}
                      </React.Fragment>
                    );
                  })}
              </S.CommentsListWrapper>
            </S.LowerWrapper>
          </S.DetailWrapper>
        </>
      )}
    </>
  );
}
