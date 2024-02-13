export interface BaseStoryCardProps {
  handwritingStoryId: number;
  title: string;
  name: string;
  thumbnail: string;
  hitCount: number;
  likeCount: number;
  member: {
    memberId: number;
    name: string;
    imageUrl: string | null;
  };
  isLike: boolean;
}
