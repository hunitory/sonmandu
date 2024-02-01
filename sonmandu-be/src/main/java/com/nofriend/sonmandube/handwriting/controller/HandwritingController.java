package com.nofriend.sonmandube.handwriting.controller;

import com.nofriend.sonmandube.handwriting.application.HandwritingService;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.HandwritingResponse;
import com.nofriend.sonmandube.handwriting.controller.response.SimpleHandwritingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/handwriting")
public class HandwritingController {

    private final HandwritingService handwritingService;

    @PostMapping
    public ResponseEntity<Void> applyHandwriting(
            @RequestPart(name = "image") MultipartFile image,
            @RequestPart(name = "info") HandwritingApplicationRequest handwritingApplicationRequest
            ) {
        // TODO : 회원 정보 가져오기
        handwritingService.applyHandwriting(handwritingApplicationRequest, image);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    // TODO : 테스트용 폰트 저장 API
    @PostMapping("/save")
    public ResponseEntity<Void> saveFont(@RequestPart(name = "name") String name, @RequestPart(name = "font") MultipartFile font) {
        handwritingService.saveFont(name, font);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    // TODO : member 관련 코드 추가(memberId, isLike)
    @PostMapping("/gallery")
    public ResponseEntity<List<SimpleHandwritingResponse>> searchHandwriting(
            @RequestParam int start,
            @RequestParam int count,
            @RequestBody SearchConditionRequest condition
            ) {
        List<SimpleHandwritingResponse> handwritingList = handwritingService.searchHandwriting(start, count, condition);
        return ResponseEntity.ok(handwritingList);
    }

    @GetMapping("/gallery/{handwritingId}")
    public ResponseEntity<HandwritingResponse> getHandwritingDetails(@PathVariable Long handwritingId) {
        // TODO : member 연결, member 정보 response에 포함
        Long memberId = 1L;
        HandwritingResponse handwritingResponse = handwritingService.getHandwritingDetails(memberId, handwritingId);
        return ResponseEntity.ok(handwritingResponse);
    }

    @PatchMapping("/gallery/{handwritingId}/likes")
    public ResponseEntity<Void> changeLikeStatus(@PathVariable Long handwritingId) {
        // TODO : member 연결, member 정보 response에 포함
        Long memberId = 1L;
        handwritingService.changeLikeStatus(memberId, handwritingId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PatchMapping("/gallery/{handwritingId}/download")
    public ResponseEntity<Void> updateDownloadCount(@PathVariable Long handwritingId) {
        // TODO : member 연결, member 정보 response에 포함
        Long memberId = 1L;
        handwritingService.updateDownloadCount(memberId, handwritingId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
