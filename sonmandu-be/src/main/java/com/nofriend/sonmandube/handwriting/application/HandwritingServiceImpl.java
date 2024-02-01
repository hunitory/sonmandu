package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.exception.IdNotFoundException;
import com.nofriend.sonmandube.handwriting.controller.response.RankingResponse;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.*;
import com.nofriend.sonmandube.handwriting.domain.*;
import com.nofriend.sonmandube.handwriting.repository.*;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.s3.S3Service;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HandwritingServiceImpl implements HandwritingService{

    private final HandwritingApplicationRepository handwritingApplicationRepository;
    private final HandwritingTagRepository handwritingTagRepository;
    private final HandwritingRepository handwritingRepository;
    private final HandwritingLikeRepository handwritingLikeRepository;
    private final HandwritingDownloadRepository handwritingDownloadRepository;
    private final HandwritingHitRepository handwritingHitRepository;
    private final S3Service s3UploadService;

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
    @Transactional
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
    @Transactional
    public List<SimpleHandwritingResponse> searchHandwriting(int start, int count, SearchConditionRequest condition) {
        List<Handwriting> handwritingList = handwritingRepository.findByDynamicConditions(start, count, condition);
        return handwritingList.stream().map(SimpleHandwritingResponse::from).toList();
    }

    /*
    손글씨 상세 조회
     */
    @Override
    @Transactional
    public HandwritingResponse getHandwritingDetails(Long memberId, Long handwritingId) {
        System.out.println(handwritingId);
        Handwriting handwriting = handwritingRepository.findById(handwritingId)
                .orElseThrow(() -> new IdNotFoundException("손글씨 정보를 찾을 수 없습니다."));

        // 조회수 증가
        updateHitCount(memberId, handwritingId);

        return HandwritingResponse.from(handwriting);
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
        List<Handwriting> handwritingList = handwritingRepository.findAllByHandwritingApplicationMemberMemberId(memberId);

        // 손글씨 별 좋아요 확인
        // TODO : memberId 없을 경우 예외처리 필요
        List<MyHandwritingResponse> myHandwritingResponses = new ArrayList<>();
        for (int i=0; i<handwritingList.size(); i++) {
            Handwriting handwriting = handwritingList.get(i);
            boolean isLike = false;
            if(handwritingLikeRepository.existsById(new HandwritingCountId(memberId, handwriting.getHandwritingId()))){
                isLike = true;
            }
            myHandwritingResponses.add(MyHandwritingResponse.from(handwriting, isLike));
        }
        return myHandwritingResponses;
    }

    @Override
    public List<OthersHandwritingResponse> getOthersHandwritingList(Long memberId, Long targetId) {
        // 타겟 회원의 손글씨 조회
        List<Handwriting> handwritingList = handwritingRepository.findAllByHandwritingApplicationMemberMemberId(targetId);

        // 손글씨 별 좋아요 확인
        // TODO : memberId 없을 경우 예외처리 필요
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
    public List<SimpleHandwritingResponse> getPopularHandwritingList() {
        List<Handwriting> popularList = handwritingRepository.findTop10ByOrderByLastWeekDescCreateDateDesc();
        return popularList.stream().map(SimpleHandwritingResponse::from).toList();
    }
}
