package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.response.RankingResponse;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.*;
import com.nofriend.sonmandube.handwriting.domain.HandwritingCountType;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface HandwritingService {

    void applyHandwriting(Long memberId, HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image);

<<<<<<< HEAD
<<<<<<< HEAD
    void saveFont(Long handwritingApplicationId, MultipartFile font);
=======
    void saveFont(String name, Long handwritingApplicationId, MultipartFile font);
>>>>>>> 057e098 (fix: change state)
=======
    void saveFont(Long handwritingApplicationId, MultipartFile font);
>>>>>>> 4b3905b (refactor: change param save font)

    List<SimpleHandwritingResponse> searchHandwriting(Long memberId, int start, int count, SearchConditionRequest condition);

    HandwritingResponse getHandwritingDetails(Long memberId, Long handwritingId);

    void changeLikeStatus(Long memberId, Long handwritingId);

    void updateDownloadCount(Long memberId, Long handwritingId);

    void updateHitCount(Long memberId, Long handwritingId);

    void updateCountWeight(HandwritingCountType countType, Long handwritingId);

    List<MyHandwritingResponse> getMyHandwritingList(Long memberId);

    List<OthersHandwritingResponse> getOthersHandwritingList(Long memberId, Long targetId);

    RankingResponse getRankingList();

    List<SimpleHandwritingResponse> getPopularHandwritingList(Long memberId);

    List<UnwrittenStoriesResponse> getUnwrittenStories(Long memberId);
<<<<<<< HEAD
<<<<<<< HEAD

    Boolean checkUniqueName(String value);
=======
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======

    Boolean checkUniqueName(String value);
>>>>>>> 341ad76 (feat: add check unique handwriting name)
}
