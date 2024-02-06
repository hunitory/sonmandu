import React from 'react';
import * as S from './_style';

export default function HomeLayout({
  children,
  LoginModal,
  login,
}: {
  children: React.ReactNode;
  LoginModal: React.ReactNode;
  login: React.ReactNode
}) {
  return (
    <S.StyledMain>
      {children}
    </S.StyledMain>
  );
}
