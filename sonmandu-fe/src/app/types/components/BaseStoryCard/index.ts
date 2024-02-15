export interface BaseStoryCard {
  handwritingStoryId: number;
  title: string;
  name: string;
  thumbnail: string;
  hitCount: number;
  likeCount: number;
  member: {
    memberId: number;
    nickname: string;
    imageUrl: string | null;
    badge: boolean;
  };
  isLike: boolean;
  onClick?: (...args: any) => void;
}
