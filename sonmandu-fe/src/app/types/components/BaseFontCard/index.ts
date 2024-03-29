export interface FontCard {
  handwritingId: number;
  name: string;
  downloadUrl: string;
  hitCount: number;
  likeCount: number;
  downloadCount: number;
  tag: number[];
  isLike: boolean;
  letter: { isShow: boolean; idx: number };
  onClick?: (...args: any) => void;
  className?: string;
}
