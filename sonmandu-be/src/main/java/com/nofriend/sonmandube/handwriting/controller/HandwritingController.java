package com.nofriend.sonmandube.handwriting.controller;

import com.nofriend.sonmandube.handwriting.application.HandwritingService;
import com.nofriend.sonmandube.handwriting.controller.response.RankingResponse;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/handwritings")
public class HandwritingController {

    private final HandwritingService handwritingService;

    @PreAuthorize("hasRole('USER')")
    @PostMapping
    public ResponseEntity<Void> applyHandwriting(
            @RequestPart(name = "image") MultipartFile image,
            @RequestPart(name = "info") HandwritingApplicationRequest handwritingApplicationRequest,
            Authentication authentication
            ) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingService.applyHandwriting(memberId, handwritingApplicationRequest, image);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    // TODO : 테스트용 폰트 저장 API
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/save")
    public ResponseEntity<Void> saveFont(@RequestPart(name = "name") String name,
                                         @RequestPart(name = "font") MultipartFile font) {
        handwritingService.saveFont(name, font);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/gallery")
    public ResponseEntity<List<SimpleHandwritingResponse>> searchHandwriting(
            @RequestParam int start,
            @RequestParam int count,
            @RequestParam(required = false, defaultValue = "") String sort,
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(name = "tagId", required = false, defaultValue = "") String tagId,
            Authentication authentication
            ) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        List<Integer> tagIdList = new ArrayList<>();
        if(!tagId.isBlank() && !tagId.isEmpty()) tagIdList = Arrays.stream(tagId.split(",")).map(Integer::parseInt).toList();
        SearchConditionRequest condition = new SearchConditionRequest(sort, name, tagIdList);
        List<SimpleHandwritingResponse> handwritingList = handwritingService.searchHandwriting(memberId, start, count, condition);
        return ResponseEntity.ok(handwritingList);
    }

    @GetMapping("/gallery/{handwritingId}")
    public ResponseEntity<HandwritingResponse> getHandwritingDetails(@PathVariable Long handwritingId, Authentication authentication) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        HandwritingResponse handwritingResponse = handwritingService.getHandwritingDetails(memberId, handwritingId);
        return ResponseEntity.ok(handwritingResponse);
    }

    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/gallery/{handwritingId}/likes")
    public ResponseEntity<Void> changeLikeStatus(@PathVariable Long handwritingId, Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingService.changeLikeStatus(memberId, handwritingId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/gallery/{handwritingId}/download")
    public ResponseEntity<Void> updateDownloadCount(@PathVariable Long handwritingId, Authentication authentication) {
        handwritingService.updateDownloadCount(Long.parseLong(authentication.getName()), handwritingId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/owner")
    public ResponseEntity<List<MyHandwritingResponse>> getMyHandwritingList(Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        List<MyHandwritingResponse> myHandwritingResponseList = handwritingService.getMyHandwritingList(memberId);
        return ResponseEntity.ok(myHandwritingResponseList);
    }

    @GetMapping("/owner/{targetId}")
    public ResponseEntity<List<OthersHandwritingResponse>> getOthersHandwritingList(@PathVariable Long targetId, Authentication authentication) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        List<OthersHandwritingResponse> othersHandwritingResponseList = handwritingService.getOthersHandwritingList(memberId, targetId);
        return ResponseEntity.ok(othersHandwritingResponseList);
    }

    @GetMapping("/ranking")
    public ResponseEntity<RankingResponse> getRankingList() {
        RankingResponse ranking = handwritingService.getRankingList();
        return ResponseEntity.ok(ranking);
    }

    @GetMapping("/gallery/popular")
    public ResponseEntity<List<SimpleHandwritingResponse>> getPopularHandwritingList(Authentication authentication) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        List<SimpleHandwritingResponse> popularList = handwritingService.getPopularHandwritingList(memberId);
        return ResponseEntity.ok(popularList);
    }

    @GetMapping("/unwritten-stories")
    public ResponseEntity<List<UnwrittenStoriesResponse>> getUnwrittenStories(Authentication authentication){
        Long memberId = Long.valueOf(authentication.getName());
        return ResponseEntity.ok(handwritingService.getUnwrittenStories(memberId));
    }

}
