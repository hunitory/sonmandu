'use client';

import React, { useEffect, useState } from 'react';
import * as Styled from './_style';
import * as Comp from 'components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { uploadedFilesState } from 'store/index';

export default function FontFileUpload() {
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useRecoilState(uploadedFilesState);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const token = !!localStorage.getItem('access_token');
    if (!token) {
      alert('로그인이 필요합니다.');
      router.push('/');
    }
  });

  const OnFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      const validFiles = fileList.filter(
        (file) => file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif',
      );

      if (fileList.length !== validFiles.length) {
        alert('그림파일(PNG, JPG, JPEG, GIF)만 가능합니다.');
      }

      setUploadedFiles([...uploadedFiles, ...validFiles]);
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

    setUploadedFiles([...uploadedFiles, ...validFiles]);
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

  const onRemoveFile = (fileToRemove: File) => {
    setUploadedFiles(uploadedFiles.filter((file) => file !== fileToRemove));
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (uploadedFiles.length > 0) {
        e.returnValue = '입력한 정보가 저장되지 않습니다. 페이지를 떠나시겠습니까?'; // 이 메시지는 보이지 않음
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [uploadedFiles]);

  return (
    <Styled.Wrapper>
      <Styled.StepWrapper>
        <Comp.FontStep value="시작하기" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="파일 업로드" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="손글씨 정보 입력" isactive="false"></Comp.FontStep>
        <Comp.FontStep value="신청완료" isactive="false"></Comp.FontStep>
      </Styled.StepWrapper>
      <Styled.Card>
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
            <Comp.CustomImage src={'/image/downloadIcon-orange.svg'} alt="파일업로드" width={50} height={50} />
            <Styled.ContentFileUploadTextbold>자료 이미지를 업로드 해주세요.</Styled.ContentFileUploadTextbold>
            <Styled.ContentFileUploadText>
              배경이 없는 <span>원본 화질</span>로 업로드 해주세요.{' '}
            </Styled.ContentFileUploadText>
          </Styled.ContentFileUploadLabel>
          <Styled.ContentUploadedFilesWrapper>
            <Styled.ContentUploadedFileTitle>업로드 된 파일</Styled.ContentUploadedFileTitle>
            <Styled.ContentUploadedFileList>
              {uploadedFiles.map((file, index) => (
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
          <Comp.NextButton link="/create-font">
            <Styled.NextButtonText>이전 단계</Styled.NextButtonText>
          </Comp.NextButton>
          <Styled.NextButton
            onClick={() => router.push('/create-font/info')}
            type="button"
            disabled={uploadedFiles.length === 0}
          >
            <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
}
