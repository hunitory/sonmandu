import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import * as Styled from './style';

interface FontFileUpload {
  onBack: () => void;
  onNext: () => void;
}

export default function FontFileUpload({ onNext, onBack }: FontFileUpload) {
  const DownloadURL = '/image/FileUpload.png';
  /* 이걸 recoil을 사용해야 할 것 같음*/
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(event.target.files)]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      setUploadedFiles([
        ...uploadedFiles,
        ...Array.from(event.dataTransfer.files),
      ]);
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setUploadedFiles(uploadedFiles.filter((file) => file !== fileToRemove));
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.ContentFileUpload
          id="file-upload"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-upload"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragLeave={handleDrop}
          onDragEnter={handleDrop}
        >
          <Image src={DownloadURL} alt="다운로드" width={50} height={50} />
          <Styled.ContentFileUploadTextbold>
            자료 이미지를 업로드 해주세요.
          </Styled.ContentFileUploadTextbold>
          <Styled.ContentFileUploadText>
            배경이 없는 <span>원본 화질</span>로 업로드 해주세요.{' '}
          </Styled.ContentFileUploadText>
        </label>
        <Styled.ContentUploadedFilesWrapper>
          <Styled.ContentUploadedFileTitle>
            업로드 된 파일
          </Styled.ContentUploadedFileTitle>
          <Styled.ContentUploadedFileList>
            {uploadedFiles.map((file, index) => (
              <Styled.ContentUploadedFile key={index}>
                {file.name}
                <Styled.ContentUploadedFileCancelButton
                  type="button"
                  disabled={false}
                  onClick={() => handleRemoveFile(file)}
                >
                  X
                </Styled.ContentUploadedFileCancelButton>
              </Styled.ContentUploadedFile>
            ))}
          </Styled.ContentUploadedFileList>
        </Styled.ContentUploadedFilesWrapper>
        <Styled.ButtonWrapper>
          <Styled.BackButton onClick={onBack} type="button" disabled={false}>
            <Styled.BackButtonText>이전 단계</Styled.BackButtonText>
          </Styled.BackButton>
          <Styled.NextButton onClick={onNext} type="button" disabled={false}>
            {/* <Styled.NextButton onClick={onNext} type="button" disabled={uploadedFiles.length === 0}> */}
            <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
}
