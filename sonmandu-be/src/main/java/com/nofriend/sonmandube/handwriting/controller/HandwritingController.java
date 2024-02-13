package com.nofriend.sonmandube.handwriting.controller;

import com.nofriend.sonmandube.handwriting.application.HandwritingService;
import com.nofriend.sonmandube.handwriting.controller.response.RankingResponse;
import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import org.springframework.http.HttpStatus;
>>>>>>> ae05ff2 (feat: update logout security)
=======
>>>>>>> 1c41759 (fix: status 500)
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
@Slf4j
public class HandwritingController {

    private final HandwritingService handwritingService;

//    @PreAuthorize("hasRole('USER')")
    @PostMapping
    public ResponseEntity<Void> applyHandwriting(
            @RequestPart(name = "image") MultipartFile image,
            @RequestPart(name = "info") HandwritingApplicationRequest handwritingApplicationRequest,
            Authentication authentication
            ) {
        Long memberId = Long.parseLong(authentication.getName());

        handwritingService.applyHandwriting(memberId, handwritingApplicationRequest, image);
        return ResponseEntity.noContent().build();
    }

    // TODO : 테스트용 폰트 저장 API
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/save")
    public ResponseEntity<Void> saveFont(//@RequestPart(name = "name") String name,
                                         @RequestPart(name = "handwritingApplicationId") String handwritingApplicationId,
                                         @RequestPart(name = "font") MultipartFile font) {
        log.info("/handwritings/save");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        handwritingService.saveFont(Long.parseLong(handwritingApplicationId), font);
        return ResponseEntity.noContent().build();
=======
        handwritingService.saveFont(name, font);
<<<<<<< HEAD
=======
        for(int i = 0; i < 100; i++){
            handwritingService.saveFont(name, font);

        }
>>>>>>> 3540f78 (feat: update jwt token informantion)
=======
        handwritingService.saveFont(name, font);
>>>>>>> 47bb621 (hotfix: delete test code)
        return ResponseEntity.status(HttpStatus.OK).build();
>>>>>>> ae05ff2 (feat: update logout security)
=======
        return ResponseEntity.noContent().build();
>>>>>>> be46cd8 (feat: chatting)
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
        log.info("/handwritings/gallery");
        Long memberId = null;
        if(authentication != null) memberId = Long.parseLong(authentication.getName());
        List<Integer> tagIdList = new ArrayList<>();
        if(!tagId.isBlank() && !tagId.isEmpty()) tagIdList = Arrays.stream(tagId.split(",")).map(Integer::parseInt).toList();
        System.out.println(tagIdList);
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
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/gallery/{handwritingId}/download")
    public ResponseEntity<Void> updateDownloadCount(@PathVariable Long handwritingId, Authentication authentication) {
        handwritingService.updateDownloadCount(Long.parseLong(authentication.getName()), handwritingId);
        return ResponseEntity.noContent().build();
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 341ad76 (feat: add check unique handwriting name)
    @GetMapping("/unique/name")
    public ResponseEntity<Boolean> checkUniqueName(@RequestParam String value){
        log.info(value);
        return ResponseEntity.ok(handwritingService.checkUniqueName(value));
    }
<<<<<<< HEAD
=======
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======
>>>>>>> 341ad76 (feat: add check unique handwriting name)
}
