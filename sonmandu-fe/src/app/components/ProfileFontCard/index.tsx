import React from "react"
import * as S from './style';
import ProductDate from "./Subs/ProductDate";
import Image from "next/image";
import { BaseButton, BaseHashTags } from "components";
import { useRouter } from "next/navigation";

interface Handwriting {
  handwritingId: number;
  name: string;
  state: number;
  likeCount: number;
  downloadCount: number;
  downloadUrl: string;
  createDate: string;
  tags: number[];
}


/**
 * @param handwritingId: 글씨체 번호(pk값)
 * @param name: 글씨체명
 * @param state: 1~5까지 가능, 4가 완료 5는 첫 번째 다운로드 후
 * @param likeCount: 좋아요 수
 * @param downloadCount: 다운로드 수
 * @param downloadUrl: 다운로드 url
 * @param createDate: 제작날짜
 * @param tags: tag 번호 ex) [1, 3, 5]
 * @returns 
 */


function ProfileFontCard({index, isMypage, handwriting}: { index: number, isMypage: boolean, handwriting: Handwriting}) {
  const router = useRouter();

  const { handwritingId, name, state, likeCount, downloadCount, downloadUrl, createDate, tags } = handwriting;
  
  interface BaseButtonProps {
    children: React.ReactNode;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    disabled: false;
    className?: string;
    $needGap: boolean;
  }
  const BaseButtonProps: BaseButtonProps = {
    children: '다운로드 받기',
    type: 'button',
    onClick: () => router.push(downloadUrl),
    disabled: false,
    $needGap: false
  }

  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={createDate}/>
        <Image
          src={`/image/complete-${index}.png`}
          alt="#"
          width={148}
          height={137}
        />
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{handwriting.name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <S.LikeDiv>
            <Image 
              src={isMypage ? '/image/orange-heart-fill.png' : '/image/orange-heart.svg'}
              alt="#"
              width={30}
              height={30}
            />
            {likeCount}
            </S.LikeDiv>
            <S.DownloadDiv>
            <Image 
              src={'/image/download.png'}
              alt="#"
              width={28}
              height={28}
            />
            {downloadCount}
            </S.DownloadDiv>
            <S.DownloadButton {...BaseButtonProps} />
          </S.LowerContentsUp>
          <S.LowerContentsDown>
            <BaseHashTags hashTagIdList={tags} direction="row"/>
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  )
}

export default ProfileFontCard;