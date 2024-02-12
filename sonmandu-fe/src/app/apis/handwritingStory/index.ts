import { instanceJsonContent } from 'apis/_instance';
import axios, { AxiosResponse } from 'axios';

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

export async function getFontFileFromS3({ url }: { url: string }) {
  const resourceExtension = url.slice(url.length - 3, url.length);
  return await axios.get(url, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': `font/${resourceExtension}`,
    },
  });
}

export async function loadFontInService({
  getFontResponse,
  name,
}: {
  getFontResponse: AxiosResponse | undefined;
  name: string;
}) {
  const fontBuffer = getFontResponse?.data;
  const fontBase64 = Buffer.from(fontBuffer).toString('base64');
  const customFont = new FontFace(name, `url(data:${getFontResponse?.headers['content-type']};base64,${fontBase64})`, {
    display: 'fallback',
  });

  document.fonts.add(customFont);
  return await customFont.load();
}

export async function handwritingStoryLike({ id }: { id: number | undefined }) {
  return instanceJsonContent.post(`/handwritings/story/${id}/likes`);
}

export async function handwritingStoryDetail({ fontStoryId }: { fontStoryId: string }): Promise<AxiosResponse> {
  return instanceJsonContent.get(`/handwritings/story/${fontStoryId}`);
}

export async function handwritingStoryDelete({ handwritingStoryId }: { handwritingStoryId: number }) {
  return instanceJsonContent.delete(`/handwritings/story/${handwritingStoryId}`);
}

export async function handwritingStoryComment({
  handwritingStoryId,
  content,
}: {
  handwritingStoryId: number;
  content: string;
}) {
  return instanceJsonContent.post(`/handwritings/story/${handwritingStoryId}/comment`, {
    content: content,
  });
}

export async function handwritingStoryCommentEdit({
  handwritingStoryId,
  handwritingStoryCommentId,
  commentContent,
}: {
  handwritingStoryId: number;
  handwritingStoryCommentId: number;
  commentContent: string;
}) {
  return instanceJsonContent.patch(`/handwritings/story/${handwritingStoryId}/comments/${handwritingStoryCommentId}`, {
    content: commentContent,
  });
}

export async function handwritingStoryCommentDelete({
  handwritingStoryId,
  handwritingStoryCommentId,
}: {
  handwritingStoryId: number;
  handwritingStoryCommentId: number;
}) {
  return instanceJsonContent.delete(`/handwritings/story/${handwritingStoryId}/comments/${handwritingStoryCommentId}`);
}

export async function getHandwritingStory({ memberId }: { memberId: string }) {
  return instanceJsonContent.get(`/handwritings/story/owner/${memberId}`)
}