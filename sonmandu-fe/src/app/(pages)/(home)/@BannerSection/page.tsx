'use client';

import * as API from '@/apis';
import * as Styled from './_style';
import * as Comp from '@/components';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';
import useModal from 'customhook/useModal';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { FontCard } from 'types';
import Slider from 'react-slick';
import CustomSlider from 'react-slick';

interface BannerSectionProps {
  searchParams: { tagId: string; name: string; sort: string };
}

export default function BannerSection({ searchParams }: BannerSectionProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1208,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickRef = useRef<CustomSlider>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const goNext = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  const queryKey = ['popular-fonts-search'];
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
        <Comp.CustomImage src={mainbanner} alt="배너" width={1000} height={800} />
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
        <Slider {...settings} ref={slickRef}>
          {response?.data.map((res: FontCard) => <Comp.MainFontCard key={res.handwritingId} {...res} />)}
        </Slider>
        <Styled.ArrowRightButton type="button" disabled={false} onClick={goNext}>
          <Comp.CustomImage src="/image/black-right-next.svg" alt="화살표" width={25} height={25} />
        </Styled.ArrowRightButton>
      </Styled.CarouselWrapper>
    </Styled.MainWrapper>
  );
}
