'use client';

import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import Image from 'next/image';
import { Client, IFrame, StompSubscription } from '@stomp/stompjs';
import { BaseButton } from 'components';

let stompClient: Client;
let isConnected = false;
const subscriptions: { [key: string]: StompSubscription } = {};

interface ChattingMessage {
  chatHandwritingResponse: {
    handwritingId: number;
    name: string;
    downloadUrl: string;
  };
  chatId: number;
  chatMemberResponse: { memberId: number; nickname: string };
  createTime: string;
  message: string;
}

export default function ChattingMessageContainer() {
  const [] = useState();
  const [messageInputValue, setMessageInputValue] = useState('');
  const config = {
    brokerURL: 'wss://i10b111.p.ssafy.io/dev/api/chat-connection',
    onConnect: (frame: IFrame) => {
      console.log(`frame IN CONFIG :`, frame);
    },
  };

  const sendMessage = () => {
    const body = {
      message: messageInputValue,
      handwritingId: 3,
    };
    stompClient.publish({ destination: '/app/sonmandu', body: JSON.stringify(body) });
  };

  const connect = useCallback(() => {
    if (!stompClient) {
      stompClient = new Client(config);
      stompClient.activate();
    }

    stompClient.onConnect = () => {
      isConnected = true;

      const subscribe = stompClient.subscribe('/topic/sonmandu', (message) => {
        const body = JSON.parse(message.body);
        console.log(`Received: `, body);
      });
      subscriptions['/topic/sonmandu'] = subscribe;
    };
  }, []);

  useEffect(() => {
    connect();
    stompClient.connectHeaders['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    return () => {
      if (subscriptions['/topic/sonmandu']) subscriptions['/topic/sonmandu'].unsubscribe();
    };
  }, []);

  const handleSubmit = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.type === 'keydown' && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <S.FormFiled onSubmit={sendMessage}>
        <S.MessageTypingArea
          placeholder="메세지 작성"
          value={messageInputValue}
          onChange={handleOnChange}
          onKeyDown={handleSubmit}
        />
        <S.SubmitButton disabled={false} type="submit">
          전송
        </S.SubmitButton>
      </S.FormFiled>
    </S.Container>
  );
}
