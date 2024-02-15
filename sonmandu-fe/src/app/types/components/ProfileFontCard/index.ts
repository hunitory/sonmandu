import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export interface ProfileFontCardProps {
  downloadCount: number;
  downloadUrl: string;
  handwritingId: number;
  hitCount: number;
  isLike: boolean;
  likeCount: number;
  name: string;
  createDate: string;
  state?: number;
  tag: number[];
}

export interface RefetchProps {
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, Error>>;
}
