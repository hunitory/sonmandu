import React from 'react'
import * as S from './_style'

function JihunUiLayout({children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <S.JihunUiWrapper>{children}</S.JihunUiWrapper>
}

export default JihunUiLayout
