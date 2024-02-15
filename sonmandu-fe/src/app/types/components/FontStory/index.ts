export interface StoryData {
  CommentList: [
    {
      HandwritingStoryCommentId: number;
      content: string;
      createDate: string;
    },
  ];
  content: string;
  createDate: string;
  handwritingStoryId: number;
  hitCount: number;
  isLike: false;
  likeCount: number;
  member: {
    memberId: number;
    name: string;
    imageUrl: string;
    introduction: string;
    badge: boolean; // 나중에 초기값 false로 변경해줘야함
  };
  title: string;
}
