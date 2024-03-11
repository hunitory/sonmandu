package com.nofriend.sonmandube.handwritingstory.application;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryCommentRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryModifyRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryRequest;
import com.nofriend.sonmandube.handwritingstory.controller.response.HandwritingStoryResponse;

import com.nofriend.sonmandube.handwritingstory.controller.response.OthersHandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.SimpleHandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryCountType;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface HandwritingStoryService {

    void save(Long memberId, HandwritingStoryRequest handwritingStoryRequest, MultipartFile thumbnail);

    HandwritingStoryResponse getHandwritingStoryDetail(Long memberId, Long handwritingStoryId);

    void delete(Long memberId, Long handwritingStoryId);

    void modify(Long memberId, Long handwritingStoryId, HandwritingStoryModifyRequest dto, MultipartFile thumbnail);

    void changeLikeStatus(Long memberId, Long handwritingStoryId);

    void updateHitCount(Long memberId, Long handwritingStoryId);

    void updateCountWeight(HandwritingStoryCountType countType, Long handwritingStoryId);

    List<SimpleHandwritingStoryResponse> searchHandwriting(Long memberId, int start, int count, SearchConditionRequest condition);

    void addComment(Long memberId, Long handwritingStoryId, HandwritingStoryCommentRequest handwritingStoryCommentRequest);

    void modifyComment(Long memberId, Long handwritingStoryCommentId, HandwritingStoryCommentRequest handwritingStoryCommentRequest);

    void deleteComment(Long memberId, Long handwritingStoryCommentId);

    List<OthersHandwritingStoryResponse> getAllByMemberId(Long memberId, Long targetId);
}