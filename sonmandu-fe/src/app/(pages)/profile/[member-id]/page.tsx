'use client';

import React, { useState, useEffect, useRef, ChangeEvent, useLayoutEffect } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import { ProfileBoxProps, ProfileFontCardProps, ProfileStoryCardProps } from 'types';
import { useParams, useRouter } from 'next/navigation';
import * as API from '@/apis';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';

interface UnAuthorizationUser {
  isAuth: false;
  tokenPayload: null;
}

interface AuthorizationUser {
  isAuth: true;
  tokenPayload: { memberId: number; nickName: string; imageUrl: string | null };
}

export default function ProfilePage() {
  const params = useParams();

  // 마이프로필 여부 확인
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
    ? authorizationUser.tokenPayload.memberId === parseInt(params['member-id'] as string)
    : false;

  // 회원 정보 요청
  const queryKey = ['profile', params['member-id']];
  const {
    data: memberRes,
    isFetching: isProfileFetching,
    refetch: memberRefetch,
  } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.member.getProfileMember({ memberId: params['member-id'] as string }),
  });

  useEffect(() => {
    console.log(memberRes);
  }, [memberRes]);

  // 만든 폰트 목록 조회
  const { data: fontRes, isFetching: isFontFetching } = useQuery({
    queryKey: isMypage ? ['my-font'] : ['profile-font', params['member-id']],
    queryFn: () =>
      isMypage
        ? API.handwriting.getMyHandwriting()
        : API.handwriting.getProfileHandwriting({ memberId: params['member-id'] as string }),
  });

  useEffect(() => {
    console.log(fontRes);
  }, [fontRes]);

  // 폰트이야기 조회
  const { data: storyRes, isFetching: isStoryFontFetching } = useQuery({
    queryKey: ['font-story', params['member-id']],
    queryFn: () => API.handwritingStory.getHandwritingStory({ memberId: params['member-id'] as string }),
  });

  useEffect(() => {
    console.log(storyRes);
  }, [storyRes]);

  const ProfileBoxProps: ProfileBoxProps = {
    imageUrl: memberRes?.data.imageUrl,
    nickname: memberRes?.data.nickname,
    badge: memberRes?.data.badge,
    imgSize: '10vw',
    fontSize: '1.4vw',
    className: 'vertical',
  };

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const clickModal = () => {
    setShowModal(!showModal);
  };

  // const filteredHandwriting = handwritings.filter((handwriting) => handwriting && handwriting.state > 3);
  // const numberOfHandwriting = filteredHandwriting.length;
  // const handwritinggroup = isMypage ? handwritings : filteredHandwriting;

  // 수정하기 버튼입력
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (isEdit: boolean) => {
    setIsEdit(!isEdit);
  };

  // 수정하기 입력값 받는 부분
  const ref = useRef<HTMLTextAreaElement>(null);
  const [intro, setIntro] = useState<string>('');
  const handleCommentOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntro(e.target.value);
  };

  // 수정하기 입력창 여닫기
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  // 수정하기 api
  const { mutate: requestEditIntroduction } = useMutation({
    mutationKey: ['request-Edit-introduction'],
    mutationFn: () => API.member.editMemberInfo({ labelName: 'introduction', info: intro }),
    onSuccess: () => memberRefetch(),
  });

  // 왼쪽 목차 입력시 화면 이동
  const scrollToElement = (item: string) => {
    const rightElement = document.getElementById(item);
    if (rightElement) {
      rightElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {isMypage && showModal && (
        <S.ProfileInfoModalWrapper>
          <Comp.ProfileInfoModal clickModal={clickModal} />
        </S.ProfileInfoModalWrapper>
      )}
      <S.WholeWrapper>
        <S.ProfileWrapper>
          <S.ProfileLeftWrapper>
            <S.ProfileLeftDiv>
              <S.ProfileBoxDiv>
                <S.ProfileBoxInfoDiv>
                  <Comp.ProfileBox {...ProfileBoxProps} />
                  {isMypage && (
                    <S.ProfileBoxInfoLink onClick={clickModal}>
                      <div>내 정보</div>
                    </S.ProfileBoxInfoLink>
                  )}
                </S.ProfileBoxInfoDiv>
              </S.ProfileBoxDiv>
              <S.ProfileIndexWrapper>
                <S.ProfileIndexDiv>
                  <span onClick={() => scrollToElement('소개')}>소개</span>
                  <span onClick={() => scrollToElement('제작한 글씨')}>제작한 글씨</span>
                  <span onClick={() => scrollToElement('작성한 이야기')}>작성한 이야기</span>
                  {isMypage && <S.ProfileInfoLink onClick={clickModal}>내 정보</S.ProfileInfoLink>}
                </S.ProfileIndexDiv>
              </S.ProfileIndexWrapper>
            </S.ProfileLeftDiv>
          </S.ProfileLeftWrapper>
          {/* ----------------좌우 구분--------------- */}
          <S.ProfileRightWrapper>
            <S.ProfileIntroDiv>
              <S.ProfileIntroDivUp>
                <S.ProfileIntroSpan id="소개">소개</S.ProfileIntroSpan>
                {isEdit ? (
                  <S.CommentInputAreaWrapper>
                    <S.CommentInputPlaceholder $isempty={!intro}>
                      <span>작가님을 소개해주세요</span>
                    </S.CommentInputPlaceholder>
                    <S.CommentInputArea
                      ref={ref}
                      id="comment"
                      value={intro}
                      $isExpanded={isExpanded}
                      onFocus={handleExpansion}
                      onChange={handleCommentOnChange}
                      autoFocus
                    />
                    <S.CommentButtonDiv $isExpanded={isExpanded}>
                      <S.CommentWriteButton
                        type={'button'}
                        onClick={() => {
                          requestEditIntroduction();
                          setIsEdit(!isEdit);
                        }}
                        disabled={false}
                      >
                        <span>수정완료</span>
                      </S.CommentWriteButton>
                      <S.CommentWriteBackButton
                        type="button"
                        onFocus={() => {
                          handleCollapse();
                          setIsEdit(!isEdit);
                        }}
                        disabled={false}
                      >
                        <span>취소</span>
                      </S.CommentWriteBackButton>
                    </S.CommentButtonDiv>
                  </S.CommentInputAreaWrapper>
                ) : (
                  <S.ProfileIntroContents>{memberRes?.data.introduction}</S.ProfileIntroContents>
                )}
                <S.BaseButtonWrapper>
                  {isMypage && !isEdit && (
                    <S.EditButton type={'button'} onClick={() => setIsEdit(!isEdit)} disabled={false}>
                      <span>수정하기</span>
                    </S.EditButton>
                  )}
                </S.BaseButtonWrapper>
              </S.ProfileIntroDivUp>
              <S.ProfileIntroDivDown>
                <Comp.ProfileTrophy Trophies={memberRes?.data.trophies} />
              </S.ProfileIntroDivDown>
              <S.Line />
            </S.ProfileIntroDiv>

            <S.ProfileHandwritingsWrapper>
              <S.ProfileHandwritingsSpanDiv>
                <S.ProfileHandwritingsSpan1 id="제작한 글씨">제작한 글씨</S.ProfileHandwritingsSpan1>
                <S.ProfileHandwritingsSpan2>{fontRes?.data.length}</S.ProfileHandwritingsSpan2>
              </S.ProfileHandwritingsSpanDiv>
              <S.ProfileHandwritingsDiv>
                {isMypage
                  ? fontRes?.data.map((props: ProfileFontCardProps) => {
                      if (props.state && props.state > 3) {
                        return <Comp.ProfileFontCard key={props.handwritingId} profileFontCardProps={props} />;
                      } else {
                        return <Comp.ProfileFontCardMaking key={props.handwritingId} profileFontCardProps={props} />;
                      }
                    })
                  : fontRes?.data.map((profileFontCardProps: ProfileFontCardProps) => {
                      return (
                        <Comp.ProfileFontCard
                          key={profileFontCardProps.handwritingId}
                          profileFontCardProps={profileFontCardProps}
                        />
                      );
                    })}
              </S.ProfileHandwritingsDiv>
              <S.Line />
            </S.ProfileHandwritingsWrapper>

            <S.ProfileHandwritingsWrapper>
              <S.ProfileHandwritingsSpanDiv>
                <S.ProfileHandwritingsSpan1 id="작성한 이야기">작성한 이야기</S.ProfileHandwritingsSpan1>
                <S.ProfileHandwritingsSpan2>{storyRes?.data.length}</S.ProfileHandwritingsSpan2>
              </S.ProfileHandwritingsSpanDiv>
              <S.ProfileHandwritingStoriesDiv>
                {storyRes?.data.map((storyProps: ProfileStoryCardProps) => {
                  return (
                    <S.BaseStoryCardWrapper key={storyProps.handwritingStoryId}>
                      {/* <Comp.BaseStoryCard key={storyProps.handwritingStoryId} />; */}
                    </S.BaseStoryCardWrapper>
                  );
                })}
              </S.ProfileHandwritingStoriesDiv>
            </S.ProfileHandwritingsWrapper>
          </S.ProfileRightWrapper>
        </S.ProfileWrapper>
      </S.WholeWrapper>
    </>
  );
}
