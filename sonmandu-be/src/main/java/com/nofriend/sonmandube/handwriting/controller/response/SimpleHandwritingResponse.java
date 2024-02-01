package com.nofriend.sonmandube.handwriting.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class SimpleHandwritingResponse {

    private Long handwritingId;
    private String name;
    private String downloadUrl;
    private int hitCount;
    private int likeCount;
    private int downloadCount;
    private boolean isLike;
    private List<Integer> tag;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static SimpleHandwritingResponse from(Handwriting handwriting) {
        return SimpleHandwritingResponse.builder()
                .handwritingId(handwriting.getHandwritingId())
                .name(handwriting.getName())
                .downloadUrl(handwriting.getDownloadUrl())
                .hitCount(handwriting.getHitCount())
                .likeCount(handwriting.getLikeCount())
                .downloadCount(handwriting.getDownloadCount())
                .tag(
                        handwriting.getHandwritingApplication()
                                .getHandwritingTagList()
                                .stream()
                                .map(handwritingTag -> handwritingTag.getHandwritingTagId().getTagId())
                                .toList()
                )
                .build();
    }
}
