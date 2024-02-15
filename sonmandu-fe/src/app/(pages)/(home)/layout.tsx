import React from 'react';
import * as Styled from './_style';

export default function HomeLayout({
  BannerSection,
  StorySection,
  AnimationSection,
}: {
  BannerSection: React.ReactNode;
  StorySection: React.ReactNode;
  AnimationSection: React.ReactNode;
}) {
  return (
    <Styled.StyledMain>
      {BannerSection}
      {StorySection}
      {AnimationSection}
    </Styled.StyledMain>
  );
}
