import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { FontFileUploadProps } from 'types';

export default function Thumbnail(props: FontFileUploadProps) {
  const { onBack, onNext } = props;
  const UploadURL = '/image/fileupload.png';
  const [UploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const OnFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      const validFiles = fileList.filter(
        (file) => file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif',
      );

      if (fileList.length !== validFiles.length) {
        alert('그림파일(PNG, JPG, JPEG, GIF)만 가능합니다.');
      }

      setUploadedFiles([...UploadedFiles, ...validFiles]);
    }
  };

  const DropFileUpload = (files: FileList) => {
    const fileList = Array.from(files);
    const validFiles = fileList.filter(
      (file) => file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif',
    );

    if (fileList.length !== validFiles.length) {
      alert('그림파일(PNG, JPG, JPEG, GIF)만 가능합니다.');
    }

    setUploadedFiles([...UploadedFiles, ...validFiles]);
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
      console.log(UploadedFiles);
    }
  };

  const onRemoveFile = (fileToRemove: File) => {
    setUploadedFiles(UploadedFiles.filter((file) => file !== fileToRemove));
  };

  return (
    <S.ContentWrapper>
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
    </S.ContentWrapper>
  );
}
