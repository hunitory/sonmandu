import React from "react"
import * as S from './style';
import Link from 'next/link';
import ProductDate from "./Subs/ProductDate";
import Image from "next/image";
import Tag from "components/Tag";

interface Tag {
  id: number;
  name: string;
}

interface Handwriting {
  name: string;
  createData: string;
  downloadCount: number;
  likeCount: number;
  tags: Tag[];
}

function ProfileFontCard({handwriting, index, isMypage}: { handwriting: Handwriting, index: number, isMypage: boolean}) {
  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={handwriting.createData}/>
        <S.imgWrapper>
          <Image 
            src={`/image/profile/fontcard/complete-${index}.png`}
            alt="#"
            width={100}
            height={200}
          />
        </S.imgWrapper>
      </S.UpperWrapper>
      <S.LowerWrapper>
        <S.LowerSpan>{handwriting.name}</S.LowerSpan>
        <S.LowerContentsWrapper>
          <S.LowerContentsUp>
            <S.LikeDiv>
            <Image 
              src={isMypage ? '/image/font_story/orange-heart-fill.png' : '/image/font_story/orange-heart.svg'}
              alt="#"
              width={100}
              height={200}
            />
            {handwriting.likeCount}
            </S.LikeDiv>
            <S.DownloadDiv>
            <Image 
              src={'/image/profile/download.png'}
              alt="#"
              width={100}
              height={200}
            />
            {handwriting.downloadCount}
            </S.DownloadDiv>
            {/* button예정 */}
          </S.LowerContentsUp>
          <S.LowerContentsDown>
            {handwriting.tags.map((tag) => (
              <Tag key={tag.id} tag={tag.name} />
            ))}
          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  )
}