'use client';

import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as Comp from '@/components';
import { ProfileBoxProps, Handwriting } from 'types';
import { useRouter } from 'next/navigation';
import * as API from '@/apis';

const { member, handwritings, handwritingStories } = {
  member: {
    memberId: 1,
    nickname: '김싸피와열두글자아이디이',
    imageUrl: '/image/sample.jpg',
    badge: true,
    introduction:
      '안녕하세요. 캘리그라피스트를 꿈꾸는 사람입니다.\n글씨를 잘 쓰는 편입니다. 제 폰트가 마음에 드신다면 마음껏 써주시길 바랍니다.\n언제나 좋은 하루 되세요.',
    trophy: [
      {
        weight: 1,
        createDate: '2024.10',
      },
      {
        weight: 3,
        createDate: '2024.8',
      },
    ],
  },
  handwritings: [
    {
      handwritingId: 1,
      name: '손만두체',
      state: 3, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
      likeCount: 15,
      downloadCount: 44,
      downloadUrl: 'http://son.com',
      tags: [1, 2, 6],
      createDate: '23.09.12',
    },
    {
      handwritingId: 2,
      name: '손만두체2',
      state: 4, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
      likeCount: 11,
      downloadCount: 434,
      downloadUrl: 'http://son1.com',
      tags: [1, 2, 10],
      createDate: '23.07.16',
    },
    {
      handwritingId: 2,
      name: '손만두체2',
      state: 4, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
      likeCount: 11,
      downloadCount: 434,
      downloadUrl: 'http://son1.com',
      tags: [1, 2, 10],
      createDate: '23.07.16',
    },
    {
      handwritingId: 2,
      name: '손만두체2',
      state: 4, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
      likeCount: 11,
      downloadCount: 434,
      downloadUrl: 'http://son1.com',
      tags: [1, 2, 10],
      createDate: '23.07.16',
    },
    {
      handwritingId: 2,
      name: '손만두체2',
      state: 4, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
      likeCount: 11,
      downloadCount: 434,
      downloadUrl: 'http://son1.com',
      tags: [1, 2, 10],
      createDate: '23.07.16',
    },
  ],
  handwritingStories: [
    {
      handwritingStoryId: 12,
      title: '추억이 담긴 이야기',
      content: '이런저런 얘기',
      thumbnail: 'http:dqw.com',
      isLike: true,
      likeCount: 11,
    },
    {
      handwritingStoryId: 10,
      title: '추억이 담긴 이야기22',
      content: '이런저런 얘기22',
      thumbnail: 'http:dqw22.com',
      isLike: false,
      likeCount: 13,
    },
  ],
};

export default function ProfilePage() {
  useEffect(() => {
    (async () => {
      try {
        const info = await API.member.getProfileMember(2);
        console.log(info);
      } catch (error) {
        console.log('Error fetching member info:', error);
      }
    })();
    // fetchMemberInfo();
  }, []);

  // const ProfileBoxProps = {
  // 	id: user.memberId,
  // 	src: user.image_url,
  // 	nickname: user.nickname,
  // 	vertical: true,
  // 	badge: user.badge, // ?
  // 	noLink: true
  // }

  const ProfileBoxProps: ProfileBoxProps = {
    imageUrl: member.imageUrl,
    nickname: member.nickname,
    badge: member.badge,
    imgSize: '10vw',
    fontSize: '1.4vw',
    className: 'vertical',
  };

  const router = useRouter();

  const isMypage: boolean = true; // isMypage 판별하는 식 추가해야함!!

  const [showModal, setShowModal] = useState(false);
  const clickModal = () => {
    setShowModal(!showModal);
  };

  const filteredHandwriting = handwritings.filter((handwriting) => handwriting && handwriting.state > 3);
  const numberOfHandwriting = filteredHandwriting.length;
  const handwritinggroup = isMypage ? handwritings : filteredHandwriting;

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
                  <span>소개</span>
                  <span>제작한 글씨</span>
                  <span>작성한 이야기</span>
                  {isMypage && <S.ProfileInfoLink onClick={clickModal}>내 정보</S.ProfileInfoLink>}
                </S.ProfileIndexDiv>
              </S.ProfileIndexWrapper>
            </S.ProfileLeftDiv>
          </S.ProfileLeftWrapper>
          {/* ----------------좌우 구분--------------- */}
          <S.ProfileRightWrapper>
            <S.ProfileIntroDiv>
              <S.ProfileIntroDivUp>
                <S.ProfileIntroSpan>소개</S.ProfileIntroSpan>
                <S.ProfileIntroContents>{member.introduction}</S.ProfileIntroContents>
                <S.BaseButtonWrapper>
                  <S.EditButton
                    type={'button'}
                    onClick={() => router.push('/profile/usernumber/edit')}
                    disabled={false}
                  >
                    <span>수정하기</span>
                  </S.EditButton>
                </S.BaseButtonWrapper>
              </S.ProfileIntroDivUp>
              <S.ProfileIntroDivDown>
                <Comp.ProfileTrophy Trophies={member.trophy} />
              </S.ProfileIntroDivDown>
              <S.Line />
            </S.ProfileIntroDiv>

            <S.ProfileHandwritingsWrapper>
              <S.ProfileHandwritingsSpanDiv>
                <S.ProfileHandwritingsSpan1>제작한 글씨</S.ProfileHandwritingsSpan1>
                {isMypage ? (
                  <S.ProfileHandwritingsSpan2>{handwritings.length}</S.ProfileHandwritingsSpan2>
                ) : (
                  <S.ProfileHandwritingsSpan2>{numberOfHandwriting}</S.ProfileHandwritingsSpan2>
                )}
              </S.ProfileHandwritingsSpanDiv>
              <S.ProfileHandwritingsDiv>
                {handwritinggroup.map((handwriting: Handwriting, index: number) => {
                  // const idx = Math.floor(Math.random() * 10);
                  if (handwriting.state > 3) {
                    return (
                      <Comp.ProfileFontCard
                        key={index}
                        index={Math.floor(Math.random() * 10)}
                        isMypage={isMypage}
                        handwriting={handwriting}
                      />
                    );
                  } else {
                    return <Comp.ProfileFontCardMaking key={index} isMypage={isMypage} handwriting={handwriting} />;
                  }
                })}
              </S.ProfileHandwritingsDiv>
              <S.Line />
            </S.ProfileHandwritingsWrapper>

            <S.ProfileHandwritingsWrapper>
              <S.ProfileHandwritingsSpanDiv>
                <S.ProfileHandwritingsSpan1>작성한 이야기</S.ProfileHandwritingsSpan1>
                <S.ProfileHandwritingsSpan2>{handwritingStories.length}</S.ProfileHandwritingsSpan2>
              </S.ProfileHandwritingsSpanDiv>
              <S.ProfileHandwritingStoriesDiv>
                {handwritingStories.map((handwritingStory) => {
                  return (
                    <S.BaseStoryCardWrapper key={handwritingStory.handwritingStoryId}>
                      <Comp.BaseStoryCard key={handwritingStory.handwritingStoryId} />;
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
