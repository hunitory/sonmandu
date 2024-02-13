import { instanceJsonContent } from 'apis/_instance';
import axios, { AxiosResponse } from 'axios';

export async function PopolarfontList() {
  return instanceJsonContent.get(`/handwritings/gallery/popular`);
}

export async function getPopolarFontFileFromS3({ url }: { url: string }) {
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

export async function fontDetail({ fontId }: { fontId: string }): Promise<AxiosResponse> {
  return instanceJsonContent.get(`/handwritings/gallery/${fontId}`);
}

export async function fontLikesClick({ fontId }: { fontId: string }) {
  return instanceJsonContent.patch(`/handwritings/gallery/${fontId}/likes`);
}

export async function fontDownload({ fontId }: { fontId: string }) {
  return instanceJsonContent.patch(`/handwritings/gallery/${fontId}/download`);
}
