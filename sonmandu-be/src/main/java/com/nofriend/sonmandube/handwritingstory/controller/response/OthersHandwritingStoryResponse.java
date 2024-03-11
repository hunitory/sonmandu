package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OthersHandwritingStoryResponse {

    private Long handwritingStoryId;
    private String title;
    private String name;
    private String thumbnail;
    private int hitCount;
    private int likeCount;
    private boolean isLike;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static OthersHandwritingStoryResponse from(HandwritingStory handwritingStory, boolean isLike) {
        return OthersHandwritingStoryResponse.builder()
                .handwritingStoryId(handwritingStory.getHandwriting().getHandwritingId())
                .title(handwritingStory.getTitle())
                .name(handwritingStory.getHandwriting().getName())
                .thumbnail(handwritingStory.getThumbnail())
                .isLike(isLike)
                .hitCount(handwritingStory.getHitCount())
                .likeCount(handwritingStory.getLikeCount())
                .build();
    }
}
