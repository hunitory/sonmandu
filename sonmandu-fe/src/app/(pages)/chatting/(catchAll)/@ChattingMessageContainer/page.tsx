'use client';

import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as API from '@/apis';
import * as Comp from '@/components';
import Image from 'next/image';
import { Client, IFrame, StompSubscription } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';

let stompClient: Client;
let isConnected = false;
const subscriptions: { [key: string]: StompSubscription } = {};

interface ChattingMessage {
  chatId: number;
  createTime: string;
  handwriting: {
    name: string;
    handwritingId: number;
    downloadUrl: string;
  };
  member: { badge: boolean; nickname: string; memberId: number; imageUrl: string };
  message: string;
}

export default function ChattingMessageContainer() {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messageScrollWrapperRef = useRef<HTMLDivElement>(null);
  const [messageManager, setMessageManager] = useState<{ messages: ChattingMessage[]; containerHeight: number }>({
    messages: [],
    containerHeight: 0,
  });

  const queryKey = ['get-previous-message'];
  const { data: previousMessages, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.chat.getPreviousMessage().then((res) => {
        setMessageManager((prev) => ({ ...prev, messages: [...prev.messages, ...res.data] }));
        return res;
      }),
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    retry: 1,
  });

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

  useEffect(() => {
    if (messageContainerRef?.current) {
      console.log(`높이 :`, messageContainerRef?.current.clientHeight);
      messageScrollWrapperRef.current?.scrollTo({ top: messageContainerRef?.current.clientHeight });
      setMessageManager((prev) => ({ ...prev, containerHeight: messageContainerRef?.current?.clientHeight || 0 }));
    }
  }, [messageManager.messages]);

  return (
    <S.Container>
      <S.HiddenWrapper>
        <S.ScrollAbleContainer ref={messageScrollWrapperRef}>
          <S.AllMessageContainer ref={messageContainerRef}>
            {messageManager.messages.map((msg, i) => (
              <S.MessageElement key={`chat-message-${msg.chatId}`}>
                {msg.member.imageUrl && msg.member.imageUrl !== 'null' ? (
                  <Image src={msg.member.imageUrl} width={28} height={28} alt="프사" />
                ) : (
                  <Comp.NoProfileImage width={28} height={28} memberId={msg.member.memberId}>
                    {msg.member.nickname}
                  </Comp.NoProfileImage>
                )}
                <S.NicknameAndMessgeWrapper $fontName={msg.handwriting.name}>
                  <p>{msg.member.nickname}</p>
                  <p>{msg.message}</p>
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
