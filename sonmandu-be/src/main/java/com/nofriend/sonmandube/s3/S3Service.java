package com.nofriend.sonmandube.s3;


import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.nofriend.sonmandube.exception.FailedFileSaveException;
import com.nofriend.sonmandube.util.FileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

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
            amazonS3.putObject(bucket, filename, multipartFile.getInputStream(), metadata);
        } catch (IOException e) {
            throw new FailedFileSaveException("S3에 파일을 저장하지 못했습니다.");
        }
        return new FileDto(filename, amazonS3.getUrl(bucket, filename).toString());
    }
}
