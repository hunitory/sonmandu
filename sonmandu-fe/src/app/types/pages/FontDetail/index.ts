export interface FontDetailResponse {
  downloadCount: number;
  downloadUrl: string;
  handwritingId: number;
  hitCount: number;
  isLike: boolean;
  likeCount: number;
  member: {
    imageUrl: null | string;
    introduction: null | string;
    memberId: number;
    nickname: string;
  };
  name: string;
  tagIdList: number[];
}

export interface FontInfomationProps {
  data: FontDetailResponse;
  isAllResourcesLoad: () => boolean;
}
