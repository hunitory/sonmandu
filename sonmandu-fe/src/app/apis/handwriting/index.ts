import { instanceJsonContent } from 'apis/_instance';
import axios, { AxiosResponse } from 'axios';

interface fontListInGalleryArgs {
  startIdx: number;
  takeCount: number;
  tagId?: string | null;
  sort?: 'desc' | 'popular' | 'hit' | 'likes' | 'download' | string | null;
  name?: string | null;
}
export async function fontListInGallery({ startIdx, takeCount, tagId, sort, name }: fontListInGalleryArgs) {
  return instanceJsonContent.get(
    `/handwritings/gallery?start=${startIdx}&count=${takeCount}&tagId=${tagId}&sort=${sort}&name=${name}`,
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

export async function fontDetail({ fontId }: { fontId: number }) {
  return instanceJsonContent.get(`/handwritings/gallery/${fontId}`);
}
