package com.nofriend.sonmandube.handwriting.controller.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class OthersHandwritingResponse {

    private Long handwritingId;
    private String name;
    private String downloadUrl;
    private int hitCount;
    private int likeCount;
    private int downloadCount;
    private boolean isLike;
    private List<Integer> tag;
<<<<<<< HEAD
    private LocalDateTime createDate;
=======
    private LocalDateTime createTime;
>>>>>>> 1c41759 (fix: status 500)

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    public static OthersHandwritingResponse from(Handwriting handwriting, boolean isLike) {
        return OthersHandwritingResponse.builder()
                .handwritingId(handwriting.getHandwritingId())
                .name(handwriting.getName())
                .downloadUrl(handwriting.getDownloadUrl())
                .hitCount(handwriting.getHitCount())
                .likeCount(handwriting.getLikeCount())
                .downloadCount(handwriting.getDownloadCount())
<<<<<<< HEAD
                .createDate(handwriting.getCreateDate())
=======
                .createTime(handwriting.getCreateDate())
>>>>>>> 1c41759 (fix: status 500)
                .isLike(isLike)
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
