'use client';

import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface ChattingSideBarProps {
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

export default function ChattingMessageContainer({ curSelectedFont }: ChattingSideBarProps) {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messageScrollWrapperRef = useRef<HTMLDivElement>(null);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [subscription, setSubscription] = useState<StompSubscription | null>(null);
  const [messageManager, setMessageManager] = useState<ChattingMessage[]>([]);
  const [messageInputValue, setMessageInputValue] = useState('');

  const queryKey = ['get-previous-message'];
  const { data: previousMessages, isFetching: isLoadingPreviousMessages } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const serverRes = await API.chat.getPreviousMessage();
      setMessageManager((previous) => {
        if (previous.length === 0) return [...serverRes.data];
        return [...serverRes.data.map((res: ChattingMessage) => previous.filter((prev) => prev.chatId !== res.chatId))];
      });
      return serverRes;
    },
    refetchInterval: false,
    refetchOnMount: 'always',
    retry: 1,
  });

  const recivedMessageConverter = (msg: ReceivedMessage) => {
    const { chatHandwritingResponse: handwritingRes, chatMemberResponse: memberRes } = msg;
    return {
      chatId: msg.chatId,
      createTime: msg.createTime,
      handwriting: {
        name: handwritingRes.name,
        handwritingId: handwritingRes.handwritingId,
        downloadUrl: handwritingRes.downloadUrl,
      },
      member: {
        badge: memberRes.badge,
        nickname: memberRes.nickname,
        memberId: memberRes.memberId,
        imageUrl: memberRes.imageUrl,
      },
      message: msg.message,
    };
  };

  useEffect(() => {
    const client = new Client({
      brokerURL: 'wss://i10b111.p.ssafy.io/dev/api/chat-connection',
      connectHeaders: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      reconnectDelay: 0,
      onConnect: (frame) => {
        const topicSubscription: StompSubscription = client.subscribe('/topic/sonmandu', (message: IMessage) => {
          const msg: ReceivedMessage = JSON.parse(message.body);
          setMessageManager((prev) => [recivedMessageConverter(msg), ...prev]);
        });
        setSubscription(topicSubscription);
      },
    });

    client.activate();
    setStompClient(client);
    return () => {
      if (client) {
        if (subscription) client.unsubscribe(subscription.id);
        client.deactivate({ force: true });

        setStompClient(null);
        setSubscription(null);
        setMessageManager([]);
      }
    };
  }, []);

  useEffect(() => {
    if (messageContainerRef?.current) {
      messageScrollWrapperRef.current?.scrollTo({ top: messageContainerRef?.current.clientHeight });
    }
  }, [messageManager]);

  const sendMessage = () => {
    if (stompClient) {
      const body = {
        message: messageInputValue,
        handwritingId: curSelectedFont.fontId,
      };
      stompClient.publish({ destination: '/app/sonmandu', body: JSON.stringify(body) });
      setMessageInputValue('');
    }
  };

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
        <S.ScrollAbleContainer ref={messageScrollWrapperRef}>
          <S.AllMessageContainer ref={messageContainerRef}>
            {!isLoadingPreviousMessages &&
              messageManager?.map((msg, i) => (
                <S.MessageElement key={`chat-message-${msg.chatId}-${i}`}>
                  {msg.member.imageUrl && msg.member.imageUrl !== null ? (
                    <Comp.CustomImage src={msg.member.imageUrl} width={42} height={42} alt="프사" />
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
      <S.FormFiled>
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
