'use client'

import React from "react";
import * as S from './style';
import ProfileBox from "components/ProfileBox";
import { BaseButton } from "components";
import ProfileFontCard from "components/ProfileFontCard";
import { useRouter } from "next/navigation";

interface ProfileBoxProps {
  id: number;
  src: string;
  nickname: string;
  vertical: boolean;
  badge: boolean; // 여기에 적절한 타입을 지정해주세요
	badgesize: number;
  noLink: boolean;
}

const index: number = 0;
const isMypage: boolean = true;

interface Handwriting {
  handwritingId: number;
  name: string;
  state: number;
  likeCount: number;
  downloadCount: number;
  downloadUrl: string;
  tags: number[];
  createDate: string;
}


export default function ProfilePage() {
	// const resp = await fetch('https://api...');
	// const user = await resp.json();
	// const ProfileBoxProps = {
	// 	id: user.memberId,
	// 	src: user.image_url,
	// 	nickname: user.nickname,
	// 	vertical: true,
	// 	badge: user.badge, // ?
	// 	noLink: true
	// }
// dummy
const { member, handwritings, handwritingStories } = 
{
	"member": {
			"memberId": 1,
			"nickname": "바다의 여인",
			"imageUrl": "/image/camera.svg",
			"badge": true,
			"introduction": "안녕하세요~~",
			"trophy": [
					{
							"weight": 1,
							"createDate": "2024.10"
					},
					{
							"weight": 3,
							"createDate": "2024.8"
					}
			]
	},
	"handwritings": [
			{
					"handwritingId": 1,
					"name": "손만두체",
					"state": 3, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
					"likeCount": 15,
					"downloadCount": 44,
					"downloadUrl": "http://son.com",
					"tags": [1, 2, 6],
					"createDate": '23.09.12'
			},
			{
					"handwritingId": 2,
					"name": "손만두체2",
					"state": 4, // 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
					"likeCount": 11,
					"downloadCount": 434,
					"downloadUrl": "http://son1.com",
					"tags": [1, 2, 6, 10],
					"createDate": '23.07.16'
			}
	],
	"handwritingStories": [
			{
					"handwritingStoryId": 12,
					"title": "추억이 담긴 이야기",
					"content": "이런저런 얘기",
					"thumbnail": "http:dqw.com",
					"isLike": true,
					"likeCount": 11
			},
			{
					"handwritingStoryId": 10,
					"title": "추억이 담긴 이야기22",
					"content": "이런저런 얘기22",
					"thumbnail": "http:dqw22.com",
					"isLike": false,
					"likeCount": 13
			}
	]
}

const ProfileBoxProps: ProfileBoxProps = {
	id: member.memberId,
	src: member.imageUrl,
	nickname: member.nickname,
	vertical: true,
	badge: member.badge, // ?
	badgesize: 50,
	noLink: true
}

const router = useRouter();

	return (
		<S.ProfileWrapper>
			<S.ProfileLeftWrapper>
				<S.ProfileLeftDiv>
					<S.ProfileBoxDiv>
						<ProfileBox {...ProfileBoxProps}/>
					</S.ProfileBoxDiv>
					<S.ProfileIndexDiv>
						<S.ProfileIndexSpan>소개</S.ProfileIndexSpan>
						<S.ProfileIndexSpan>제작한 글씨</S.ProfileIndexSpan>
						<S.ProfileIndexSpan>작성한 이야기</S.ProfileIndexSpan>
					</S.ProfileIndexDiv>
				</S.ProfileLeftDiv>
			</S.ProfileLeftWrapper>
			{/* ----------------좌우 구분--------------- */}
			<S.ProfileRightWrapper>
				<S.ProfileIntroDiv>
					<S.ProfileIntroDivUp>
						<S.ProfileIntroSpan>소개</S.ProfileIntroSpan>
						<S.ProfileIntroContents>
							{member.introduction}
						</S.ProfileIntroContents>
						<S.BaseButtonWrapper>
							<S.BaseButtonDiv>
								<BaseButton 
									children={'수정하기'}
									type = {"button"}
									onClick = {() => 
										console.log('happy')
										// router.push('/profile/usernumber/edit')
									}
									disabled = {false}
									$needGap = {false}
								/>
							</S.BaseButtonDiv>
						</S.BaseButtonWrapper>
					</S.ProfileIntroDivUp>
					<S.ProfileIntroDivDown>
						{/* 트로피 들어갈 자리 */}
					</S.ProfileIntroDivDown>
					<S.Line />
				</S.ProfileIntroDiv>

				<S.ProfileHandwritingsWrapper>
					<S.ProfileHandwritingsSpanDiv>
						<S.ProfileHandwritingsSpan1>제작한 글씨</S.ProfileHandwritingsSpan1>
						<S.ProfileHandwritingsSpan2>제작한 개수</S.ProfileHandwritingsSpan2>
					</S.ProfileHandwritingsSpanDiv>
					<S.ProfileHandwritingsDiv>
					{
						handwritings.map((handwriting: Handwriting) => {
							return(
								<ProfileFontCard 
									index={index}
									isMypage={isMypage}
									handwriting={handwriting}
								/>
							)
						})
					}
					</S.ProfileHandwritingsDiv>
					<S.Line />
				</S.ProfileHandwritingsWrapper>

				<S.ProfileHandwritingStoriesWrapper>
					<S.ProfileHandwritingStoriesSpanDiv>
						<S.ProfileHandwritingStoriesSpan1>작성한 이야기</S.ProfileHandwritingStoriesSpan1>
						<S.ProfileHandwritingStoriesSpan2>제작한 개수</S.ProfileHandwritingStoriesSpan2>
					</S.ProfileHandwritingStoriesSpanDiv>
					<S.ProfileHandwritingStoriesDiv>
						{/* 이야기 카드들 */}
					</S.ProfileHandwritingStoriesDiv>
				</S.ProfileHandwritingStoriesWrapper>
			</S.ProfileRightWrapper>
		</S.ProfileWrapper>
	)
}