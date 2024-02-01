package com.nofriend.sonmandube.handwriting.controller.response;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
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

    public static HandwritingResponse from(Handwriting handwriting) {
        return HandwritingResponse.builder()
                .handwritingId(handwriting.getHandwritingId())
                .name(handwriting.getName())
                .downloadUrl(handwriting.getDownloadUrl())
                .downloadCount(handwriting.getDownloadCount())
                .hitCount(handwriting.getHitCount())
                .likeCount(handwriting.getLikeCount())
                .tagIdList(
                        handwriting.getHandwritingApplication().getHandwritingTagList().stream().map(handwritingTag
                                -> handwritingTag.getHandwritingTagId().getTagId()).toList()
                )
                .build();
    }
}
