'use client';

import * as API from '@/apis';
import * as Styled from './_style';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { FontCard } from 'types';

interface BannerSectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function BannerSection({ searchParams }: BannerSectionProps) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = () => {
    setCurrentIndex(currentIndex => (currentIndex + 1));
  };

  const queryKey = ['popular-fonts-search'];
  // const queryKey = ['font-gallery-search', searchParams];
  const { data: response, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.mainFontCard.PopolarfontList(),
  });

  const router = useRouter();

  const mainbanner = '/image/banner.png';
  const loginModal = useModal('login');

  const renderLoginButton = () => {
    if (isLoggedIn) {
      return null;
    } else {
      return (
        <Styled.LoginButton onClick={() => loginModal.openModal()} disabled={false} type="button">
          <Styled.LoginButtonText>로그인</Styled.LoginButtonText>
        </Styled.LoginButton>
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Styled.MainWrapper>
      <Styled.MainBanner>
        <Styled.ToneUpBanner />
        <Image src={mainbanner} alt="배너" width={1000} height={800} />
        <Styled.MainTextContainer>
          <Styled.MainTitle>당신이 담긴 손글씨, 폰트로 만들어 드립니다.</Styled.MainTitle>
          <Styled.MainContentWrapper>
            <Styled.MainContent>
              <p>멋지고 이쁜 나의 글씨체, 뒤죽박죽인 나의 글씨체를 쉽게 만들어 보세요.</p>
              <p>과거와 현재, 또는 자신과 타인을 글씨체로 간직할 수 있습니다.</p>
            </Styled.MainContent>
          </Styled.MainContentWrapper>
          <Styled.ButtonWrapper>
            <Styled.ApplicationButton onClick={() => router.push('/create-font')} disabled={false} type="button">
              <Styled.ApplicationButtonText>손글씨 만들기</Styled.ApplicationButtonText>
            </Styled.ApplicationButton>
            {renderLoginButton()}
          </Styled.ButtonWrapper>
        </Styled.MainTextContainer>
      </Styled.MainBanner>
      <Styled.CarouselWrapper>
        <Styled.CarouselContainer $currentIndex={currentIndex}>
          {response?.data.map((res: FontCard) => (
            <Comp.MainFontCard key={res.handwritingId} {...res} />
          ))}
        </Styled.CarouselContainer>
          <Styled.ArrowRightButton type="button" disabled={false} onClick={goNext}>
            <Image src="/image/black-right-next.svg" alt="화살표" width={20} height={20} />
          </Styled.ArrowRightButton>
      </Styled.CarouselWrapper>
    </Styled.MainWrapper>
  );
}
