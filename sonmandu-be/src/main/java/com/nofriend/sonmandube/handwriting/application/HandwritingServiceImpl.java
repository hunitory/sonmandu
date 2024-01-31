package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.SimpleHandwritingResponse;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTag;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTagId;
import com.nofriend.sonmandube.handwriting.repository.HandwritingApplicationRepository;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.handwriting.repository.HandwritingTagRepository;
import com.nofriend.sonmandube.s3.S3UploadService;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HandwritingServiceImpl implements HandwritingService{

    private final HandwritingApplicationRepository handwritingApplicationRepository;
    private final HandwritingTagRepository handwritingTagRepository;
    private final HandwritingRepository handwritingRepository;
    private final S3UploadService s3UploadService;

    @Override
    @Transactional
    public void applyHandwriting(HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image) {
        // 이미지 저장
        FileDto savedImage = s3UploadService.saveFile(image, FileUtil.createFileName(image));

        // 신청서 저장
        HandwritingApplication handwritingApplication =
                handwritingApplicationRepository.save(
                    handwritingApplicationRequest.toEntity(savedImage.getUrl())
                );

        // 태그 저장
        for(int tagId : handwritingApplicationRequest.getTagIdList()) {
            HandwritingTag tag = HandwritingTag.builder()
                    .handwritingTagId(new HandwritingTagId(tagId))
                    .build();
            handwritingApplication.addHandwritingTag(tag);
            handwritingTagRepository.save(tag);
        }

        // TODO : AI를 활용한 폰트 제작 과정 필요
    }

    @Override
    public void saveFont(String name, MultipartFile font) {
        // 폰트 파일 저장
        FileDto fileDto = s3UploadService.saveFile(font, FileUtil.createFontName(name, font));

        // TODO : 폰트 지원서 연결

        // 폰트 데이터 저장
        Handwriting handwriting = Handwriting.builder()
                .name(name)
                .downloadUrl(fileDto.getUrl())
                .build();
        handwritingRepository.save(handwriting);
    }

    /*
    페이지번호, 아이템 개수, 정렬방식, 폰트명 검색에 따른 검색 지원
     */
    @Override
    public List<SimpleHandwritingResponse> searchHandwriting(int start, int count, SearchConditionRequest condition) {
        List<Handwriting> handwritingList = handwritingRepository.findByDynamicConditions(start, count, condition);
        return handwritingList.stream().map(SimpleHandwritingResponse::from).toList();
    }
}
