package com.nofriend.sonmandube.s3;


import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.nofriend.sonmandube.exception.FailedFileSaveException;
import com.nofriend.sonmandube.exception.FileNotFoundException;
import com.nofriend.sonmandube.util.FileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class S3Service {

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public FileDto saveFile(MultipartFile multipartFile, String filename) {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getSize());
        metadata.setContentType(multipartFile.getContentType());

        try {
            amazonS3.putObject(bucket, getFolderName() +"/"+ filename, multipartFile.getInputStream(), metadata);
        } catch (IOException e) {
            throw new FailedFileSaveException("S3에 파일을 저장하지 못했습니다.");
        }
        return new FileDto(filename, amazonS3.getUrl(bucket, getFolderName() +"/"+filename).toString());
    }

    public void deleteFile(String fileUrl) {
        String key = extractStoredFilePathFromUrl(fileUrl);
        try {
            amazonS3.deleteObject(bucket, key);
        } catch (AmazonServiceException e) {
            throw new FileNotFoundException("파일을 찾지 못했습니다.");
        }
    }

    private String getFolderName() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault());
        Date date = new Date();
        String str = sdf.format(date);
        return str.replace("-", "/");
    }

    /*
    S3 파일 URL로 부터 경로 추출
    */
    public String extractStoredFilePathFromUrl(String fileUrl) {
        String splitStr = ".com/";
        String path = fileUrl.substring(fileUrl.lastIndexOf(splitStr) + splitStr.length());
        System.out.println((path).replace(File.separatorChar, '/'));
        return (path).replace(File.separatorChar, '/');
    }
}
