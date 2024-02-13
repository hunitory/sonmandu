package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.exception.IdNotFoundException;
import com.nofriend.sonmandube.handwriting.controller.response.RankingResponse;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.*;
import com.nofriend.sonmandube.handwriting.domain.*;
import com.nofriend.sonmandube.handwriting.repository.*;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======
>>>>>>> 1c41759 (fix: status 500)
import com.nofriend.sonmandube.handwritingstory.repository.HandwritingStoryRepository;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.s3.S3Service;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class HandwritingServiceImpl implements HandwritingService{

    private final HandwritingApplicationRepository handwritingApplicationRepository;
    private final HandwritingTagRepository handwritingTagRepository;
    private final HandwritingRepository handwritingRepository;
    private final HandwritingLikeRepository handwritingLikeRepository;
    private final HandwritingDownloadRepository handwritingDownloadRepository;
    private final HandwritingHitRepository handwritingHitRepository;
    private final HandwritingStoryRepository handwritingStoryRepository;
    private final S3Service s3UploadService;

    @Override
    @Transactional
    public void applyHandwriting(Long memberId, HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image) {
        // 이미지 저장
        FileDto savedImage = s3UploadService.saveFile(image, FileUtil.createFileName(image));

        // 신청서 저장
        HandwritingApplication handwritingApplication =
                handwritingApplicationRepository.save(
                    handwritingApplicationRequest.toEntity(
                            savedImage.getUrl(), // 저장된 이미지 URL
                            Member.builder().memberId(memberId).build() // 신청한 회원
                    )
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
    @Transactional
    public void saveFont(Long handwritingApplicationId, MultipartFile font) {
        // 폰트 파일 저장

<<<<<<< HEAD
        String fontname = handwritingApplicationRepository.findById(handwritingApplicationId)
                .orElseThrow(() -> new IdNotFoundException("해당하는 신청서가 없습니다."))
                .getName();

        FileDto fileDto = s3UploadService.saveFile(font, FileUtil.createFontName(fontname, font));
=======
        FileDto fileDto = s3UploadService.saveFile(font, FileUtil.createFontName(name, font));
>>>>>>> ae05ff2 (feat: update logout security)
        log.info(fileDto.toString());
        // TODO : 폰트 지원서 연결

        // 폰트 데이터 저장
        Handwriting handwriting = Handwriting.builder()
                .name(fontname)
                .downloadUrl(fileDto.getUrl())
<<<<<<< HEAD
                .isSelected(true)
                .handwritingApplication(
                        HandwritingApplication.builder()
<<<<<<< HEAD
                                .handwritingApplicationId(handwritingApplicationId)
=======
                .handwritingApplication(
                        HandwritingApplication.builder()
<<<<<<< HEAD
                                .handwritingApplicationId(1L)
>>>>>>> cfcf232 (feat: change dateTime)
=======
                                .handwritingApplicationId(1L) // 일단 1번으로
>>>>>>> ae05ff2 (feat: update logout security)
=======
                                .handwritingApplicationId(4L) // 일단 1번으로
>>>>>>> 1509951 (feat: setup table)
                                .build()
                )
                .build();
        handwritingRepository.save(handwriting);
<<<<<<< HEAD
        handwritingApplicationRepository.findById(handwritingApplicationId)
                .orElseThrow(() -> new IdNotFoundException("해당하는 이야기가 없습니다."))
                .saveFont();

=======
>>>>>>> ae05ff2 (feat: update logout security)
        log.info("success save handwriting");
    }

    /*
    페이지번호, 아이템 개수, 정렬방식, 폰트명 검색에 따른 검색 지원
     */
    @Override
    @Transactional
    public List<SimpleHandwritingResponse> searchHandwriting(Long memberId, int start, int count, SearchConditionRequest condition) {
        List<Handwriting> handwritingList = handwritingRepository.findByDynamicConditions(start, count, condition);
        if(memberId == null) {
<<<<<<< HEAD
<<<<<<< HEAD
            for (Handwriting handwriting: handwritingList){
                System.out.println(handwriting.toString());
            }
=======
//            for (Handwriting handwriting: handwritingList){
//                System.out.println(handwriting.toString());
//            }
>>>>>>> 26a1567 (fix: fix sort)
=======
            for (Handwriting handwriting: handwritingList){
                System.out.println(handwriting.toString());
            }
>>>>>>> 046f0ff (feat: change name to nickname)
            return handwritingList.stream().map(handwriting -> SimpleHandwritingResponse.from(handwriting, false)).toList();
        }

        List<SimpleHandwritingResponse> simpleHandwritingResponseList = new ArrayList<>();
        for (int i=0; i<handwritingList.size(); i++) {
            Handwriting handwriting = handwritingList.get(i);
            boolean isLike = false;
            if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwriting.getHandwritingId()))){
                isLike = true;
            }
            simpleHandwritingResponseList.add(SimpleHandwritingResponse.from(handwriting, isLike));
        }
        return simpleHandwritingResponseList;
    }

    /*
    손글씨 상세 조회
     */
    @Override
    @Transactional
    public HandwritingResponse getHandwritingDetails(Long memberId, Long handwritingId) {
        Handwriting handwriting = handwritingRepository.findById(handwritingId)
                .orElseThrow(() -> new IdNotFoundException("손글씨 정보를 찾을 수 없습니다."));

        // 조회수 증가
        boolean isLike = false;
        if(memberId != null) {
            updateHitCount(memberId, handwritingId);
            if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwritingId))) {
                isLike = true;
            }
        }
        return HandwritingResponse.from(handwriting, isLike);
    }

    @Override
    @Transactional
    public void changeLikeStatus(Long memberId, Long handwritingId) {
        HandwritingCountId handwritingLikeId = new HandwritingCountId(memberId, handwritingId);
        Optional<HandwritingLike> like = handwritingLikeRepository.findById(handwritingLikeId);
        if(like.isPresent()) { // 좋아요가 눌려있음 -> 좋아요 취소
            handwritingLikeRepository.delete(like.get());
            // 가중치, 횟수 감소
            updateCountWeight(HandwritingCountType.LIKES_DOWN, handwritingId);
        } else { // 좋아요가 눌러져있지 않음 -> 좋아요
            HandwritingLike handwritingLike = HandwritingLike.builder()
                    .handwritingLikeId(handwritingLikeId)
                    .member(Member.builder().memberId(memberId).build())
                    .handwriting(Handwriting.builder().handwritingId(handwritingId).build())
                    .build();
            handwritingLikeRepository.save(handwritingLike);
            // 가중치, 횟수 증가
            updateCountWeight(HandwritingCountType.LIKES_UP, handwritingId);
        }

    }

    @Override
    @Transactional
    public void updateDownloadCount(Long memberId, Long handwritingId) {
        // 비회원인 경우
        if(memberId == null) {
            updateCountWeight(HandwritingCountType.DOWNLOAD_UP, handwritingId);
            return;
        }

        // 회원인 경우
        HandwritingCountId handwritingDownloadId = new HandwritingCountId(memberId, handwritingId);
        Optional<HandwritingDownload> download = handwritingDownloadRepository.findById(handwritingDownloadId);
        if(download.isEmpty()) {
            HandwritingDownload handwritingDownload = HandwritingDownload.builder()
                    .handwritingDownloadId(handwritingDownloadId)
                    .member(Member.builder().memberId(memberId).build())
                    .handwriting(Handwriting.builder().handwritingId(handwritingId).build())
                    .build();
            handwritingDownloadRepository.save(handwritingDownload);
            // 가중치, 횟수 증가
            updateCountWeight(HandwritingCountType.DOWNLOAD_UP, handwritingId);
        }
    }

    @Transactional
    public void updateHitCount(Long memberId, Long handwritingId) {
        HandwritingCountId handwritingHitId = new HandwritingCountId(memberId, handwritingId);
        Optional<HandwritingHit> download = handwritingHitRepository.findById(handwritingHitId);
        if(download.isEmpty()) {
            HandwritingHit handwritingHit = HandwritingHit.builder()
                    .handwritingHitId(handwritingHitId)
                    .member(Member.builder().memberId(memberId).build())
                    .handwriting(Handwriting.builder().handwritingId(handwritingId).build())
                    .build();
            handwritingHitRepository.save(handwritingHit);
            updateCountWeight(HandwritingCountType.HIT_UP, handwritingId);
        }
    }

    /*
    Handwriting 테이블의 count 증가 및 가중치 값 증가
     */
    @Transactional
    public void updateCountWeight(HandwritingCountType countType, Long handwritingId) {
        Handwriting handwriting = handwritingRepository.findById(handwritingId)
                .orElseThrow(() -> new IdNotFoundException("해당 손글씨를 찾지 못했습니다."));
        switch (countType) {
            case HIT_UP :
                handwriting.upHitCount();
                break;
            case DOWNLOAD_UP:
                handwriting.upDownloadCount();
                break;
            case LIKES_UP:
                handwriting.upLikeCount();
                break;
            case LIKES_DOWN:
                handwriting.downLikeCount();
                break;
        }
        handwriting.plusThisWeek(countType.getValue());
        handwritingRepository.save(handwriting);
    }

    @Override
    public List<MyHandwritingResponse> getMyHandwritingList(Long memberId) {
<<<<<<< HEAD
<<<<<<< HEAD
        List<HandwritingApplication> handwritingApplicationList = handwritingApplicationRepository.findAllByMemberMemberIdOrderByStateAsc(memberId);
=======
        List<HandwritingApplication> handwritingApplicationList = handwritingApplicationRepository.findAllByMemberMemberId(memberId);
>>>>>>> 1c41759 (fix: status 500)
=======
        List<HandwritingApplication> handwritingApplicationList = handwritingApplicationRepository.findAllByMemberMemberIdOrderByStateAsc(memberId);
>>>>>>> 19c7009 (feat: add state filter)
        // 손글씨 별 좋아요 확인
        List<MyHandwritingResponse> myHandwritingResponses = new ArrayList<>();
        for (int i=0; i<handwritingApplicationList.size(); i++) {
            HandwritingApplication handwritingApplication = handwritingApplicationList.get(i);
<<<<<<< HEAD
<<<<<<< HEAD
            Optional<Handwriting> handwriting = handwritingRepository.findByHandwritingApplicationHandwritingApplicationId(handwritingApplication.getHandwritingApplicationId());
=======
            Optional<Handwriting> handwriting = handwritingRepository.findByHandwritingApplicationHandwritingApplicationIdAndIsSelected(handwritingApplication.getHandwritingApplicationId(), true);
>>>>>>> 1c41759 (fix: status 500)
=======
            Optional<Handwriting> handwriting = handwritingRepository.findByHandwritingApplicationHandwritingApplicationId(handwritingApplication.getHandwritingApplicationId());
>>>>>>> 316711b (fix: get my profile)
            boolean isLike = false;
            if(handwriting.isPresent()) {
                if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwriting.get().getHandwritingId()))){
                    isLike = true;
                }
                myHandwritingResponses.add(MyHandwritingResponse.from(handwriting.get(), isLike));
<<<<<<< HEAD
            }
            else {
                myHandwritingResponses.add(MyHandwritingResponse.from(handwritingApplication));
=======
>>>>>>> 1c41759 (fix: status 500)
            }
            else {
                myHandwritingResponses.add(MyHandwritingResponse.from(handwritingApplication));
            }
        }
        return myHandwritingResponses;
    }

    @Override
    public List<OthersHandwritingResponse> getOthersHandwritingList(Long memberId, Long targetId) {
        // 타겟 회원의 손글씨 조회
<<<<<<< HEAD
<<<<<<< HEAD
        List<Handwriting> handwritingList = handwritingRepository.findAllByHandwritingApplicationMemberMemberIdAndIsSelectedAndHandwritingApplicationStateGreaterThanEqual(targetId, true, 4);
=======
        List<Handwriting> handwritingList = handwritingRepository.findAllByHandwritingApplicationMemberMemberIdAndIsSelected(targetId, true);
>>>>>>> 1c41759 (fix: status 500)
=======
        List<Handwriting> handwritingList = handwritingRepository.findAllByHandwritingApplicationMemberMemberIdAndIsSelectedAndHandwritingApplicationStateGreaterThanEqual(targetId, true, 4);
>>>>>>> 19c7009 (feat: add state filter)

        // 손글씨 별 좋아요 확인
        if(memberId == null) { // 비회원
            return handwritingList.stream()
                    .map(handwriting -> OthersHandwritingResponse.from(handwriting, false)).toList();
        }

        // 회원인 경우 좋아요 확인
        List<OthersHandwritingResponse> othersHandwritingResponseList = new ArrayList<>();
        for (int i=0; i<handwritingList.size(); i++) {
            Handwriting handwriting = handwritingList.get(i);
            boolean isLike = false;
            if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwriting.getHandwritingId()))){
                isLike = true;
            }
            othersHandwritingResponseList.add(OthersHandwritingResponse.from(handwriting, isLike));
        }
        return othersHandwritingResponseList;
    }

    @Override
    public RankingResponse getRankingList() {
        // 지난 달 인기순위
        List<Handwriting> lastMonthList = handwritingRepository.findTop3ByOrderByLastMonthDescCreateDateDesc();

        // 지난 주 인기 순위
        List<Handwriting> lastWeekList = handwritingRepository.findTop5ByOrderByLastWeekDescCreateDateDesc();

        // DTO 변경
        List<RankingHandwritingResponse> rankingLastMonthList = lastMonthList.stream().map(RankingHandwritingResponse::from).toList();
        List<RankingHandwritingResponse> rankingLastWeekList = lastWeekList.stream().map(RankingHandwritingResponse::from).toList();

        return new RankingResponse(rankingLastMonthList, rankingLastWeekList);
    }

    @Override
    public List<SimpleHandwritingResponse> getPopularHandwritingList(Long memberId) {
        List<Handwriting> popularList = handwritingRepository.findTop10ByOrderByLastWeekDescCreateDateDesc();
        if(memberId == null) {
            return popularList.stream().map(handwriting -> SimpleHandwritingResponse.from(handwriting, false)).toList();
        }

        List<SimpleHandwritingResponse> simpleHandwritingResponseList = new ArrayList<>();
        for (int i=0; i<popularList.size(); i++) {
            Handwriting handwriting = popularList.get(i);
            boolean isLike = false;
            if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwriting.getHandwritingId()))){
                isLike = true;
            }
            simpleHandwritingResponseList.add(SimpleHandwritingResponse.from(handwriting, isLike));
        }
        return simpleHandwritingResponseList;
    }

    @Override
    public List<UnwrittenStoriesResponse> getUnwrittenStories(Long memberId) {
<<<<<<< HEAD
<<<<<<< HEAD
        return handwritingRepository.findAllByHandwritingApplicationMemberMemberIdAndIsSelected(memberId, true)
=======
        return handwritingRepository.findAllByHandwritingApplicationMemberMemberId(memberId)
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======
        return handwritingRepository.findAllByHandwritingApplicationMemberMemberIdAndIsSelected(memberId, true)
>>>>>>> 2f18c94 (feat: unwritten story)
                .stream()
                .filter(handwriting -> !handwritingStoryRepository.existsById(handwriting.getHandwritingId()))
                .map(handwriting -> {
                    return UnwrittenStoriesResponse.builder()
                            .handwritingId(handwriting.getHandwritingId())
                            .name(handwriting.getName())
                            .build();
                }).toList();
    }

    @Override
    public Boolean checkUniqueName(String value) {
        return !handwritingApplicationRepository.existsByName(value);
    }
}
