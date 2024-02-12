import React from 'react';
import * as Styled from './_style';

export default function HomeLayout({
  children,
  BannerSection,
  StorySection,
  AnimationSection,
}: {
  children: React.ReactNode;
  BannerSection: React.ReactNode;
  StorySection: React.ReactNode;
  AnimationSection: React.ReactNode;
}) {
  return (
    <Styled.StyledMain>
      {BannerSection}
      {/* {StorySection} */}
      {children}
      {/* {AnimationSection} */}
    </Styled.StyledMain>
  );
}
