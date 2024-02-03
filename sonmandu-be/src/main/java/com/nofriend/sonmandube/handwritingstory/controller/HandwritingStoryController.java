package com.nofriend.sonmandube.handwritingstory.controller;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.SimpleHandwritingResponse;
import com.nofriend.sonmandube.handwritingstory.application.HandwritingStoryService;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryCommentRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryModifyRequest;
import com.nofriend.sonmandube.handwritingstory.controller.request.HandwritingStoryRequest;
import com.nofriend.sonmandube.handwritingstory.controller.response.HandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.OthersHandwritingStoryResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.SimpleHandwritingStoryResponse;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.ast.tree.expression.Star;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/handwritings/story")
public class HandwritingStoryController {

    private final HandwritingStoryService handwritingStoryService;

    @GetMapping
    public ResponseEntity<List<SimpleHandwritingStoryResponse>> searchHandwriting(
            @RequestParam int start,
            @RequestParam int count,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String title,
            Authentication authentication
    ) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        SearchConditionRequest condition = new SearchConditionRequest(sort, title, name);
        List<SimpleHandwritingStoryResponse> handwritingList = handwritingStoryService.searchHandwriting(memberId, start, count, condition);
        return ResponseEntity.ok(handwritingList);
    }


    @PreAuthorize("hasRole('USER')")
    @PostMapping
    public ResponseEntity<Void> save(@RequestPart("data") HandwritingStoryRequest handwritingStoryRequest,
                                     @RequestPart("thumbnail") MultipartFile thumbnail,
                                     Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.save(memberId, handwritingStoryRequest, thumbnail);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/{handwritingStoryId}")
    ResponseEntity<HandwritingStoryResponse> getHandwritingStoryDetail(
            @PathVariable Long handwritingStoryId,
            Authentication authentication
    ) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        HandwritingStoryResponse handwritingStoryResponse =
                handwritingStoryService.getHandwritingStoryDetail(memberId, handwritingStoryId);
        return ResponseEntity.ok(handwritingStoryResponse);
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/{handwritingStoryId}")
    public ResponseEntity<Void> delete(@PathVariable Long handwritingStoryId, Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.delete(memberId, handwritingStoryId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/{handwritingStoryId}")
    public ResponseEntity<Void> modify(@PathVariable Long handwritingStoryId,
                                       @RequestPart("thumbnail") MultipartFile thumbnail,
                                       @RequestPart("data") HandwritingStoryModifyRequest request,
                                       Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.modify(memberId, handwritingStoryId, request, thumbnail);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{handwritingStoryId}/likes")
    public ResponseEntity<Void> changeLikeState(@PathVariable Long handwritingStoryId,
                                                Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.changeLikeStatus(memberId, handwritingStoryId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{handwritingStoryId}/comments")
    public ResponseEntity<Void> addComment(@PathVariable Long handwritingStoryId,
                                           @RequestBody HandwritingStoryCommentRequest handwritingStoryCommentRequest,
                                           Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.addComment(memberId, handwritingStoryId, handwritingStoryCommentRequest);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/{handwritingStoryId}/comments/{handwritingStoryCommentId}")
    public ResponseEntity<Void> modifyComment(@PathVariable Long handwritingStoryId,
                                              @PathVariable Long handwritingStoryCommentId,
                                              @RequestBody HandwritingStoryCommentRequest handwritingStoryCommentRequest,
                                              Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.modifyComment(memberId, handwritingStoryCommentId, handwritingStoryCommentRequest);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/{handwritingStoryId}/comments/{handwritingStoryCommentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long handwritingStoryId,
                                              @PathVariable Long handwritingStoryCommentId,
                                              Authentication authentication) {
        Long memberId = Long.parseLong(authentication.getName());
        handwritingStoryService.deleteComment(memberId, handwritingStoryCommentId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/owner/{targetId}")
    public ResponseEntity<List<OthersHandwritingStoryResponse>> getAllStoryByMemberId(@PathVariable Long targetId,
                                                                                      Authentication authentication) {
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        List<OthersHandwritingStoryResponse> response = handwritingStoryService.getAllByMemberId(memberId, targetId);
        return ResponseEntity.ok(response);
    }

}
