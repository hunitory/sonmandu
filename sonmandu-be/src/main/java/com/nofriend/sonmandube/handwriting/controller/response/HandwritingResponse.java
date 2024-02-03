package com.nofriend.sonmandube.handwriting.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwritingstory.controller.response.MemberIntroductionResponse;
import com.nofriend.sonmandube.handwritingstory.controller.response.SimpleMemberResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HandwritingResponse {

    private Long handwritingId;

    private String name;

    private String downloadUrl;

    private int hitCount;

    private int likeCount;

    private int downloadCount;

    private List<Integer> tagIdList;

    private boolean isLike;

    private MemberIntroductionResponse member;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static HandwritingResponse from(Handwriting handwriting, boolean isLike) {
        return HandwritingResponse.builder()
                .handwritingId(handwriting.getHandwritingId())
                .name(handwriting.getName())
                .isLike(isLike)
                .downloadUrl(handwriting.getDownloadUrl())
                .downloadCount(handwriting.getDownloadCount())
                .hitCount(handwriting.getHitCount())
                .likeCount(handwriting.getLikeCount())
                .tagIdList(
                        handwriting.getHandwritingApplication().getHandwritingTagList().stream().map(handwritingTag
                                -> handwritingTag.getHandwritingTagId().getTagId()).toList()
                )
                .member(MemberIntroductionResponse.from(handwriting.getHandwritingApplication().getMember()))
                .build();
    }
}
