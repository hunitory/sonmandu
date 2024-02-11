import React from 'react';
import * as Styled from './_style';

export default function HomeLayout({
  children,
  BannerSection,
}: {
  children: React.ReactNode;
  BannerSection: React.ReactNode;
}) {
  return (
    <Styled.StyledMain>
      {BannerSection}
      {children}
    </Styled.StyledMain>
  );
}
