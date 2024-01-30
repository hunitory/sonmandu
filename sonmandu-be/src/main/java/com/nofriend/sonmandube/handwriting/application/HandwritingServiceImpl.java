package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTag;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTagId;
import com.nofriend.sonmandube.handwriting.repository.HandwritingApplicationRepository;
import com.nofriend.sonmandube.handwriting.repository.HandwritingTagRepository;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class HandwritingServiceImpl implements HandwritingService{

    private final HandwritingApplicationRepository handwritingApplicationRepository;
    private final HandwritingTagRepository handwritingTagRepository;

    @Override
    @Transactional
    public void applyHandwriting(HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image) {
        // 이미지 저장
        FileDto savedImage = FileUtil.uploadImageFile(image);

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

}
