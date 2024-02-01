package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.HandwritingResponse;
import com.nofriend.sonmandube.handwriting.controller.response.SimpleHandwritingResponse;
import com.nofriend.sonmandube.handwriting.domain.HandwritingCountType;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface HandwritingService {

    void applyHandwriting(HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image);

    void saveFont(String name, MultipartFile font);

    List<SimpleHandwritingResponse> searchHandwriting(int start, int count, SearchConditionRequest condition);

    HandwritingResponse getHandwritingDetails(Long memberId, Long handwritingId);

    void changeLikeStatus(Long memberId, Long handwritingId);

    void updateDownloadCount(Long memberId, Long handwritingId);

    void updateHitCount(Long memberId, Long handwritingId);

    void updateCountWeight(HandwritingCountType countType, Long handwritingId);
}
