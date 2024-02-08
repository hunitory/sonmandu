'use client';

import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import Image from 'next/image';

export default function ChattingMessageContainer() {
  const [messageInputValue, setMessageInputValue] = useState('');

  const handleMessageInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInputValue(e.target.value);
  };
  return (
    <S.Container>
      <S.HiddenWrapper>
        <S.ScrollAbleContainer>
          <S.AllMessageContainer>
            {Array.from({ length: 200 }).map((el, i) => (
              <S.MessageElement key={i}>
                <Image src={`/image/complete-${i % 9}.png`} width={28} height={28} alt="프사" />
                <S.NicknameAndMessgeWrapper>
                  <p>닉네임</p>
                  <p>채팅{i * 90909090}</p>
                </S.NicknameAndMessgeWrapper>
              </S.MessageElement>
            ))}
          </S.AllMessageContainer>
        </S.ScrollAbleContainer>
      </S.HiddenWrapper>
      <S.MessageTypingArea
        placeholder="메세지 작성"
        value={messageInputValue}
        onChange={handleMessageInputValue}
      ></S.MessageTypingArea>
    </S.Container>
  );
}
