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

export interface IsLikeCount {
  isLike: boolean | undefined;
  count: number | undefined;
}

export interface SideBarProps {
  isLike?: boolean | undefined;
  count?: number | undefined;
  setCopyIsLikeAndCount: React.Dispatch<React.SetStateAction<IsLikeCount | undefined>>;
  handwritingStoryId?: number | undefined;
}
