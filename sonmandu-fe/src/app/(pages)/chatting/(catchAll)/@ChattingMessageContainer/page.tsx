'use client';

import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import Image from 'next/image';
import { Client, IFrame, StompSubscription } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';

let stompClient: Client;
let isConnected = false;
const subscriptions: { [key: string]: StompSubscription } = {};

interface ChattingSideBarProps {
  requestFonts: (serverRes: T.FontCard[]) => Promise<void>;
  curSelectedFont: { fontId: number; fontName: string };
}

interface ChattingMessage {
  chatId: number;
  createTime: string;
  handwriting: {
    name: string;
    handwritingId: number;
    downloadUrl: string;
  };
  member: { badge: boolean; nickname: string; memberId: number; imageUrl: string | null };
  message: string;
}

interface ReceivedMessage {
  chatHandwritingResponse: {
    handwritingId: number;
    name: string;
    downloadUrl: string;
  };
  chatId: number;
  chatMemberResponse: { memberId: number; nickname: string; badge: boolean; imageUrl: string | null };
  createTime: string;
  message: string;
}

export default function ChattingMessageContainer({ requestFonts, curSelectedFont }: ChattingSideBarProps) {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messageScrollWrapperRef = useRef<HTMLDivElement>(null);
  const [messageManager, setMessageManager] = useState<ChattingMessage[]>([]);

  const queryKey = ['get-previous-message'];
  const { data: previousMessages, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.chat.getPreviousMessage().then((serverRes) => {
        console.log(`serverRes :`, serverRes.data);
        setMessageManager((prev) => [...prev, ...serverRes.data]);
        return serverRes;
      }),
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    retry: 1,
  });

  const [messageInputValue, setMessageInputValue] = useState('');
  const sendMessage = () => {
    const body = {
      message: messageInputValue,
      handwritingId: curSelectedFont.fontId,
    };
    stompClient.publish({ destination: '/app/sonmandu', body: JSON.stringify(body) });
    setMessageInputValue('');
  };

  const connect = useCallback(() => {
    const config = {
      brokerURL: 'wss://i10b111.p.ssafy.io/dev/api/chat-connection',
      onConnect: (frame: IFrame) => console.log(`frame IN CONFIG :`, frame),
    };
    if (!stompClient) {
      stompClient = new Client(config);
      stompClient.activate();
    }

    stompClient.onConnect = () => {
      isConnected = true;
      const subscribe = stompClient.subscribe('/topic/sonmandu', (message) => {
        const body: ReceivedMessage = JSON.parse(message.body);

        const newBody = {
          chatId: body.chatId,
          createTime: body.createTime,
          handwriting: {
            name: body.chatHandwritingResponse.name,
            handwritingId: body.chatHandwritingResponse.handwritingId,
            downloadUrl: body.chatHandwritingResponse.downloadUrl,
          },
          member: {
            badge: body.chatMemberResponse.badge,
            nickname: body.chatMemberResponse.nickname,
            memberId: body.chatMemberResponse.memberId,
            imageUrl: body.chatMemberResponse.imageUrl,
          },
          message: body.message,
        };
        console.log(`newBody :`, newBody);
        setMessageManager((prev) => [newBody, ...prev]);
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
    console.log(`아이템 리스트 :`, messageManager);
    if (messageContainerRef?.current) {
      messageScrollWrapperRef.current?.scrollTo({ top: messageContainerRef?.current.clientHeight });
    }
  }, [messageManager]);

  return (
    <S.Container>
      <S.HiddenWrapper>
        <S.ScrollAbleContainer ref={messageScrollWrapperRef}>
          <S.AllMessageContainer ref={messageContainerRef}>
            {messageManager.map((msg, i) => (
              <S.MessageElement key={`chat-message-${msg.chatId}-${i}`}>
                {msg.member.imageUrl && msg.member.imageUrl !== null ? (
                  <Image src={msg.member.imageUrl} width={42} height={42} alt="프사" />
                ) : (
                  <Comp.NoProfileImage width={'42px'} height={'42px'} memberId={msg.member.memberId}>
                    {msg.member.nickname}
                  </Comp.NoProfileImage>
                )}
                <S.NicknameAndMessgeWrapper $fontName={msg.handwriting.name}>
                  <p>{msg.member.nickname}</p>
                  <p>{msg.message}</p>
                </S.NicknameAndMessgeWrapper>
                <p>{msg.createTime}</p>
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
          $fontName={curSelectedFont.fontName}
        />
        <S.SubmitButton disabled={false} type="submit">
          <Image src={'/image/orange-arrow-right.svg'} width={48} height={28} alt="전송하기" />
        </S.SubmitButton>
      </S.FormFiled>
    </S.Container>
  );
}
