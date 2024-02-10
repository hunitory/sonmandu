package com.nofriend.sonmandube.handwritingstory.application;

import com.nofriend.sonmandube.exception.IdNotFoundException;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.domain.*;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryCommentRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryModifyRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryRequest;
import com.nofriend.sonmandube.handwritingstory.controller.response.HandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.OthersHandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.SimpleHandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.domain.*;
import com.nofriend.sonmandube.handwritingstory.repository.HandwritingStoryCommentRepository;
import com.nofriend.sonmandube.handwritingstory.repository.HandwritingStoryHitRepository;
import com.nofriend.sonmandube.handwritingstory.repository.HandwritingStoryLikeRepository;
import com.nofriend.sonmandube.handwritingstory.repository.HandwritingStoryRepository;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
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
public class HandwritingStoryServiceImpl implements HandwritingStoryService{

    private final HandwritingStoryRepository handwritingStoryRepository;
    private final MemberRepository memberRepository;
    private final HandwritingRepository handwritingRepository;
    private final S3Service s3Service;
    private final HandwritingStoryLikeRepository likeRepository;
    private final HandwritingStoryHitRepository hitRepository;
    private final HandwritingStoryCommentRepository commentRepository;

    @Transactional
    public void save(Long memberId, HandwritingStoryRequest handwritingStoryRequest, MultipartFile thumbnail) {

        log.info("memberId : " + memberId);
        log.info("handwritingStoryRequest : " + handwritingStoryRequest.toString());

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("회원이 존재하지 않습니다."));
        Handwriting handwriting = handwritingRepository.findById(handwritingStoryRequest.getHandwritingId())
                .orElseThrow(() -> new IdNotFoundException("손글씨가 존재하지 않습니다."));
        HandwritingStory handwritingStory;
        if(thumbnail.isEmpty()) {
            handwritingStory = handwritingStoryRequest.toEntity(member, handwriting);
        }
        else {
            // 썸네일 저장
            FileDto fileDto = s3Service.saveFile(thumbnail, FileUtil.createFileName(thumbnail));
            handwritingStory = handwritingStoryRequest.toEntity(member, handwriting, fileDto.getUrl());
        }
        log.info("success save handwrtingStory");
        log.info(handwritingStory.toString());
        handwritingStoryRepository.save(handwritingStory);
    }

    @Transactional
    public HandwritingStoryResponse getHandwritingStoryDetail(Long memberId, Long handwritingStoryId) {
        HandwritingStory handwritingStory = handwritingStoryRepository.findById(handwritingStoryId)
                .orElseThrow(() -> new IdNotFoundException("해당 손글씨 이야기를 찾을 수 없습니다."));
        // 좋아요 확인
        boolean isLike = false;
        if(memberId != null) {
            if(likeRepository.existsById(new HandwritingStoryCountId(memberId, handwritingStoryId))) {
                isLike = true;
            }
            updateHitCount(memberId, handwritingStoryId);
        }

        return HandwritingStoryResponse.from(handwritingStory, isLike);

    }

    @Transactional
    public void delete(Long memberId, Long handwritingStoryId) {
        HandwritingStory handwritingStory = handwritingStoryRepository.findByHandwritingStoryIdAndMemberMemberId(handwritingStoryId, memberId)
                .orElseThrow(() -> new IdNotFoundException("일치하는 정보가 없습니다."));
        // 썸네일 삭제
        s3Service.deleteFile(handwritingStory.getThumbnail());
        // 데이터 삭제
        handwritingStoryRepository.delete(handwritingStory);
    }

    @Transactional
    public void modify(Long memberId, Long handwritingStoryId, HandwritingStoryModifyRequest dto, MultipartFile thumbnail) {
        HandwritingStory handwritingStory = handwritingStoryRepository.findByHandwritingStoryIdAndMemberMemberId(handwritingStoryId, memberId)
                .orElseThrow(() -> new IdNotFoundException("일치하는 정보가 없습니다."));

        handwritingStory.setTitle(dto.getTitle());
        handwritingStory.setContent(dto.getContent());

        // 기존 이미지 삭제 후 새로운 이미지 저장
        if(!thumbnail.isEmpty()) {
            s3Service.deleteFile(handwritingStory.getThumbnail());
            FileDto fileDto = s3Service.saveFile(thumbnail, FileUtil.createFileName(thumbnail));
            handwritingStory.setThumbnail(fileDto.getUrl());
        }

        handwritingStoryRepository.save(handwritingStory);
    }


    /*
    좋아요 토글 및 가중치
     */
    @Override
    @Transactional
    public void changeLikeStatus(Long memberId, Long handwritingStoryId) {
        HandwritingStoryCountId handwritingStoryLikeId = new HandwritingStoryCountId(memberId, handwritingStoryId);
        Optional<HandwritingStoryLike> like = likeRepository.findById(handwritingStoryLikeId);
        if(like.isPresent()) { // 좋아요가 눌려있음 -> 좋아요 취소
            likeRepository.delete(like.get());
            // 가중치, 횟수 감소
            updateCountWeight(HandwritingStoryCountType.LIKES_DOWN, handwritingStoryId);
        } else { // 좋아요가 눌러져있지 않음 -> 좋아요
            HandwritingStory handwritingStory = handwritingStoryRepository.findByHandwritingStoryIdAndMemberMemberId(handwritingStoryId, memberId)
                    .orElseThrow(() -> new IdNotFoundException("일치하는 정보가 없습니다."));
            Member member = memberRepository.findById(memberId)
                    .orElseThrow(() -> new IdNotFoundException("회원이 존재하지 않습니다."));

            HandwritingStoryLike handwritingStoryLike = HandwritingStoryLike.builder()
                    .handwritingStoryLikeId(handwritingStoryLikeId)
                    .member(member)
                    .handwritingStory(handwritingStory)
                    .build();
            likeRepository.save(handwritingStoryLike);
            // 가중치, 횟수 증가
            updateCountWeight(HandwritingStoryCountType.LIKES_UP, handwritingStoryId);
        }

    }


    /*
    조회수 및 가중치 증가
     */
    @Transactional
    public void updateHitCount(Long memberId, Long handwritingStoryId) {
        HandwritingStoryCountId handwritingStoryHitId = new HandwritingStoryCountId(memberId, handwritingStoryId);
        Optional<HandwritingStoryHit> download = hitRepository.findById(handwritingStoryHitId);
        if(download.isEmpty()) {
            HandwritingStory handwritingStory = handwritingStoryRepository.findById(handwritingStoryId)
                    .orElseThrow(() -> new IdNotFoundException("일치하는 정보가 없습니다."));
            Member member = memberRepository.findById(memberId)
                    .orElseThrow(() -> new IdNotFoundException("회원이 존재하지 않습니다."));

            HandwritingStoryHit handwritingStoryHit = HandwritingStoryHit.builder()
                    .handwritingStoryHitId(handwritingStoryHitId)
                    .member(member)
                    .handwritingStory(handwritingStory)
                    .build();
            hitRepository.save(handwritingStoryHit);
            updateCountWeight(HandwritingStoryCountType.HIT_UP, handwritingStoryId);
        }
    }

    /*
    Handwriting 테이블의 count 증가 및 가중치 값 증가
     */
    @Transactional
    public void updateCountWeight(HandwritingStoryCountType countType, Long handwritingStoryId) {
        HandwritingStory handwritingStory = handwritingStoryRepository.findById(handwritingStoryId)
                .orElseThrow(() -> new IdNotFoundException("해당 손글씨를 찾지 못했습니다."));
        switch (countType) {
            case HIT_UP :
                handwritingStory.upHitCount();
                break;
            case LIKES_UP:
                handwritingStory.upLikeCount();
                break;
            case LIKES_DOWN:
                handwritingStory.downLikeCount();
                break;
        }
        handwritingStory.plusWeight(countType.getValue());
        handwritingStoryRepository.save(handwritingStory);
    }

    @Override
    public List<SimpleHandwritingStoryResponse> searchHandwriting(Long memberId, int start, int count, SearchConditionRequest condition) {
        List<HandwritingStory> handwritingStoryList = handwritingStoryRepository.findByDynamicConditions(start, count, condition);
        if(memberId == null) {
            return handwritingStoryList.stream().map(handwritingStory -> SimpleHandwritingStoryResponse.from(handwritingStory, false)).toList();
        }

        List<SimpleHandwritingStoryResponse> simpleHandwritingStoryResponseList = new ArrayList<>();
        for (int i=0; i<handwritingStoryList.size(); i++) {
            HandwritingStory handwritingStory = handwritingStoryList.get(i);
            boolean isLike = false;
            if(likeRepository.existsById(new HandwritingStoryCountId(memberId, handwritingStory.getHandwritingStoryId()))){
                isLike = true;
            }
            simpleHandwritingStoryResponseList.add(SimpleHandwritingStoryResponse.from(handwritingStory, isLike));
        }
        return simpleHandwritingStoryResponseList;
    }

    @Override
    public void addComment(Long memberId, Long handwritingStoryId, HandwritingStoryCommentRequest handwritingStoryCommentRequest) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("회원이 존재하지 않습니다."));
        HandwritingStory handwritingStory = handwritingStoryRepository.findByHandwritingStoryIdAndMemberMemberId(handwritingStoryId, memberId)
                .orElseThrow(() -> new IdNotFoundException("일치하는 정보가 없습니다."));

        HandwritingStoryComment comment = handwritingStoryCommentRequest.toEntity(member, handwritingStory);
        commentRepository.save(comment);
    }

    @Override
    public void modifyComment(Long memberId, Long handwritingStoryCommentId, HandwritingStoryCommentRequest handwritingStoryCommentRequest) {
        HandwritingStoryComment comment = commentRepository.findById(handwritingStoryCommentId)
                .orElseThrow(() -> new IdNotFoundException("댓글이 존재하지 않습니다."));
        comment.setContent(handwritingStoryCommentRequest.getContent());
        commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Long memberId, Long handwritingStoryCommentId) {
        HandwritingStoryComment comment = commentRepository.findById(handwritingStoryCommentId)
                .orElseThrow(() -> new IdNotFoundException("댓글이 존재하지 않습니다."));
        commentRepository.delete(comment);
    }

    @Override
    public List<OthersHandwritingStoryResponse> getAllByMemberId(Long memberId, Long targetId) {
        List<HandwritingStory> handwritingStoryList = handwritingStoryRepository.findAllByMemberMemberId(targetId);
        if(memberId == null) {
            return handwritingStoryList.stream()
                    .map(handwritingStory -> OthersHandwritingStoryResponse.from(handwritingStory, false))
                    .toList();
        }

        List<OthersHandwritingStoryResponse> simpleHandwritingStoryResponseList = new ArrayList<>();
        for (int i=0; i<handwritingStoryList.size(); i++) {
            HandwritingStory handwritingStory = handwritingStoryList.get(i);
            boolean isLike = false;
            if(likeRepository.existsById(new HandwritingStoryCountId(memberId, handwritingStory.getHandwritingStoryId()))){
                isLike = true;
            }
            simpleHandwritingStoryResponseList.add(OthersHandwritingStoryResponse.from(handwritingStory, isLike));
        }
        return simpleHandwritingStoryResponseList;
    }


}
