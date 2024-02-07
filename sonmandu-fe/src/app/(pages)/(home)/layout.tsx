import React from 'react';
import * as Styled from './_style';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <Styled.StyledMain>{children}</Styled.StyledMain>;
}
