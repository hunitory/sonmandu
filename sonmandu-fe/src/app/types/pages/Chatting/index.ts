import { Dispatch, SetStateAction } from 'react';

export interface RankingFont {
  downloadCount: number;
  downloadUrl: string;
  handwritingId: number;
  hitCount: number;
  isLike: boolean;
  likeCount: number;
  name: string;
  tag: number[];
}
export interface MyFont {
  handwritingId: number;
  name: string;
  state: number;
  downloadUrl: string;
  hitCount: number;
  likeCount: number;
  downloadCount: number;
  tag: number[];
  isLike: boolean;
}

export interface ChattingSideBarProps {
  myFont: { list: MyFont[]; isLoading: boolean };
  rankingFont: {
    list: { thisMonthHandwriting: RankingFont[]; thisWeekHandwriting: RankingFont[] };
    isLoading: boolean;
  };
  setSelectedFont: Dispatch<SetStateAction<{ fontId: number; fontName: string }>>;
}

export interface ChattingMessage {
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

export interface ReceivedMessage {
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

export interface ChattingContainerProps {
  curSelectedFont: { fontId: number; fontName: string };
}
