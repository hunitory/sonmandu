package com.nofriend.sonmandube.handwriting.controller.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL) // Null 값인 필드 제외
public class MyHandwritingResponse {

    private Long handwritingApplicationId;
    private Long handwritingId;
    private String name;
    private int state;
    private String downloadUrl;
    private int hitCount;
    private int likeCount;
    private int downloadCount;
    private boolean isLike;
    private List<Integer> tag;
    private LocalDateTime createDate;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static MyHandwritingResponse from(Handwriting handwriting, boolean isLike) {
        return MyHandwritingResponse.builder()
                .handwritingId(handwriting.getHandwritingId())
                .name(handwriting.getName())
                .isLike(isLike)
                .state(handwriting.getHandwritingApplication().getState())
                .downloadUrl(handwriting.getDownloadUrl())
                .hitCount(handwriting.getHitCount())
                .likeCount(handwriting.getLikeCount())
                .downloadCount(handwriting.getDownloadCount())
                .createDate(handwriting.getCreateDate())
                .tag(
                        handwriting.getHandwritingApplication()
                                .getHandwritingTagList()
                                .stream()
                                .map(handwritingTag -> handwritingTag.getHandwritingTagId().getTagId())
                                .toList()
                )
                .build();
    }

    public static MyHandwritingResponse from(HandwritingApplication application) {
        return MyHandwritingResponse.builder()
                .handwritingApplicationId(application.getHandwritingApplicationId())
                .name(application.getName())
                .state(application.getState())
                .tag(
                        application
                                .getHandwritingTagList()
                                .stream()
                                .map(handwritingTag -> handwritingTag.getHandwritingTagId().getTagId())
                                .toList()
                )
                .build();
    }
}
