import { instanceJsonContent } from 'apis/_instance';

interface fontListInGalleryArgs {
  startIdx: number;
  takeCount: number;
  tagId?: string;
  sort?: 'desc' | 'popular' | 'hit' | 'likes' | 'download' | string;
  name?: string;
}
export async function fontListInGallery({
  startIdx,
  takeCount,
  tagId,
  sort,
  name,
}: fontListInGalleryArgs) {
  return instanceJsonContent.get(
    `/handwritings/gallery?start=${startIdx}&count=${takeCount}&tagId=${tagId}&sort=${sort}&name=${name}`,
  );
}

export async function fontDetail({ fontId }: { fontId: number }) {
  return instanceJsonContent.get(`/handwritings/gallery/${fontId}`);
}
