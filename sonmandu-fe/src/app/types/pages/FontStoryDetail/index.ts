export interface FontStoryDetailResponse {
  CommentList: string[]; //추가 안됨
  content: string;
  createDate: string;
  handwritingStoryId: number;
  hitCount: number;
  isLike: boolean;
  likeCount: number;
  member: {
    imageUrl: null | string;
    introduction: null | string;
    memberId: number;
    name: string;
  };
  name: string;
  title: string;
}
