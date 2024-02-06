// 'use client'

import React from 'react';
import * as S from './style';
import * as Comp from '@/components';
import { ProfileBoxProps } from 'types';
import Image from 'next/image';
import Link from 'next/link';

//더미데이터
const HandwritingStoryData = {
  title : '유학 시절 적었던 내 일기를 폰트로 만들었어요',
  content : '그때의 일기, 지금 읽으니 마음이 선하다.\n어색한 언어 속에서도 꾸준한 노력과 모험으로 가득 찬 나날들\n힘들었던 순간들과 웃음 가득한 순간들, 모두가 나를 이끌어 키운 보물 같아 보인다.\n 그때의 나는 얼마나 순수하게 꿈을 향해 나아갔는지를 떠올리며, 현재의 내가 그 꿈을 향해 달려가고 있다는 것에 감사를 느낀다.\n앞으로의 날들도 그때와 같은 열정으로 빛나기를 바라며, 그 시절의 나에게 고맙다고 속삭인다.',
  createDate : '2024년01월15일 10시14분',
  hitCount : 7,
  likeCount: 12,

  memberId : 5,
  imageUrl : '/image/sample.jpg',
  nickName : '바다의여인바다의여인바다',
  introduction: '안녕하세요. 캘리그라피스트를 꿈꾸는 사람입니다.\n글씨를 잘 쓰는 편입니다. 제 폰트가 마음에 드신다면 마음껏 써주시길 바랍니다.\n언제나 좋은 하루 되세요.',
  badge : true,

  HandwritingId: 4,
  name: '한국말 잘 못할 때 적은 일기체',
  tags: [1, 2, 10],

  HandwritingStoryComments : [
    {
      HandwritingStoryCommentId : 3,
      content: '정말 감동적이어서 눈물이 났습니다\n감사합니다.',
      registDate: '2024년01월15일 13시26초',
    },
    {
      HandwritingStoryCommentId : 7,
      content: '그게 최선입니까? 그럼 됐고요',
      registDate: '2024년01월17일 16시26초',
    },
    {
      HandwritingStoryCommentId : 8,
      content: '정말 감동적이어서 숙면을 취했습니다\n감사합니다.',
      registDate: '2024년01월19일 16시26초',
    },
  ]
}
export default function FontStoryDetailPage() {

  const ProfileBoxProps: ProfileBoxProps = {
    src: HandwritingStoryData.imageUrl,
    nickname: HandwritingStoryData.nickName,
    badge: HandwritingStoryData.badge,
    imgSize: '60px',
    fontSize: '1.4vw',
  };

  const VerticalProfileBoxProps: ProfileBoxProps = {
    src: HandwritingStoryData.imageUrl,
    nickname: HandwritingStoryData.nickName,
    badge: HandwritingStoryData.badge,
    imgSize: '96px',
    fontSize: '1.4vw',
    className: 'vertical',
  };

  return (
    <S.DetailWrapper>
      <S.UpperWrapper>
        <S.UpperHeadWrapper>
          <S.ProfileBoxDiv><Comp.ProfileBox {...ProfileBoxProps} /></S.ProfileBoxDiv>
          <S.DetailInfoWrapper>
            <div>
              <Image src={'/image/orange-heart.svg'} alt='empty-heart' width={30} height={28} />
              {HandwritingStoryData.likeCount}
            </div>
            <div>
              <Image src={'/image/view.svg'} alt='empty-heart' width={30} height={30} />
              {HandwritingStoryData.hitCount}
            </div>
            <div>
              <Image src={'/image/comment.svg'} alt='empty-heart' width={28} height={26} />
              {HandwritingStoryData.HandwritingStoryComments.length}
            </div>
          </S.DetailInfoWrapper>
        </S.UpperHeadWrapper>
        <S.TitleSpan>
          {HandwritingStoryData.title}
        </S.TitleSpan>
        <S.FontDateWrapper>
          <Link href={`/font-detail/${HandwritingStoryData.HandwritingId}`}>
            <S.FontLinkWrapper>
              <span>{HandwritingStoryData.name}</span>
              <Image src={'/image/font-link-pointer.svg'} alt='font-link-pointer' width={14} height={20} />
            </S.FontLinkWrapper>
          </Link>
          <S.FontStoryDateWrapper>{HandwritingStoryData.createDate}</S.FontStoryDateWrapper>
        </S.FontDateWrapper>
        <S.TagsWrapper>
          <Comp.BaseHashTags hashTagIdList={HandwritingStoryData.tags} direction="row" />
        </S.TagsWrapper>
      </S.UpperWrapper>
      <S.FontStoryText>
        {HandwritingStoryData.content}
      </S.FontStoryText>
      <S.ProfileWrapper>
        <S.VerticalProfileBoxDiv>
          <S.Line />
          <S.WhiteSquare />
          <Comp.ProfileBox {...VerticalProfileBoxProps}/>
        </S.VerticalProfileBoxDiv>
        <S.ProfileIntroduction>
          {HandwritingStoryData.introduction}
        </S.ProfileIntroduction>
        <Link href={`/profile/${HandwritingStoryData.memberId}`}>
          <S.LinkButton type="button" disabled={false}>
            <span>프로필 보기</span>
          </S.LinkButton>
        </Link>
      </S.ProfileWrapper>
      <S.LowerWrapper></S.LowerWrapper>
    </S.DetailWrapper>
  );
}
