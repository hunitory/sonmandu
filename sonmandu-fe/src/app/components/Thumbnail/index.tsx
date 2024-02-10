import React, { useEffect, useState } from 'react';
import * as S from './style';
import Image from 'next/image';

interface ThumbnailProps {
  onFileSelect: (files: File) => void;
}

export default function Thumbnail({ onFileSelect }: ThumbnailProps) {
  const [UploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const OnFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif') {
        onFileSelect(file);
        setUploadedFile(file);
      } else {
        alert('그림파일(PNG, JPG, JPEG, GIF)만 가능합니다.');
      }
    }
  };

  const DropFileUpload = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];

      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif') {
        onFileSelect(file);
        setUploadedFile(file);
      } else {
        alert('그림파일(PNG, JPG, JPEG, GIF)만 가능합니다.');
      }
    }
  };

  const onDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const onDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (event.dataTransfer.files) {
      DropFileUpload(event.dataTransfer.files);
    }
  };

  useEffect(() => {
    if (UploadedFile) {
      const imageUrl = URL.createObjectURL(UploadedFile);
      setUploadedImageUrl(imageUrl);

      return () => {
        URL.revokeObjectURL(imageUrl);
      };
    }
  }, [UploadedFile]);

  return (
    <S.ContentWrapper>
      {uploadedImageUrl && (
        <>
          <S.ContentFileUploadInput
            id="file-upload"
            type="file"
            value=""
            onChange={OnFileUpload}
            accept=".png,.jpg,.jpeg,.gif"
          />
          <S.ContentFileUploadLabel
            id="file-upload"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            isDragging={isDragging}
          >
            <Image src={uploadedImageUrl} alt="Uploaded Image" width={162} height={126} />
          </S.ContentFileUploadLabel>
        </>
      )}
      {!uploadedImageUrl && (
        <>
          <S.ContentFileUploadInput
            id="file-upload"
            type="file"
            value=""
            onChange={OnFileUpload}
            accept=".png,.jpg,.jpeg,.gif"
          />
          <S.ContentFileUploadLabel
            id="file-upload"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            isDragging={isDragging}
          >
            <Image src={'/image/downloadIcon-orange.svg'} alt="파일업로드" width={50} height={50} />
            <S.ContentFileUploadTextbold>
              썸네일 이미지를
              <br /> 업로드 해주세요
            </S.ContentFileUploadTextbold>
          </S.ContentFileUploadLabel>
        </>
      )}
    </S.ContentWrapper>
  );
}
