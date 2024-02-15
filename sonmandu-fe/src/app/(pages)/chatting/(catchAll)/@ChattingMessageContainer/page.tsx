'use client';

import React, { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export default function ChattingMessageContainer({ curSelectedFont }: T.ChattingContainerProps) {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messageScrollWrapperRef = useRef<HTMLDivElement>(null);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [subscription, setSubscription] = useState<StompSubscription | null>(null);
  const [messageManager, setMessageManager] = useState<T.ChattingMessage[]>([]);
  const [messageInputValue, setMessageInputValue] = useState('');

  const requestFontsFileAndLoad = useCallback(async (serverRes: T.ChattingMessage[]) => {
    const downloadUrls = serverRes.map((res: T.ChattingMessage) =>
      API.handwriting.getFontFileFromS3({ url: res.handwriting.downloadUrl }),
    );
    const responseFromS3 = await Promise.allSettled(downloadUrls);

    await Promise.allSettled(
      responseFromS3.map((res, i) => {
        if (res.status === 'fulfilled')
          return API.handwriting.loadFontInService({ getFontResponse: res.value, name: serverRes[i].handwriting.name });
      }),
    );
  }, []);

  const queryKey = ['get-previous-message'];
  const { data: previousMessages, isFetching: isLoadingPreviousMessages } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const serverRes = await API.chat.getPreviousMessage();
      console.log(`serverRes :`, serverRes.data);

      const filteredResponseBasket: T.ChattingMessage[] = [];
      setMessageManager((previous) => {
        if (previous.length === 0) return [...serverRes.data];
        serverRes.data.forEach((res: T.ChattingMessage, i: number) => {
          previous.forEach((prev) => prev.chatId === res.chatId && filteredResponseBasket.push(serverRes.data[i]));
        });
        return filteredResponseBasket;
      });

      await requestFontsFileAndLoad(filteredResponseBasket);

      return serverRes;
    },
    refetchInterval: false,
    refetchOnMount: 'always',
    retry: 1,
  });

  const recivedMessageConverter = (msg: T.ReceivedMessage) => {
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
          const msg: T.ReceivedMessage = JSON.parse(message.body);
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

  const handleEnterSubmit = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.type === 'keydown' && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendMessage();
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
          onKeyDown={handleEnterSubmit}
          $fontName={curSelectedFont.fontName}
        />
        <S.SubmitButton disabled={false} type="submit" onClick={handleClickSubmit}>
          <Image src={'/image/orange-arrow-right.svg'} width={48} height={28} alt="전송하기" />
        </S.SubmitButton>
      </S.FormFiled>
    </S.Container>
  );
}
