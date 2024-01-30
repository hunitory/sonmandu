import React from "react"
import * as S from './style';
import Link from 'next/link';
import ProductDate from "./Subs/ProductDate";
import Image from "next/image";

interface Handwriting {
  name: string;
  createData: string;
  downloadCount: number;
  likeCount: number;
}

function ProfileFontCard({handwriting}: { handwriting: Handwriting}) {
  return (
    <S.ProfileFontCardWrapper>
      <S.UpperWrapper>
        <ProductDate date={handwriting.createData}/>
        <S.imgWrapper>
          <Image 
            src=""
            alt=""
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

            </S.LikeDiv>
            <S.DownloadDiv>

            </S.DownloadDiv>
            {/* button */}
          </S.LowerContentsUp>
          <S.LowerContentsDown>

          </S.LowerContentsDown>
        </S.LowerContentsWrapper>
      </S.LowerWrapper>
    </S.ProfileFontCardWrapper>
  )
}