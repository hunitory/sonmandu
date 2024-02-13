export interface ProfileBoxProps {
  imageUrl: string | undefined;
  nickname: React.ReactNode;
  badge?: boolean;
  imgSize: string;
  fontSize?: string;
  memberId: number;
  className?: string;
}
