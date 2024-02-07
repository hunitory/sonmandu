'use client';

import React from 'react';
import * as API from '@/apis';
import { FontInfomation, FontTesting } from './_Sub';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

export default function FontDetailPage() {
  const params = useParams();
  const queryKey = ['font-detail', params['font-id']];
  const { data: res, isFetching: isFontDetailFetching } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.handwriting.fontDetail({ fontId: params['font-id'] as string }),
  });

  const { data: resFromS3, isFetching: isFileFetching } = useQuery({
    queryKey: ['get-font-file', res],
    queryFn: () => API.handwriting.getFontFileFromS3({ url: res?.data.downloadUrl }),
  });

  const { data: resLoadFont, isFetching: isLoadFetching } = useQuery({
    queryKey: ['load-font-file', resFromS3],
    queryFn: () => API.handwriting.loadFontInService({ getFontResponse: resFromS3, name: res?.data.name }),
  });

  const isAllResourcesLoad = () => {
    return !isFontDetailFetching && !isFileFetching && !isLoadFetching;
  };

  return (
    <>
      {res && <FontInfomation data={res.data} isAllResourcesLoad={isAllResourcesLoad} />}
      {res && <FontTesting fontName={res.data.name} isAllResourcesLoad={isAllResourcesLoad} />}
    </>
  );
}
