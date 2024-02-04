import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import * as Styled from './style';

interface FontFileUploadProps {
  onBack: () => void;
  /* onNext 에 파일을 인자로 해서 넘겨줘야하는 듯?*/
  onNext: () => void;
}

export default function FontFileUpload({
  onNext,
  onBack,
}: FontFileUploadProps) {
  const UploadURL = '/image/FileUpload.png';
  /* 이걸 recoil을 사용해야 할 것 같음*/
  const [UploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const OnFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      const validFiles = fileList.filter(
        (file) =>
          file.type === 'image/png' ||
          file.type === 'image/jpeg' ||
          file.type === 'image/gif',
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
      (file) =>
        file.type === 'image/png' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/gif',
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
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.ContentFileUploadInput
          id="file-upload"
          type="file"
          value=""
          onChange={OnFileUpload}
          accept=".png,.jpg,.jpeg,.gif"
        />
        <Styled.ContentFileUploadLabel
          id="file-upload"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          isDragging={isDragging}
        >
          <Image src={UploadURL} alt="업로드" width={50} height={50} />
          <Styled.ContentFileUploadTextbold>
            자료 이미지를 업로드 해주세요.
          </Styled.ContentFileUploadTextbold>
          <Styled.ContentFileUploadText>
            배경이 없는 <span>원본 화질</span>로 업로드 해주세요.{' '}
          </Styled.ContentFileUploadText>
        </Styled.ContentFileUploadLabel>
        <Styled.ContentUploadedFilesWrapper>
          <Styled.ContentUploadedFileTitle>
            업로드 된 파일
          </Styled.ContentUploadedFileTitle>
          <Styled.ContentUploadedFileList>
            {UploadedFiles.map((file, index) => (
              <Styled.ContentUploadedFile key={index}>
                {file.name}
                <Styled.ContentUploadedFileCancelButton
                  type="button"
                  disabled={false}
                  onClick={() => onRemoveFile(file)}
                >
                  X
                </Styled.ContentUploadedFileCancelButton>
              </Styled.ContentUploadedFile>
            ))}
          </Styled.ContentUploadedFileList>
        </Styled.ContentUploadedFilesWrapper>
      </Styled.ContentWrapper>
      <Styled.ButtonWrapper>
        <Styled.BackButton onClick={onBack} type="button" disabled={false}>
          <Styled.BackButtonText>이전 단계</Styled.BackButtonText>
        </Styled.BackButton>
        <Styled.NextButton onClick={onNext} type="button" disabled={false}>
          {/* <Styled.NextButton onClick={onNext} type="button" disabled={UploadedFiles.length === 0}> */}
          <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
        </Styled.NextButton>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
