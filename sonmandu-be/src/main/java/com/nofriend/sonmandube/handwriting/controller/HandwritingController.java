package com.nofriend.sonmandube.handwriting.controller;

import com.nofriend.sonmandube.handwriting.application.HandwritingService;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

}
