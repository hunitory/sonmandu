'use client';

import React, { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import Image from 'next/image';
import { Client, StompHeaders, StompSubscription } from '@stomp/stompjs';
import { BaseButton } from 'components';

let stompClient: Client;
let isConnected = false;
const subscriptions: { [key: string]: StompSubscription } = {};

export default function ChattingMessageContainer() {
  const [messageInputValue, setMessageInputValue] = useState('');
  const config = {
    brokerURL: 'wss://i10b111.p.ssafy.io/dev/api/chat-connection',
    onConnect: () => {},
  };

  const sendMessage = () => {
    const body = {
      message: messageInputValue,
      handwritingId: 3,
    };
    stompClient.publish({ destination: '/topic/sonmandu', body: JSON.stringify(body) });
  };

  const connect = useCallback(() => {
    if (!stompClient) {
      stompClient = new Client(config);
      stompClient.activate();
    }

    stompClient.onConnect = () => {
      isConnected = true;
      stompClient.subscribe('/topic/sonmandu', (message) => console.log(`Received: ${message.body}`));
    };
  }, []);

  const send = useCallback(
    (path: string, body: object, headers: StompHeaders) => {
      stompClient.publish({
        destination: path,
        headers,
        body: JSON.stringify(body),
      });
    },
    [stompClient],
  );

  const subscribe = useCallback((path: string, callback: (msg: any) => void) => {
    if (!stompClient) return;

    if (subscriptions[path]) return;

    const subscription = stompClient.subscribe(path, (message) => {
      const body = JSON.parse(message.body);
      callback(body);
    });
    subscriptions[path] = subscription;
  }, []);

  const unsubscribe = useCallback((path: string) => {
    subscriptions[path].unsubscribe();
    delete subscriptions[path];
  }, []);

  const disconnect = useCallback(() => {
    stompClient.deactivate();
  }, [stompClient]);

  useEffect(() => {
    connect();
    stompClient.connectHeaders['Authorization'] = `Bearer ${localStorage.getItem('refresh_token')}`;
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
      <form onSubmit={sendMessage}>
        <S.MessageTypingArea
          placeholder="메세지 작성"
          value={messageInputValue}
          onChange={handleOnChange}
          onKeyDown={handleSubmit}
        />
        <BaseButton disabled={false} type="submit">
          전송
        </BaseButton>
      </form>
    </S.Container>
  );
}
