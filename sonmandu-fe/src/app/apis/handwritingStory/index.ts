import { instanceJsonContent } from 'apis/_instance';

interface fontListInGalleryArgs {
  startIdx: number;
  takeCount: number;
  tagId?: string | null;
  sort?: 'desc' | 'popular' | 'hit' | 'likes' | string | null;
  name?: string | null;
}

export async function handwritingStoryList({ startIdx, takeCount, sort, name }: fontListInGalleryArgs) {
  return instanceJsonContent.get(
    `/handwritings/story?start=${startIdx}&count=${takeCount}&name=${name}&title=${name}&sort=${sort}`,
  );
}

export async function handwritingStoryLike({ id }: { id: number }) {
  return instanceJsonContent.post(`/handwritings/story/${id}/likes`);
}

export async function handwritingStoryDetail({ handwritingStoryId }: { handwritingStoryId: number }) {
  return instanceJsonContent.get(`/handwritings/story/${handwritingStoryId}`);
}
