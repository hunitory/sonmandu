package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class SimpleHandwritingStoryResponse {

    private Long handwritingStoryId;
    private String title;
    private String name;
    private String thumbnail;
    private int hitCount;
    private int likeCount;
    private boolean isLike;

    private SimpleMemberResponse member;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static SimpleHandwritingStoryResponse from(HandwritingStory handwritingStory, boolean isLike) {
        return SimpleHandwritingStoryResponse.builder()
                .handwritingStoryId(handwritingStory.getHandwriting().getHandwritingId())
                .title(handwritingStory.getTitle())
                .name(handwritingStory.getHandwriting().getName())
                .thumbnail(handwritingStory.getThumbnail())
                .isLike(isLike)
                .hitCount(handwritingStory.getHitCount())
                .likeCount(handwritingStory.getLikeCount())
                .member(SimpleMemberResponse.from(handwritingStory.getMember()))
                .build();
    }
}
