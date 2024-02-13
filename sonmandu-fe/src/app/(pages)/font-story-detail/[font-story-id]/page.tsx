'use client';

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
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

//더미데이터
// const HandwritingStoryData = {
//   title: '유학 시절 적었던 내 일기를 폰트로 만들었어요',
//   content:
//     '그때의 일기, 지금 읽으니 마음이 선하다.\n어색한 언어 속에서도 꾸준한 노력과 모험으로 가득 찬 나날들\n힘들었던 순간들과 웃음 가득한 순간들, 모두가 나를 이끌어 키운 보물 같아 보인다.\n 그때의 나는 얼마나 순수하게 꿈을 향해 나아갔는지를 떠올리며, 현재의 내가 그 꿈을 향해 달려가고 있다는 것에 감사를 느낀다.\n앞으로의 날들도 그때와 같은 열정으로 빛나기를 바라며, 그 시절의 나에게 고맙다고 속삭인다.',
//   createDate: '2024년01월15일 10시14분',
//   handwritingStoryId: 3,
//   hitCount: 7,
//   likeCount: 12,

//   memberId: 5,
//   imageUrl: '/image/sample.jpg',
//   nickName: '바다의여인바다의여인바다',
//   introduction:
//     '안녕하세요. 캘리그라피스트를 꿈꾸는 사람입니다.\n글씨를 잘 쓰는 편입니다. 제 폰트가 마음에 드신다면 마음껏 써주시길 바랍니다.\n언제나 좋은 하루 되세요.',
//   badge: true,

//   handwritingId: 4,
//   name: '한국말 잘 못할 때 적은 일기체',
//   tags: [1, 2, 10],

//   HandwritingStoryComments: [
//     {
//       Member: {
//         memberId: 1,
//         imageUrl: '/image/sample.jpg',
//         nickname: '닉네임1234',
//         badge: false,
//       },

//       HandwritingStoryComment: {
//         HandwritingStoryCommentId: 3,
//         content: '정말 감동적이어서 눈물이 났습니다\n감사합니다.',
//         createDate: '2024년01월15일 13시26초',
//       },
//     },
//     {
//       Member: { memberId: 5, imageUrl: '/image/sample.jpg', nickname: '대전다니는김싸피', badge: true },

//       HandwritingStoryComment: {
//         HandwritingStoryCommentId: 7,
//         content: '그게 최선입니까? 그럼 됐고요',
//         createDate: '2024년01월17일 16시26초',
//       },
//     },
//     {
//       Member: { memberId: 9, imageUrl: '/image/sample.jpg', nickname: '점심나가', badge: true },

//       HandwritingStoryComment: {
//         HandwritingStoryCommentId: 8,
//         content: '정말 감동적이어서 숙면을 취했습니다\n감사합니다.',
//         createDate: '2024년01월19일 16시26초',
//       },
//     },
//   ],
// };

export default function FontStoryDetailPage() {

  // 정보 요청
  const params = useParams();
  const queryKey = ['font-story-detail', params['font-story-id']];
  const { data: response, isFetching: isFontStoryDetailFetching } = useQuery({
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
      }
      
      // const { CommentList, content, createDate, handwritingStoryId, hitCount, isLike, likeCount, member, name, title } = res?.data || {};
      
      const ProfileBoxProps: ProfileBoxProps = {
        imageUrl: response?.data.member.imageUrl,
        nickname: response?.data.member.name,
        badge: response?.data.member.badge,
        imgSize: '50px',
        fontSize: '1vw',
      };
    
      const VerticalProfileBoxProps: ProfileBoxProps = {
        imageUrl: response?.data.member.imageUrl,
        nickname: response?.data.member.name,
        badge: response?.data.member.badge,
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
    console.log(response);
  }, [response]);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutate();
  };

  const router = useRouter();

  // 자기가 작성한 페이지일 때
  const isMypage = true; // member.memberId와 현재 사용자의 id비교

  // 게시글 수정
  const handleEditClick = () => {
    setEditableInfo({
      title: response?.data.title,
      content: response?.data.content,
      handwritingId: response?.data.handwritingId,
      handwritingStoryId: response?.data.handwritingStoryId,
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
    onSuccess: () => {},
    onError: () => console.log(comment),
  });

  //   const info = {
  //     content: comment,
  //   }

  //   const handleCommentWrite = () => {
  //   instanceJsonContent.post(`/handwritings/story/${handwritingStoryId}/comment`, info)
  //     .then((response) => {
  //       console.log('POST 요청 성공', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('요청 실패', error);
  //     });
  // };

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
      { !isAllResourcesLoad ? (
        <div>Loading...</div>
      ) : (
        <>
        <S.SideBarWrapper>
          <Comp.SideBar {...copyIsLikeAndCount} setCopyIsLikeAndCount={setCopyIsLikeAndCount} handwritingStoryId={response?.data.handwritingStoryId} />
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
                    <Image src={'/image/view.svg'} alt="empty-heart" width={30} height={30} />
                    {response?.data.hitCount}
                  </div>
                  <div>
                    <Image src={'/image/comment.svg'} alt="empty-heart" width={28} height={26} />
                    {response?.data.CommentList?.length}
                  </div>
                </S.DetailInfoWrapper>
              </S.UpperHeadWrapper>
              <S.TitleSpan name={response?.data.name}>{response?.data.title}</S.TitleSpan>
              <S.FontDateWrapper>
                <Link href={`/font-detail/${response?.data.handwritingId}`}>
                  <S.FontLinkWrapper name={response?.data.name}>
                    <span>{response?.data.name}</span>
                    <Image src={'/image/font-link-pointer.svg'} alt="font-link-pointer" width={14} height={20} />
                  </S.FontLinkWrapper>
                </Link>
                <S.FontStoryDateWrapper>{response?.data.createDate}</S.FontStoryDateWrapper>
              </S.FontDateWrapper>
              <S.TagsWrapper>
                { response?.data.tag && <Comp.BaseHashTags hashTagIdList={response?.data.tag} direction="row" />}
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
                <S.CommentReportSpan>
                  {response?.data.commentList.length}개의 댓글이 달렸습니다
                </S.CommentReportSpan>
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
                    <S.CommentWriteButton type="button" disabled={false} onClick={requestComment}>
                      <span>댓글 달기</span>
                    </S.CommentWriteButton>
                    <S.CommentWriteBackButton type="button" onFocus={handleCollapse} disabled={false}>
                      <span>접기</span>
                    </S.CommentWriteBackButton>
                  </S.CommentButtonDiv>
                </S.CommentInputAreaWrapper>
              </S.LowerHeadWrapper>
              <S.CommentsListWrapper>
                {response?.data.commentList && response?.data.commentList.map((StoryComment: any, index: number) => {
                  return (
                    <React.Fragment key={StoryComment.HandwritingStoryComment.HandwritingStoryCommentId}>
                      <Comp.FontStoryComment
                        profileBoxProps={{
                          imageUrl: StoryComment.Member.imageUrl,
                          nickname: StoryComment.Member.nickname,
                          badge: StoryComment.Member.badge,
                          imgSize: 'max(40px, 2.2vw)',
                          fontSize: 'max(14px, 0.8vw)',
                        }}
                        commentProps={{
                          handwritingStoryId: response?.data.handwritingStoryId,
                          handwritingStoryCommentId: StoryComment.HandwritingStoryComment.HandwritingStoryCommentId,
                          content: StoryComment.HandwritingStoryComment.content,
                          createDate: StoryComment.HandwritingStoryComment.createDate,
                        }}
                        // 현재 유저id === 댓글의 memberId
                        isMycomment={true}
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
